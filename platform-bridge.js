const Bridge = (function () {
    'use strict';

    let platform = 'none';

    let ysdk = null;
    let yaPlayer = null;

    let crazySdk = null;

    let tg = null;

    let hooks = {
        onPause: null,
        onResume: null
    };


    function detectPlatformName() {
        try {
            const params = new URLSearchParams(window.location.search);
            const override = params.get('platform');
            if (override === 'crazygames' || override === 'yandex' || override === 'telegram') {
                return override;
            }
        } catch (e) { }

        if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
            const wa = window.Telegram.WebApp;
            if (wa.initData || (wa.initDataUnsafe && Object.keys(wa.initDataUnsafe).length > 0)) {
                return 'telegram';
            }
        }

        const host = window.location.hostname || '';
        if (host.endsWith('crazygames.com')) return 'crazygames';
        if (host.endsWith('yandex.ru') || host.endsWith('yandex.net') || host.endsWith('y-games.ru')) return 'yandex';
        return 'none';
    }

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const el = document.createElement('script');
            el.src = src;
            el.onload = () => resolve();
            el.onerror = () => reject(new Error('Не удалось загрузить скрипт: ' + src));
            document.head.appendChild(el);
        });
    }


    /**
     * @param {Object} opts
     * @param {Function} [opts.onPause]
     * @param {Function} [opts.onResume]
     */
    async function init(opts = {}) {
        hooks.onPause = opts.onPause || null;
        hooks.onResume = opts.onResume || null;

        const target = detectPlatformName();

        if (target === 'crazygames') {
            await initCrazyGames();
            return;
        }

        if (target === 'yandex') {
            await initYandex();
            return;
        }

        if (target === 'telegram') {
            await initTelegram();
            return;
        }


        platform = 'none';
        console.warn('Bridge: игра запущена вне известной платформы (standalone режим).');
    }

    async function initYandex() {
        try {
            await loadScript('https://yandex.ru/games/sdk/v2');
            if (typeof YaGames === 'undefined') throw new Error('YaGames не определён после загрузки скрипта');

            ysdk = await YaGames.init();
            platform = 'yandex';

            ysdk.on('game_api_pause', () => {
                if (hooks.onPause) hooks.onPause();
            });
            ysdk.on('game_api_resume', () => {
                if (hooks.onResume) hooks.onResume();
            });

            try {
                yaPlayer = await ysdk.getPlayer({ scopes: false });
            } catch (e) {
                console.warn('Bridge(yandex): игрок недоступен, облачные сохранения выключены:', e);
            }

            if (ysdk.features && ysdk.features.LoadingAPI) {
                ysdk.features.LoadingAPI.ready();
            }
        } catch (err) {
            console.error('Bridge(yandex): ошибка инициализации SDK:', err);
            platform = 'none';
        }
    }

    async function initCrazyGames() {
        try {
            await loadScript('https://sdk.crazygames.com/crazygames-sdk-v3.js');
            if (typeof window.CrazyGames === 'undefined') throw new Error('CrazyGames не определён после загрузки скрипта');

            await window.CrazyGames.SDK.init();
            crazySdk = window.CrazyGames.SDK;
            platform = 'crazygames';

        } catch (err) {
            console.error('Bridge(crazygames): ошибка инициализации SDK:', err);
            platform = 'none';
        }
    }

    async function initTelegram() {
        try {
            if (!window.Telegram || !window.Telegram.WebApp) {
                throw new Error('window.Telegram.WebApp не найден — убедитесь, что telegram-web-app.js подключён ДО platform-bridge.js');
            }

            tg = window.Telegram.WebApp;
            platform = 'telegram';

            tg.ready();

            try { tg.expand(); } catch (e) { }

            try {
                if (typeof tg.requestFullscreen === 'function') {
                    tg.requestFullscreen();
                }
            } catch (e) { }

            applyTelegramTheme();
            try {
                tg.onEvent('themeChanged', applyTelegramTheme);
            } catch (e) { }

            try {
                if (typeof tg.disableVerticalSwipes === 'function') {
                    tg.disableVerticalSwipes();
                }
            } catch (e) { }
            try {
                if (typeof tg.enableClosingConfirmation === 'function') {
                    tg.enableClosingConfirmation();
                }
            } catch (e) { }

            try {
                tg.onEvent('viewportChanged', () => {
                    if (tg.isExpanded === false && hooks.onPause) hooks.onPause();
                });
            } catch (e) { }
            try {
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) {
                        if (hooks.onPause) hooks.onPause();
                    } else {
                        if (hooks.onResume) hooks.onResume();
                    }
                });
            } catch (e) { }

            try {
                if (tg.setHeaderColor) tg.setHeaderColor('secondary_bg_color');
            } catch (e) { }

        } catch (err) {
            console.error('Bridge(telegram): ошибка инициализации SDK:', err);
            platform = 'none';
            tg = null;
        }
    }

    function applyTelegramTheme() {
        if (!tg || !tg.themeParams) return;

        const root = document.documentElement.style;
        const tp = tg.themeParams;

        const map = {
            '--tg-theme-bg-color': tp.bg_color,
            '--tg-theme-secondary-bg-color': tp.secondary_bg_color,
            '--tg-theme-text-color': tp.text_color,
            '--tg-theme-hint-color': tp.hint_color,
            '--tg-theme-link-color': tp.link_color,
            '--tg-theme-button-color': tp.button_color,
            '--tg-theme-button-text-color': tp.button_text_color
        };

        Object.keys(map).forEach((key) => {
            if (map[key]) root.setProperty(key, map[key]);
        });

        //if (tp.bg_color) root.setProperty('--bg-color', tp.bg_color);
        //if (tp.text_color) root.setProperty('--text-main', tp.text_color);
        //if (tp.hint_color) root.setProperty('--text-muted', tp.hint_color);

        try {
            if (tg.backgroundColor !== undefined && tp.bg_color && tg.setBackgroundColor) {
                //tg.setBackgroundColor(tp.bg_color);
            }
        } catch (e) { }
    }

    function getPlatform() {
        return platform;
    }


    /** @returns {'ru'|'en'|null} */
    function getEnvLanguage() {
        if (platform === 'yandex' && ysdk) {
            try {
                return ysdk.environment.i18n.lang === 'ru' ? 'ru' : 'en';
            } catch (e) {
                return null;
            }
        }
        if (platform === 'crazygames') {
            const navLang = (navigator.language || 'en').toLowerCase();
            return navLang.startsWith('ru') ? 'ru' : 'en';
        }
        if (platform === 'telegram' && tg) {
            try {
                const langCode = (tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.language_code)
                    || navigator.language
                    || 'en';
                return langCode.toLowerCase().startsWith('ru') ? 'ru' : 'en';
            } catch (e) {
                return null;
            }
        }
        return null;
    }


    /** @returns {boolean} */
    function toggleFullscreen() {
        if (platform === 'yandex' && ysdk && ysdk.screen && ysdk.screen.fullscreen) {
            if (ysdk.screen.fullscreen.status === 'on') {
                ysdk.screen.fullscreen.exit();
            } else {
                ysdk.screen.fullscreen.request();
            }
            return true;
        }

        if (platform === 'telegram' && tg) {
            if (typeof tg.requestFullscreen !== 'function' || typeof tg.exitFullscreen !== 'function') {
                return false;
            }
            if (tg.isFullscreen) {
                tg.exitFullscreen();
            } else {
                tg.requestFullscreen();
            }
            return true;
        }

        return false;
    }


    /**
     * @param {{onClose?:Function, onError?:Function, onOffline?:Function}} cbs
     * @returns {boolean}
     */
    function showInterstitial(cbs = {}) {
        if (platform === 'yandex' && ysdk && ysdk.adv) {
            ysdk.adv.showFullscreenAdv({
                callbacks: {
                    onClose: () => cbs.onClose && cbs.onClose(),
                    onError: (e) => cbs.onError && cbs.onError(e),
                    onOffline: () => cbs.onOffline && cbs.onOffline()
                }
            });
            return true;
        }

        if (platform === 'crazygames' && crazySdk && crazySdk.ad) {
            crazySdk.ad.requestAd('midgame', {
                adStarted: () => { },
                adFinished: () => cbs.onClose && cbs.onClose(),
                adError: (e) => cbs.onError && cbs.onError(e)
            });
            return true;
        }

        return false;
    }

    /**
     * @param {{onRewarded?:Function, onClose?:Function, onError?:Function}} cbs
     * @returns {boolean}
     */
    function showRewarded(cbs = {}) {
        if (platform === 'yandex' && ysdk && ysdk.adv) {
            ysdk.adv.showRewardedVideo({
                callbacks: {
                    onRewarded: () => cbs.onRewarded && cbs.onRewarded(),
                    onClose: () => cbs.onClose && cbs.onClose(),
                    onError: (e) => cbs.onError && cbs.onError(e)
                }
            });
            return true;
        }

        if (platform === 'crazygames' && crazySdk && crazySdk.ad) {
            crazySdk.ad.requestAd('rewarded', {
                adStarted: () => { },
                adFinished: () => {
                    cbs.onRewarded && cbs.onRewarded();
                    cbs.onClose && cbs.onClose();
                },
                adError: (e) => cbs.onError && cbs.onError(e)
            });
            return true;
        }

        return false;
    }

    /** @returns {Promise<boolean>} */
    async function hasAdblock() {
        if (platform === 'yandex' && ysdk && ysdk.adv) {
            try {
                return await ysdk.adv.checkAdBlock ? await ysdk.adv.checkAdBlock() : false;
            } catch (e) {
                return false;
            }
        }
        if (platform === 'crazygames' && crazySdk && crazySdk.ad) {
            try {
                return await crazySdk.ad.hasAdblock();
            } catch (e) {
                return false;
            }
        }
        return false;
    }


    function notifyGameplayStart() {
        if (platform === 'crazygames' && crazySdk && crazySdk.game) {
            crazySdk.game.gameplayStart();
        }
    }

    function notifyGameplayStop() {
        if (platform === 'crazygames' && crazySdk && crazySdk.game) {
            crazySdk.game.gameplayStop();
        }
    }

    function notifyLoadingStart() {
        if (platform === 'crazygames' && crazySdk && crazySdk.game) {
            crazySdk.game.loadingStart();
        }
    }

    function notifyLoadingStop() {
        if (platform === 'crazygames' && crazySdk && crazySdk.game) {
            crazySdk.game.loadingStop();
        }
    }

    function notifyHappyMoment() {
        if (platform === 'crazygames' && crazySdk && crazySdk.game) {
            crazySdk.game.happytime();
        }
    }


    const CRAZY_SAVE_KEY = 'waifu_idle_save_v2';
    const TG_SAVE_KEY = 'waifu_idle_save_v2';
    const TG_CLOUD_VALUE_LIMIT = 4096;

    /** @returns {boolean}  */
    function hasCloudSave() {
        if (platform === 'yandex') return !!yaPlayer;
        if (platform === 'crazygames') return !!(crazySdk && crazySdk.data);
        if (platform === 'telegram') return !!(tg && tg.CloudStorage);
        return false;
    }

    /** @returns {Promise<Object|null>} данные из облака либо null */
    async function loadCloudData() {
        if (platform === 'yandex' && yaPlayer) {
            try {
                const data = await yaPlayer.getData();
                return (data && Object.keys(data).length > 0) ? data : null;
            } catch (e) {
                console.warn('Bridge(yandex): не удалось загрузить облачное сохранение:', e);
                return null;
            }
        }

        if (platform === 'crazygames' && crazySdk && crazySdk.data) {
            try {
                const raw = crazySdk.data.getItem(CRAZY_SAVE_KEY);
                return raw ? JSON.parse(raw) : null;
            } catch (e) {
                console.warn('Bridge(crazygames): не удалось загрузить сохранение:', e);
                return null;
            }
        }

        if (platform === 'telegram' && tg && tg.CloudStorage) {
            try {
                const raw = await new Promise((resolve, reject) => {
                    tg.CloudStorage.getItem(TG_SAVE_KEY, (err, value) => {
                        if (err) reject(err); else resolve(value);
                    });
                });
                return raw ? JSON.parse(raw) : null;
            } catch (e) {
                console.warn('Bridge(telegram): не удалось загрузить облачное сохранение:', e);
                return null;
            }
        }

        return null;
    }

    /**
     * @param {Object} data
     * @param {boolean} [flush]
     * @returns {Promise<void>}
     */
    function saveCloudData(data, flush) {
        if (platform === 'yandex' && yaPlayer) {
            return yaPlayer.setData(data, !!flush).catch(err => {
                console.warn('Bridge(yandex): не удалось сохранить в облако:', err);
            });
        }

        if (platform === 'crazygames' && crazySdk && crazySdk.data) {
            try {
                crazySdk.data.setItem(CRAZY_SAVE_KEY, JSON.stringify(data));
            } catch (e) {
                console.warn('Bridge(crazygames): не удалось сохранить:', e);
            }
            return Promise.resolve();
        }

        if (platform === 'telegram' && tg && tg.CloudStorage) {
            return new Promise((resolve) => {
                try {
                    const json = JSON.stringify(data);
                    if (json.length > TG_CLOUD_VALUE_LIMIT) {
                        console.warn('Bridge(telegram): сохранение превышает лимит CloudStorage (' + TG_CLOUD_VALUE_LIMIT + ' байт), запись пропущена. Нужно шардирование по ключам.');
                        resolve();
                        return;
                    }
                    tg.CloudStorage.setItem(TG_SAVE_KEY, json, (err) => {
                        if (err) console.warn('Bridge(telegram): не удалось сохранить в облако:', err);
                        resolve();
                    });
                } catch (e) {
                    console.warn('Bridge(telegram): не удалось сохранить в облако:', e);
                    resolve();
                }
            });
        }

        return Promise.resolve();
    }

    return {
        init,
        getPlatform,
        getEnvLanguage,
        toggleFullscreen,
        showInterstitial,
        showRewarded,
        hasAdblock,
        notifyGameplayStart,
        notifyGameplayStop,
        notifyLoadingStart,
        notifyLoadingStop,
        notifyHappyMoment,
        hasCloudSave,
        loadCloudData,
        saveCloudData
    };
})();