let currentLang = localStorage.getItem('waifu_idle_lang') || 'ru';

const I18N = {
    ru: {
        wiki_title: "📖 Книга Воительниц", wiki_tab_heroes: "👸 Героини", wiki_tab_gear: "⚔️ Снаряжение",
        stat_gold: "Золотые Кредиты", stat_bm: "Общая БМ Отряда (АТК + ХП)", stat_tokens: "Жетоны (Ковка и Выкуп Тян)", stat_unique: "Собрано Тян",
        btn_wiki: "📖 Справочник", btn_fullscreen: "⛶ Полный экран", btn_settings: "⚙️ Настройки",
        squad_title: "⚔️ Тактический статус отряда",
        lbl_win_streak: "Побед подряд (мобы/боссы):", lbl_max_streak: "Рекорд серии:",
        lbl_time_alive: "Живут без смертей:", lbl_total_time: "Общее время жизни:",
        mythic_title: "👑 Обитель Мифических Богинь", mythic_auto: "⚙️ Автоприменение активных способностей",
        mythic_shop_title: "🏪 Измерительная Лавка Артефактов",
        mythic_buy_atk: "🌌 Меч Бездны (1,000,000 Золота)", mythic_buy_hp: "👑 Щит Этернала (1,000,000 Золота)", mythic_buy_gold: "💎 Рог Изобилия (1,000,000 Золота)",
        mythic_squad: "Мифический отряд",
        banner_title: "Молитва Прекрасных Воительниц",
        banner_subtitle: "1 призыв = 100 Кредитов. Соберите сильнейший гарем для покорения подземелий.",
        btn_summon_x1: "Призыв x1", btn_summon_x10: "Призыв x10",
        forge_common: "🟢 Обычная Ковка", forge_rare: "🔵 Редкая Ковка", forge_epic: "🟣 Эпическая Ковка", forge_legendary: "🟡 Легендарная Ковка",
        forge_cost_c: "Стоимость: 10 🟢", forge_cost_r: "Стоимость: 10 🔵", forge_cost_e: "Стоимость: 10 🟣", forge_cost_l: "Стоимость: 5 🟡",
        reforge_title: "Мастерская утилизации и Сортировки реликвий",
        reforge_c: "Скрестить 3x Common", reforge_r: "Скрестить 3x Rare", reforge_e: "Скрестить 3x Epic",
        warehouse_free: "Свободный склад по разрядам редкости:",
        inv_title: "Ваш Боевой Отряд Тян", inv_subtitle: "Прямой выкуп дубликатов доступен за Жетоны!",
        btn_equip_all: "🎯 Экипировать всем лучшее доступное снаряжение",
        btn_accept: "Принять",
        overflow_title: "🚨 Оружейная переполнена!",
        overflow_subtitle: "Вы выбили новый предмет, но в инвентаре нет свободного места. Выберите действие:",
        overflow_sell: "💰 Продать этот трофей", overflow_claim: "📥 Забрать трофей",
        overflow_manage: "Управление инвентарем (Освободите место):",
        settings_title: "⚙️ Настройки", settings_lang_title: "Язык / Language", settings_lang_desc: "Переключить язык интерфейса игры.",
        settings_reset_title: "Сброс прогресса",
        settings_reset_desc: "Полностью удаляет всех героинь, снаряжение, золото и прогресс по этажам. Действие необратимо.",
        settings_reset_btn: "🗑️ Полный сброс прогресса", btn_close: "Закрыть",
        ad_freeze_title: "Показ рекламы...", ad_freeze_sub: "Игра возобновится сразу после закрытия рекламного блока",
        gold_per_sec: "сек", stage_word: "ЭТАП", rest_word: "ОТДЫХ",
        gacha_result_title: "Призыв воительниц (x{n})", forge_result_title: "Кузня: Выковано реликвий (x{n})",
        no_gear_empty: "Пусто", none_gear_option: "Без реликвии",
        btn_ability_ready: "✨ Использовать способность", btn_ability_cd: "⏳ Перезарядка: {n}с",
        btn_copy: "🧬 Копия за {cost} {emoji}", btn_equip_rec: "🎯 Экипировать рекомендуемое",
        squad_count: "В строю: {n} тян", squad_bm: "Общая БМ: {n}",
        atk_per_sec: "АТК/с", enemy_bm: "БМ Врага: {n}",
        camp_status: "Время стоянки: {n} сек", camp_info: "Зона отдыха. Здоровье отряда зафиксировано на 100%. Идет поиск вещей...",
        battle_info: "Атака отряда: {atk} АТК/сек | Сила монстра: {matk} АТК/сек | +{gold} золото/с",
        mythic_timer: "До прихода следующей мифической сущности: {m} мин {s} сек",
        ad_summon_btn: "📺 Призыв за рекламу ({n})",
        toast_not_enough_gold: "Недостаточно Кредитов для призыва!",
        toast_gear_sold: "💰 Реликвия продана за +{price} монет!",
        toast_gear_looted: "⚔️ Выбит трофей: {name} (+{bonus} {label})!",
        toast_gear_added_inv: "⚔️ Предмет добавлен в арсенал (+{bonus} {label})!",
        toast_gear_sold_immediate: "💰 Новый трофей сразу продан за +{price} монет!",
        toast_old_gear_sold: "💰 Старая реликвия продана за +{price} монет!",
        toast_reforge_evo: "✨ Успешная эволюция! Получен тир {tier}!",
        toast_reforge_done: "🔨 Перековка завершена. Получен тир {tier}",
        toast_reforge_evo2: "✨ Великолепный исход! Реликвия эволюционировала в {tier}!",
        toast_reforge_done2: "🔨 Перековка завершена. Получен предмет тира {tier}",
        toast_reforge_bulk: "🔨 Массовая перековка {tier}: {n}x, эволюций в след. тир: {evo}",
        toast_not_enough_tokens: "Недостаточно жетонов! Требуется {cost} {emoji}",
        toast_max_breakthrough: "Максимальный уровень прорыва!",
        toast_copy_bought: "🧬 Успешно куплена копия персонажа! Прогресс: x{n}",
        toast_no_gear_available: "Нет доступного снаряжения для экипировки",
        toast_equipped: "✅ Экипировано: {name}",
        toast_equipped_all: "🎯 Рекомендованное снаряжение экипировано всему отряду!",
        toast_mythic_hero: "👑 В отряд снизошла МИФИЧЕСКАЯ богиня: {name}!",
        toast_mythic_all_collected: "✨ Все мифические богини собраны! Выдано утешение: +500,000 золота!",
        toast_mythic_artifact: "✨ Абсолютный резонанс! Найден МИФИЧЕСКИЙ артефакт: {name}!",
        toast_no_camp_kill: "Нельзя истреблять костры!",
        toast_annihilate: "🌌 Пространство разорвано! Враг моментально аннигилирован!",
        toast_loot_luck: "🎰 Удача улыбнулась: выдан предмет {name}!",
        toast_not_enough_gold_shop: "Недостаточно кредитов! Лавка требует 1,000,000 монет.",
        toast_shop_bought: "🏪 Куплено из лавки Вельзевул: {name}!",
        toast_defeat: "💀 Отряд повержен! Серия побед обнулена. Отступление на 1 этап назад.",
        toast_boss_win: "🏆 БОСС побежден! Серия побед подряд: {n}",
        toast_win: "⚔️ Враг повержен! Серия побед подряд: {n}",
        toast_campfire_gear: "🔥 Костер согрел: найдена экипировка {name} (+{bonus} {label})!",
        toast_phoenix: "💖 Феникс восстал из пепла! ХП отряда полностью восстановлено!",
        toast_ad_reward: "📺 Реклама просмотрена! Начислен бонусный призыв x{n}!",
        toast_ad_unavailable: "Реклама сейчас недоступна, попробуйте позже.",
        confirm_reset1: "Вы уверены? Это НАВСЕГДА удалит весь прогресс: героинь, снаряжение, золото, жетоны и этаж. Отменить будет нельзя.",
        confirm_reset2: "Точно-точно? Это последнее предупреждение - прогресс будет стёрт безвозвратно.",
        alert_warehouse_full_rarity: "Склад этой редкости всё ещё полон!",
        alert_forge_full: "Ваша оружейная для редкости {tier} забита! Максимум: {n} шт.",
        alert_not_enough_tokens_or_space: "Недостаточно жетонов {tier} или нет свободного места!",
        alert_need3_reforge: "Необходимо минимум 3 свободных реликвии редкости {tier} для перековки!",
        alert_mythic_full: "Оружейная мификов переполнена!",
        wiki_rank: "Ранг", wiki_mythic_rank: "👑 МИФИЧЕСКИЙ РАНГ",
        wiki_owned: "✅ Открыта (копий: {n}/10)", wiki_owned_mythic: "✅ Получена", wiki_locked: "🔒 Закрыта",
        wiki_base_stats: "Базовые (1 копия): АТК {atk} | HP {hp} | ЗОЛ +{gold}/с",
        wiki_base_stats_m: "Базовые: АТК {atk} | HP {hp} | ЗОЛ +{gold}/с",
        wiki_effect: "Эффект: {desc}",
        wiki_best_mythic: "💠 Лучший мифик-артефакт: {name} ({label}, +{pct}% к итогу) — {reason}",
        wiki_copy_stats: "📊 Статы по количеству копий", wiki_copies: "Копий",
        wiki_range: "Диапазон бонуса: от {min} до {max} {label}{pct}",
        reason_gold_synergy: "синергия с золотой пассивкой", reason_atk_synergy: "синергия с атакующей пассивкой", reason_best_stat: "сильнейшая сторона героини",
        mythic_active_annihilate: "🌌 Аннигиляция Врага", mythic_active_loot: "🎰 Призыв Сокровища",
        gear_picker_label: "⚔️ Снаряжение", stage_prefix: "ЭТАП 1"
    },
    en: {
        wiki_title: "📖 Book of Warriors", wiki_tab_heroes: "👸 Heroines", wiki_tab_gear: "⚔️ Gear",
        stat_gold: "Gold Credits", stat_bm: "Total Squad Power (ATK + HP)", stat_tokens: "Tokens (Forging & Duplicate Redemption)", stat_unique: "Heroines Collected",
        btn_wiki: "📖 Codex", btn_fullscreen: "⛶ Fullscreen", btn_settings: "⚙️ Settings",
        squad_title: "⚔️ Squad Tactical Status",
        lbl_win_streak: "Wins in a row (mobs/bosses):", lbl_max_streak: "Best streak:",
        lbl_time_alive: "Alive without deaths:", lbl_total_time: "Total time alive:",
        mythic_title: "👑 Hall of Mythic Goddesses", mythic_auto: "⚙️ Auto-use active abilities",
        mythic_shop_title: "🏪 Dimensional Artifact Shop",
        mythic_buy_atk: "🌌 Blade of the Abyss (1,000,000 Gold)", mythic_buy_hp: "👑 Aegis of the Eternal (1,000,000 Gold)", mythic_buy_gold: "💎 Horn of Plenty (1,000,000 Gold)",
        mythic_squad: "Mythic Squad",
        banner_title: "Prayer of the Beautiful Warriors",
        banner_subtitle: "1 summon = 100 Credits. Gather the strongest harem to conquer the dungeons.",
        btn_summon_x1: "Summon x1", btn_summon_x10: "Summon x10",
        forge_common: "🟢 Common Forging", forge_rare: "🔵 Rare Forging", forge_epic: "🟣 Epic Forging", forge_legendary: "🟡 Legendary Forging",
        forge_cost_c: "Cost: 10 🟢", forge_cost_r: "Cost: 10 🔵", forge_cost_e: "Cost: 10 🟣", forge_cost_l: "Cost: 5 🟡",
        reforge_title: "Relic Salvage & Sorting Workshop",
        reforge_c: "Combine 3x Common", reforge_r: "Combine 3x Rare", reforge_e: "Combine 3x Epic",
        warehouse_free: "Free storage by rarity tier:",
        inv_title: "Your Heroine Squad", inv_subtitle: "Instant duplicate redemption available with Tokens!",
        btn_equip_all: "🎯 Equip best available gear to everyone",
        btn_accept: "Accept",
        overflow_title: "🚨 Armory is full!",
        overflow_subtitle: "You found a new item, but there's no free inventory space. Choose an action:",
        overflow_sell: "💰 Sell this trophy", overflow_claim: "📥 Claim trophy",
        overflow_manage: "Manage inventory (free up space):",
        settings_title: "⚙️ Settings", settings_lang_title: "Язык / Language", settings_lang_desc: "Switch the game's interface language.",
        settings_reset_title: "Reset Progress",
        settings_reset_desc: "Permanently deletes all heroines, gear, gold and floor progress. This cannot be undone.",
        settings_reset_btn: "🗑️ Full progress reset", btn_close: "Close",
        ad_freeze_title: "Showing ad...", ad_freeze_sub: "The game will resume right after the ad closes",
        gold_per_sec: "sec", stage_word: "STAGE", rest_word: "REST",
        gacha_result_title: "Summon results (x{n})", forge_result_title: "Forge: Relics crafted (x{n})",
        no_gear_empty: "Empty", none_gear_option: "No relic",
        btn_ability_ready: "✨ Use ability", btn_ability_cd: "⏳ Cooldown: {n}s",
        btn_copy: "🧬 Copy for {cost} {emoji}", btn_equip_rec: "🎯 Equip recommended",
        squad_count: "In formation: {n}", squad_bm: "Total power: {n}",
        atk_per_sec: "ATK/s", enemy_bm: "Enemy power: {n}",
        camp_status: "Camp time: {n} sec", camp_info: "Resting zone. Squad HP locked at 100%. Searching for loot...",
        battle_info: "Squad attack: {atk} ATK/sec | Monster power: {matk} ATK/sec | +{gold} gold/s",
        mythic_timer: "Next mythic entity arrives in: {m} min {s} sec",
        ad_summon_btn: "📺 Ad summon ({n})",
        toast_not_enough_gold: "Not enough Credits to summon!",
        toast_gear_sold: "💰 Relic sold for +{price} gold!",
        toast_gear_looted: "⚔️ Trophy dropped: {name} (+{bonus} {label})!",
        toast_gear_added_inv: "⚔️ Item added to armory (+{bonus} {label})!",
        toast_gear_sold_immediate: "💰 New trophy sold instantly for +{price} gold!",
        toast_old_gear_sold: "💰 Old relic sold for +{price} gold!",
        toast_reforge_evo: "✨ Successful evolution! Got tier {tier}!",
        toast_reforge_done: "🔨 Reforge complete. Got tier {tier}",
        toast_reforge_evo2: "✨ Splendid outcome! Relic evolved into {tier}!",
        toast_reforge_done2: "🔨 Reforge complete. Got a {tier} item",
        toast_reforge_bulk: "🔨 Bulk reforge {tier}: {n}x, evolutions to next tier: {evo}",
        toast_not_enough_tokens: "Not enough tokens! Requires {cost} {emoji}",
        toast_max_breakthrough: "Maximum breakthrough level reached!",
        toast_copy_bought: "🧬 Copy purchased successfully! Progress: x{n}",
        toast_no_gear_available: "No available gear to equip",
        toast_equipped: "✅ Equipped: {name}",
        toast_equipped_all: "🎯 Recommended gear equipped to the whole squad!",
        toast_mythic_hero: "👑 A MYTHIC goddess has joined the squad: {name}!",
        toast_mythic_all_collected: "✨ All mythic goddesses collected! Consolation reward: +500,000 gold!",
        toast_mythic_artifact: "✨ Absolute resonance! Found a MYTHIC artifact: {name}!",
        toast_no_camp_kill: "You can't destroy campfires!",
        toast_annihilate: "🌌 Space itself tears open! The enemy is instantly annihilated!",
        toast_loot_luck: "🎰 Luck smiled upon you: received {name}!",
        toast_not_enough_gold_shop: "Not enough credits! The shop requires 1,000,000 gold.",
        toast_shop_bought: "🏪 Bought from Beelzebub's shop: {name}!",
        toast_defeat: "💀 Squad defeated! Win streak reset. Retreating 1 stage back.",
        toast_boss_win: "🏆 BOSS defeated! Win streak: {n}",
        toast_win: "⚔️ Enemy defeated! Win streak: {n}",
        toast_campfire_gear: "🔥 The campfire warmed you: found gear {name} (+{bonus} {label})!",
        toast_phoenix: "💖 The Phoenix rose from the ashes! Squad HP fully restored!",
        toast_ad_reward: "📺 Ad watched! Bonus summon x{n} granted!",
        toast_ad_unavailable: "Ad is unavailable right now, please try again later.",
        confirm_reset1: "Are you sure? This will PERMANENTLY delete all progress: heroines, gear, gold, tokens and floor. This cannot be undone.",
        confirm_reset2: "Absolutely sure? This is the final warning - progress will be erased permanently.",
        alert_warehouse_full_rarity: "This rarity's storage is still full!",
        alert_forge_full: "Your armory for rarity {tier} is full! Maximum: {n} pcs.",
        alert_not_enough_tokens_or_space: "Not enough {tier} tokens or no free space!",
        alert_need3_reforge: "You need at least 3 free {tier} relics to reforge!",
        alert_mythic_full: "The mythic armory is full!",
        wiki_rank: "Rank", wiki_mythic_rank: "👑 MYTHIC RANK",
        wiki_owned: "✅ Unlocked (copies: {n}/10)", wiki_owned_mythic: "✅ Obtained", wiki_locked: "🔒 Locked",
        wiki_base_stats: "Base (1 copy): ATK {atk} | HP {hp} | GOLD +{gold}/s",
        wiki_base_stats_m: "Base: ATK {atk} | HP {hp} | GOLD +{gold}/s",
        wiki_effect: "Effect: {desc}",
        wiki_best_mythic: "💠 Best mythic artifact: {name} ({label}, +{pct}% total) — {reason}",
        wiki_copy_stats: "📊 Stats by copy count", wiki_copies: "Copies",
        wiki_range: "Bonus range: from {min} to {max} {label}{pct}",
        reason_gold_synergy: "synergy with gold passive", reason_atk_synergy: "synergy with attack passive", reason_best_stat: "heroine's strongest stat",
        mythic_active_annihilate: "🌌 Annihilate Enemy", mythic_active_loot: "🎰 Summon Treasure",
        gear_picker_label: "⚔️ Gear", stage_prefix: "STAGE 1"
    }
};

function t(key, params) {
    let str = (I18N[currentLang] && I18N[currentLang][key]) || I18N.ru[key] || key;
    if (params) {
        Object.keys(params).forEach(p => { str = str.replace(`{${p}}`, params[p]); });
    }
    return str;
}

function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) langBtn.innerText = currentLang === 'ru' ? '🌐 RU (нажмите для EN)' : '🌐 EN (click for RU)';
    document.documentElement.lang = currentLang;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('waifu_idle_lang', lang);
    applyStaticTranslations();
    renderInventory();
    updateUI();
    if (document.getElementById('wiki-drawer').classList.contains('open')) {
        switchWikiTab(currentWikiTab);
    }
}

function toggleLanguage() {
    setLanguage(currentLang === 'ru' ? 'en' : 'ru');
}

const NAME_EN = {
    lily: "🧙‍♀️ Apprentice Mage Lily", aria: "🏹 Forest Archer Aria", mia: "🐱 Beastgirl Mia", nina: "⛪ Nun Nina", saya: "🥷 Ninja Saya",
    rose: "⚔️ Swordswoman Rose", kira: "🗺️ Pathfinder Kira", rem: "🧹 Maid Rem", rin: "🦊 Trickster Fox Rin", noelle: "🛡️ Knight Noelle",
    claudia: "⚜️ Paladin Claudia", elena: "📜 Inquisitor Elena", lucy: "💀 Necromancer Lucy", asuna: "⚡ Storm Swordswoman Asuna", morgana: "🔮 Shadow Witch Morgana",
    valkyrie: "🐉 Dragon Rider Valkyrie", selina: "🔥 Fire Archmage Selina", aquella: "🌊 Ocean Priestess Aquella", yolanda: "⛓️ Iron Maiden Yolanda",
    freya: "👑 Warrior Queen Freya", kaneka: "🗡️ Shadow Blade Kaneka", esdeath: "❄️ Ice General Esdeath", tiamat: "🌋 Chaos Dragon Tiamat",
    mythic_oneclick: "🌌 Void Blade Shin", mythic_loot: "🎰 Goddess of Fortune Luxia", mythic_autoheal: "💖 Immortal Phoenix Rias",
    mythic_shop_bag: "🏪 Spatial Beelzebub", mythic_cdr_buff: "⏳ Keeper of Time Chronos",
    gear_c1: "Novice's Steel Sword", gear_c2: "Trainee's Sturdy Shield", gear_c3: "Old Lucky Coin",
    gear_r1: "Runic Sword of Power", gear_r2: "Amulet of the Living Soul", gear_r3: "Merchant's Purse",
    gear_e1: "Bow of the Starfall Rift", gear_e2: "Titan's Dense Mantle", gear_e3: "Midas' Golden Crown",
    gear_l1: "Holy Excalibur", gear_l2: "Heart of the Progenitor", gear_l3: "Cup of Infinite Wealth",
    gear_m1: "Claymore of Primordial Chaos", gear_m2: "Aegis of Absolute Immortality", gear_m3: "Universal Horn of Plenty"
};

const PASSIVE_DESC_EN = {
    valkyrie: "×2 personal ATK", selina: "+10% to all gold in the world", aquella: "+15% to passive gold", yolanda: "+10% to squad ATK",
    freya: "+12% to squad ATK", kaneka: "+18% to squad ATK", esdeath: "+25% gold from all sources", tiamat: "+25% to squad ATK",
    mythic_oneclick: "Active: One-shot a monster (CD 5 min)", mythic_loot: "Active: Guaranteed 4★+ gear (CD 5 min)",
    mythic_autoheal: "Auto-heals squad to 100% at <10% HP (CD 10 min)", mythic_shop_bag: "Mythic artifact shop, x5 backpack",
    mythic_cdr_buff: "-10% mythic CD, +10% stats for other ranks"
};

const MAX_UPGRADE_PASSIVES_EN = {
    1: "Breakthrough I: +20% to stats", 2: "Breakthrough II: +30% to stats", 3: "Breakthrough III: +40% to stats",
    4: "Breakthrough IV: +50% to stats", 5: "Breakthrough V: +60% to stats"
};

function localizedName(obj) {
    if (!obj || !obj.id) return obj ? obj.name : '';
    if (currentLang === 'en' && NAME_EN[obj.id]) return NAME_EN[obj.id];
    return obj.name;
}

function localizedPassiveDesc(char) {
    if (!char) return '';
    if (currentLang === 'en' && char.id && PASSIVE_DESC_EN[char.id]) return PASSIVE_DESC_EN[char.id];
    return char.passiveDesc;
}

function localizedBreakthroughDesc(stars) {
    if (currentLang === 'en') return MAX_UPGRADE_PASSIVES_EN[stars];
    return MAX_UPGRADE_PASSIVES[stars].desc;
}

const MONSTER_PREFIXES_EN = ["Wild", "Cursed", "Cave", "Bloodied", "Elite", "Infernal", "Ancient"];
const MONSTER_TYPES_EN = ["Slime", "Goblin", "Orc Raider", "Skeleton Warrior", "Harpy", "Stone Golem", "Chimera", "Abyss Dragon"];
const CHARACTER_DATABASE = {
    1: [
        { id: "lily", name: "🧙‍♀️ Маг-Ученица Лили", stars: 1, baseAtk: 0.05, baseHp: 0.20, baseGold: 0.02 },
        { id: "aria", name: "🏹 Лучник Леса Ария", stars: 1, baseAtk: 0.06, baseHp: 0.16, baseGold: 0.02 },
        { id: "mia", name: "🐱 Зверодевочка Мия", stars: 1, baseAtk: 0.04, baseHp: 0.24, baseGold: 0.03 },
        { id: "nina", name: "⛪ Монахиня Нина", stars: 1, baseAtk: 0.02, baseHp: 0.30, baseGold: 0.04 },
        { id: "saya", name: "🥷 Ниндзя Сая", stars: 1, baseAtk: 0.08, baseHp: 0.12, baseGold: 0.01 }
    ],
    2: [
        { id: "rose", name: "⚔️ Мечница Роза", stars: 2, baseAtk: 0.12, baseHp: 0.48, baseGold: 0.10 },
        { id: "kira", name: "🗺️ Следопыт Кира", stars: 2, baseAtk: 0.15, baseHp: 0.40, baseGold: 0.08 },
        { id: "rem", name: "🧹 Горничная Рем", stars: 2, baseAtk: 0.16, baseHp: 0.36, baseGold: 0.05 },
        { id: "rin", name: "🦊 Лиса-Плутовка Рин", stars: 2, baseAtk: 0.10, baseHp: 0.55, baseGold: 0.15 },
        { id: "noelle", name: "🛡️ Рыцарь Ноэль", stars: 2, baseAtk: 0.07, baseHp: 0.70, baseGold: 0.04 }
    ],
    3: [
        { id: "claudia", name: "⚜️ Паладин Клодия", stars: 3, baseAtk: 0.45, baseHp: 1.55, baseGold: 0.40 },
        { id: "elena", name: "📜 Инквизитор Елена", stars: 3, baseAtk: 0.55, baseHp: 1.25, baseGold: 0.30 },
        { id: "lucy", name: "💀 Некромантка Люси", stars: 3, baseAtk: 0.35, baseHp: 1.75, baseGold: 0.55 },
        { id: "asuna", name: "⚡ Грозовая Мечница Асуна", stars: 3, baseAtk: 0.65, baseHp: 1.05, baseGold: 0.25 },
        { id: "morgana", name: "🔮 Ведьма Тени Моргана", stars: 3, baseAtk: 0.30, baseHp: 2.00, baseGold: 0.70 }
    ],
    4: [
        { id: "valkyrie", name: "🐉 Наездница Драконов", stars: 4, baseAtk: 1.40, baseHp: 6.10, baseGold: 2.0, passive: "double_bm", passiveDesc: "×2 личная АТК" },
        { id: "selina", name: "🔥 Архимаг Огня Селина", stars: 4, baseAtk: 2.10, baseHp: 4.40, baseGold: 1.5, passive: "gold_fever", passiveDesc: "+10% ко всему золоту мира" },
        { id: "aquella", name: "🌊 Жрица Океана Аквелла", stars: 4, baseAtk: 0.95, baseHp: 7.50, baseGold: 3.0, passive: "ocean_wealth", passiveDesc: "+15% к пассивному золоту" },
        { id: "yolanda", name: "⛓️ Железная Дева Иоланда", stars: 4, baseAtk: 1.10, baseHp: 8.00, baseGold: 1.0, passive: "fortress", passiveDesc: "+10% к АТК всего отряда" }
    ],
    5: [
        { id: "freya", name: "👑 Королева Воинов Фрейя", stars: 5, baseAtk: 3.80, baseHp: 22.00, baseGold: 10.0, passive: "god_blessing", passiveDesc: "+12% к АТК всего отряда" },
        { id: "kaneka", name: "🗡️ Теневой Клинок Канека", stars: 5, baseAtk: 5.20, baseHp: 18.00, baseGold: 8.0, passive: "overdrive", passiveDesc: "+18% к АТК всего отряда" },
        { id: "esdeath", name: "❄️ Генерал Льда Эсдес", stars: 5, baseAtk: 4.10, baseHp: 26.00, baseGold: 15.0, passive: "imperial_tax", passiveDesc: "+25% к золоту из всех источников" },
        { id: "tiamat", name: "🌋 Дракон Хаоса Тиамат", stars: 5, baseAtk: 6.50, baseHp: 31.00, baseGold: 6.0, passive: "dragon_rage", passiveDesc: "+25% к АТК всего отряда" }
    ]
};

const MYTHIC_HEROES_POOL = [
    { id: "mythic_oneclick", name: "🌌 Пустотная Клинок Син", stars: 6, baseAtk: 15.0, baseHp: 80.0, baseGold: 50.0, passive: "m_active", passiveDesc: "Активка: Ваншот моба (КД 5 мин)" },
    { id: "mythic_loot", name: "🎰 Богиня Фортуны Люксия", stars: 6, baseAtk: 12.0, baseHp: 90.0, baseGold: 60.0, passive: "m_active", passiveDesc: "Активка: Гарантирован гир 4★+ (КД 5 мин)" },
    { id: "mythic_autoheal", name: "💖 Бессмертная Феникс Риас", stars: 6, baseAtk: 10.0, baseHp: 150.0, baseGold: 40.0, passive: "m_auto", passiveDesc: "Авто-хилл отряда на 100% при <10% ХП (КД 10 мин)" },
    { id: "mythic_shop_bag", name: "🏪 Пространственная Вельзевул", stars: 6, baseAtk: 14.0, baseHp: 70.0, baseGold: 100.0, passive: "m_shop", passiveDesc: "Лавка мификов артефактов, рюкзак х5" },
    { id: "mythic_cdr_buff", name: "⏳ Хранительница Времени Кронос", stars: 6, baseAtk: 18.0, baseHp: 100.0, baseGold: 50.0, passive: "m_buff", passiveDesc: "-10% КД мификов, +10% статы остальных рангов" }
];

const MAX_UPGRADE_PASSIVES = {
    1: { desc: "Прорыв I: +20% к статам", mult: 0.20 },
    2: { desc: "Прорыв II: +30% к статам", mult: 0.30 },
    3: { desc: "Прорыв III: +40% к статам", mult: 0.40 },
    4: { desc: "Прорыв IV: +50% к статам", mult: 0.50 },
    5: { desc: "Прорыв V: +60% к статам", mult: 0.60 }
};

const GEAR_POOLS = {
    common: [
        { id: "gear_c1", name: "Стальной Меч Новичка", type: "atk", minBonus: 0.02, maxBonus: 0.06 },
        { id: "gear_c2", name: "Крепкий Щит Стажёра", type: "hp", minBonus: 0.05, maxBonus: 0.15 },
        { id: "gear_c3", name: "Старая Монета Удачи", type: "gold", minBonus: 0.01, maxBonus: 0.03 }
    ],
    rare: [
        { id: "gear_r1", name: "Рунический Меч Власти", type: "atk", minBonus: 0.08, maxBonus: 0.20 },
        { id: "gear_r2", name: "Амулет Живой Души", type: "hp", minBonus: 0.20, maxBonus: 0.50 },
        { id: "gear_r3", name: "Кошель Торговца", type: "gold", minBonus: 0.04, maxBonus: 0.10 }
    ],
    epic: [
        { id: "gear_e1", name: "Лук Звездного Разлома", type: "atk", minBonus: 0.40, maxBonus: 1.10 },
        { id: "gear_e2", name: "Плотная Мантия Титана", type: "hp", minBonus: 1.00, maxBonus: 2.80 },
        { id: "gear_e3", name: "Золотая Корона Мидаса", type: "gold", minBonus: 0.20, maxBonus: 0.60 }
    ],
    legendary: [
        { id: "gear_l1", name: "Святой Экскалибур", type: "atk", minBonus: 2.20, maxBonus: 5.50 },
        { id: "gear_l2", name: "Сердце Прародителя", type: "hp", minBonus: 5.00, maxBonus: 14.00 },
        { id: "gear_l3", name: "Кубок Бесконечного Богатства", type: "gold", minBonus: 1.00, maxBonus: 3.00 }
    ],
    mythic: [
        { id: "gear_m1", name: "Клеймор Первородного Хаоса", type: "atk", minBonus: 12.0, maxBonus: 28.0, pct: 25 },
        { id: "gear_m2", name: "Эгида Абсолютного Бессмертия", type: "hp", minBonus: 30.0, maxBonus: 75.0, pct: 30 },
        { id: "gear_m3", name: "Рог Изобилия Вселенной", type: "gold", minBonus: 6.0, maxBonus: 15.0, pct: 20 }
    ]
};

const TOTAL_CHARACTERS_COUNT = Object.values(CHARACTER_DATABASE).flat().length + MYTHIC_HEROES_POOL.length;

const TOKEN_MAP = { 1: 'common', 2: 'common', 3: 'rare', 4: 'epic', 5: 'legendary' };
const CHAR_TOKEN_COST = { 1: 15, 2: 30, 3: 15, 4: 10, 5: 5 };
const TOKEN_EMOJIS = { common: '🟢', rare: '🔵', epic: '🟣', legendary: '🟡' };
const GEAR_FORGE_COST = { common: 10, rare: 10, epic: 10, legendary: 5 };

const DROP_RATES = { 5: 0.6, 4: 5.4, 3: 15, 2: 39, 1: 40 };
const GEAR_SELL_PRICES = { common: 100, rare: 400, epic: 1500, legendary: 7000, mythic: 25000 };

const rarityColors = { 
    1: '#757575', 2: '#388e3c', 3: '#0288d1', 4: '#a124c7', 5: '#ff8f00', 6: '#ff3366',
    'common': '#4caf50', 'rare': '#2196f3', 'epic': '#e040fb', 'legendary': '#ff8f00', 'mythic': '#ff3366'
};

function getGearLabel(type) {
    if (type === 'atk') return currentLang === 'en' ? 'ATK' : 'АТК';
    if (type === 'hp') return 'HP';
    if (type === 'gold') return currentLang === 'en' ? 'GOLD' : 'ЗОЛ';
    return '';
}

function getEmojiFromName(name) {
    if (!name) return '❔';
    const idx = name.indexOf(' ');
    return idx > -1 ? name.substring(0, idx) : name;
}

function buildCharPortraitHTML(char, sizeClass) {
    const emoji = getEmojiFromName(char.name);
    return `
        <div class="char-portrait ${sizeClass || ''}">
            <div class="portrait-fallback">${emoji}</div>
            <img class="portrait-img" src="assets/characters/${char.id}.png" alt=""
                 onload="this.previousElementSibling.style.display='none';"
                 onerror="this.style.display='none';">
        </div>
    `;
}

function buildCharPortraitSquareHTML(char) {
    const emoji = getEmojiFromName(char.name);
    return `
        <div class="char-portrait-square">
            <div class="portrait-fallback">${emoji}</div>
            <img class="portrait-img" src="assets/characters/${char.id}.png" alt=""
                 onload="this.previousElementSibling.style.display='none';"
                 onerror="this.style.display='none';">
        </div>
    `;
}

function buildCharCardHTML(char, currentCharAtk, currentCharHp, currentCharGold, passiveHTML, isMax, countText) {
    const starsStr = char.stars === 6 ? "👑" : "★".repeat(char.stars);
    const emoji = getEmojiFromName(char.name);
    const currentlyEquipped = player.gearInventory.find(g => g.equippedTo === char.id);

    const tType = TOKEN_MAP[char.stars];
    const tCost = CHAR_TOKEN_COST[char.stars];
    const buyBtnHTML = (isMax || char.stars === 6) ? '' :
        `<button class="btn-buy-copy" onclick="buyCharacterCopy('${char.id}', ${char.stars})">${t('btn_copy', { cost: tCost, emoji: TOKEN_EMOJIS[tType] })}</button>`;

    const candidates = player.gearInventory.filter(g => g.equippedTo === null || g.equippedTo === char.id);
    const sortedGear = sortGearForPicker(candidates);
    let pickerHTML = `
        <div class="gear-picker-label">${t('gear_picker_label')}</div>
        <div class="gear-picker-list">
            <div class="gear-picker-item none-option ${!currentlyEquipped ? 'equipped' : ''}" onclick="changeEquipmentFromPicker('${char.id}','none')">${t('none_gear_option')}</div>
    `;
    sortedGear.forEach(gear => {
        const isEq = gear.equippedTo === char.id;
        const pctTag = gear.pct ? ` (+${gear.pct}%)` : '';
        pickerHTML += `
            <div class="gear-picker-item ${isEq ? 'equipped' : ''}" style="border-left-color:${rarityColors[gear.rarity]}" onclick="changeEquipmentFromPicker('${char.id}','${gear.instanceId}')">
                ${buildGearPortraitHTML(gear, 'gear-portrait-sm')}
                <span class="gpi-text">[${gear.rarity.toUpperCase()}] ${localizedName(gear)} (+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)}${pctTag})</span>
                ${isEq ? '<span class="gpi-check">✓</span>' : ''}
            </div>
        `;
    });
    pickerHTML += `</div>`;

    let mythicAbilityHTML = '';
    if (char.passive === 'm_active') {
        const cd = player.mythicCooldowns[char.id] || 0;
        mythicAbilityHTML = `
            <button class="btn-mythic-ability-card" data-hero-id="${char.id}" ${cd > 0 ? 'disabled' : ''} onclick="useMythicAbility('${char.id}')">
                ${cd > 0 ? t('btn_ability_cd', { n: cd }) : t('btn_ability_ready')}
            </button>
            <div class="mythic-ability-desc">${localizedPassiveDesc(char)}</div>
        `;
    }

    return `
        <div class="char-portrait-full">
            <div class="char-stars-badge" style="color:${rarityColors[char.stars]}">${starsStr}</div>
            <div class="char-count" ${isMax ? 'style="background:#ff8f00;"' : ''}>${countText}</div>
            <div class="portrait-fallback">${emoji}</div>
            <img class="portrait-img" src="assets/characters/${char.id}.png" alt=""
                 onload="this.previousElementSibling.style.display='none';"
                 onerror="this.style.display='none';">
            <div class="char-portrait-namebar">
                <div class="char-portrait-name">${localizedName(char)}</div>
                <button class="char-expand-btn" onclick="toggleCharExpand('${char.id}')" title="Подробнее">▼</button>
            </div>
        </div>
        <div class="char-card-details">
            <div class="char-stat-row">
                <span class="char-income">${currentCharAtk.toFixed(2)} ${currentLang === 'en' ? 'ATK' : 'АТК'}</span>
                <span class="char-hp-stat">${currentCharHp.toFixed(2)} HP</span>
            </div>
            <div class="char-stat-row"><span class="char-gold-income">+${currentCharGold.toFixed(2)} ${currentLang === 'en' ? 'GOLD/s' : 'ЗОЛ/с'}</span></div>
            ${passiveHTML}
            ${mythicAbilityHTML}
            <button class="btn-equip-recommended" onclick="equipRecommendedGear('${char.id}')">${t('btn_equip_rec')}</button>
            ${pickerHTML}
            ${buyBtnHTML}
        </div>
    `;
}

function buildGearPortraitHTML(gearLike, sizeClass) {
    const emoji = getEmojiFromName(gearLike.name);
    return `
        <div class="gear-portrait ${sizeClass || ''}">
            <div class="portrait-fallback">${emoji}</div>
            <img class="portrait-img" src="assets/gears/${gearLike.id}.png" alt=""
                 onload="this.previousElementSibling.style.display='none';"
                 onerror="this.style.display='none';">
        </div>
    `;
}

const ARENA_MAX_SPRITES = 6;
const ARENA_ROTATE_EVERY_TICKS = 8;
const ARENA_LEAVE_MS = 300;
const ARENA_WIPE_STAGGER_MS = 110;
let arenaRotationOffset = 0;
let arenaRotationCounter = 0;

function buildArenaSpriteHTML(entity, extraClass) {
    const emoji = entity.emoji || getEmojiFromName(entity.name || '❔');
    let imgSrc = null;
    if (entity.isCharacter && entity.id) imgSrc = `assets/characters/${entity.id}.png`;
    else if (entity.spriteId) imgSrc = `assets/mobs/${entity.spriteId}.png`;

    return `
        <div class="arena-sprite ${extraClass || ''}" data-entity-id="${entity.id || entity.spriteId || ''}">
            <div class="portrait-fallback">${emoji}</div>
            ${imgSrc ? `<img class="portrait-img" src="${imgSrc}" alt=""
                 onload="this.previousElementSibling.style.display='none';"
                 onerror="this.style.display='none';">` : ''}
        </div>
    `;
}

function pickArenaSquadSubset() {
    const roster = player.ownedCharacters;
    if (roster.length === 0) return [];
    if (roster.length <= ARENA_MAX_SPRITES) return roster.slice();

    const subset = [];
    for (let i = 0; i < ARENA_MAX_SPRITES; i++) {
        subset.push(roster[(arenaRotationOffset + i) % roster.length]);
    }
    return subset;
}

let arenaSlotState = [];

function ensureArenaSlots() {
    const side = document.getElementById('arena-squad-side');
    if (!side) return null;
    if (side.children.length !== ARENA_MAX_SPRITES) {
        side.innerHTML = '';
        arenaSlotState = [];
        for (let i = 0; i < ARENA_MAX_SPRITES; i++) {
            const slot = document.createElement('div');
            slot.className = 'arena-slot';
            side.appendChild(slot);
            arenaSlotState.push({ id: null, removeTimeout: null, addTimeout: null });
        }
    }
    return side;
}

function renderArenaSquadSide() {
    const side = ensureArenaSlots();
    if (!side) return;

    const subset = pickArenaSquadSubset();
    const slots = Array.from(side.children);

    slots.forEach((slot, i) => {
        const newChar = subset[i] || null;
        const newId = newChar ? newChar.id : null;
        const state = arenaSlotState[i];

        if (state.id === newId) return;

        if (state.removeTimeout) { clearTimeout(state.removeTimeout); state.removeTimeout = null; }
        if (state.addTimeout) { clearTimeout(state.addTimeout); state.addTimeout = null; }

        const existingSprite = slot.querySelector('.arena-sprite');
        if (existingSprite) {
            existingSprite.classList.remove('entering');
            existingSprite.classList.add('leaving');
            state.removeTimeout = setTimeout(() => {
                existingSprite.remove();
                state.removeTimeout = null;
            }, ARENA_LEAVE_MS);
        }

        state.id = newId;

        if (newChar) {
            const delay = existingSprite ? ARENA_LEAVE_MS : 0;
            state.addTimeout = setTimeout(() => {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = buildArenaSpriteHTML({ ...newChar, isCharacter: true }, 'entering');
                const spriteEl = wrapper.firstElementChild;
                slot.appendChild(spriteEl);
                setTimeout(() => spriteEl.classList.remove('entering'), 550);
                state.addTimeout = null;
            }, delay);
        }
    });
}

function playArenaSquadWipe() {
    const side = ensureArenaSlots();
    if (!side) return;
    const slots = Array.from(side.children);

    slots.forEach((slot, i) => {
        const state = arenaSlotState[i];
        const sprite = slot.querySelector('.arena-sprite');
        if (!sprite) return;

        if (state.removeTimeout) { clearTimeout(state.removeTimeout); state.removeTimeout = null; }
        if (state.addTimeout) { clearTimeout(state.addTimeout); state.addTimeout = null; }
        state.id = null;

        const isTopRow = i < 3;
        setTimeout(() => {
            sprite.classList.add(isTopRow ? 'leaving-up' : 'leaving-down');
            setTimeout(() => sprite.remove(), ARENA_LEAVE_MS);
        }, i * ARENA_WIPE_STAGGER_MS);
    });

    setTimeout(() => {
        renderArenaSquadSide();
    }, slots.length * ARENA_WIPE_STAGGER_MS + ARENA_LEAVE_MS);
}

function renderArenaEnemySide() {
    const side = document.getElementById('arena-enemy-side');
    if (!side) return;

    const oldSprite = side.querySelector('.arena-sprite');
    const newHTML = buildArenaSpriteHTML({ name: currentEnemy.name, emoji: currentEnemy.emoji, spriteId: currentEnemy.spriteId }, 'arena-enemy-sprite entering');

    const stripEntering = () => {
        const el = side.querySelector('.arena-sprite');
        if (el) setTimeout(() => el.classList.remove('entering'), 550);
    };

    if (oldSprite) {
        oldSprite.classList.add('leaving');
        setTimeout(() => { side.innerHTML = newHTML; stripEntering(); }, ARENA_LEAVE_MS);
    } else {
        side.innerHTML = newHTML;
        stripEntering();
    }
}

function renderArena() {
    renderArenaSquadSide();
    renderArenaEnemySide();
}

function setArenaResting(isResting) {
    const arena = document.getElementById('arena-container');
    if (arena) arena.classList.toggle('resting', isResting);
}

function replayArenaAnimation(el, className) {
    if (!el) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
    const duration = className === 'hit' ? 420 : 470;
    clearTimeout(el[`_${className}Timeout`]);
    el[`_${className}Timeout`] = setTimeout(() => {
        el.classList.remove(className);
    }, duration);
}

function triggerArenaSquadAttack() {
    const squadSprites = document.querySelectorAll('#arena-squad-side .arena-sprite:not(.leaving)');
    squadSprites.forEach(el => replayArenaAnimation(el, 'attacking'));
    const enemySprite = document.querySelector('#arena-enemy-side .arena-sprite:not(.leaving)');
    replayArenaAnimation(enemySprite, 'hit');
}

function triggerArenaEnemyAttack() {
    const enemySprite = document.querySelector('#arena-enemy-side .arena-sprite:not(.leaving)');
    replayArenaAnimation(enemySprite, 'attacking');
    const squadSprites = document.querySelectorAll('#arena-squad-side .arena-sprite:not(.leaving)');
    if (squadSprites.length > 0) {
        const randomOne = squadSprites[Math.floor(Math.random() * squadSprites.length)];
        replayArenaAnimation(randomOne, 'hit');
    }
}

const MONSTER_PREFIXES = ["Дикий", "Проклятый", "Пещерный", "Кровавый", "Элитный", "Адский", "Древний"];
const MONSTER_TYPES = ["Слайм", "Гоблин", "Орк-Налётчик", "Скелет-Воин", "Гарпия", "Каменный Голем", "Химера", "Дракон Бездны"];
const MONSTER_TYPE_EMOJIS = ["🟢", "👺", "👹", "💀", "🦅", "🗿", "🐲", "🐉"];
const MONSTER_TYPE_IDS = ["slime", "goblin", "orc_raider", "skeleton_warrior", "harpy", "stone_golem", "chimera", "abyss_dragon"];
const BOSS_EMOJI = "👑";
const BOSS_SPRITE_SUFFIX = "_boss";

let player = {
    gold: 1000,
    tokens: { common: 0, rare: 0, epic: 0, legendary: 0 },
    ownedCharacters: [],
    gearInventory: [],
    battleStage: 1,
    squadCurrentHp: 0,
    bossWinStreak: 0,
    maxBossWinStreak: 0,
    timeAlive: 0,
    totalTimeAlive: 0,
    savedCampState: null,
    mythicTimer: 0,
    mythicCooldowns: { mythic_oneclick: 0, mythic_loot: 0, mythic_autoheal: 0 },
    settings: { autoMythicAbilities: false }
};

let currentEnemy = { name: "", emoji: "👾", spriteId: "", hp: 0, maxHp: 0, atk: 0, reward: 0 };
let gearCounter = 0;
let pendingDroppedGear = null;
let saveTimerCounter = 0;

let campState = {
    isActive: false,
    timeLeft: 0,
    hasDroppedGear: false
};

function getMaxGearLimit() {
    return player.ownedCharacters.some(c => c.id === "mythic_shop_bag") ? 250 : 50;
}

function formatTime(seconds) {
    if (seconds <= 0) return "0 сек";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    
    let result = "";
    if (h > 0) result += `${h} ч `;
    if (m > 0) result += `${m} мин `;
    if (s > 0 || result === "") result += `${s} сек`;
    return result.trim();
}

function saveGame() {
    try {
        player.savedCampState = campState.isActive ? { timeLeft: campState.timeLeft, hasDroppedGear: campState.hasDroppedGear } : null;
        localStorage.setItem('waifu_idle_save_v2', JSON.stringify(player));
        scheduleCloudSave();
    } catch (e) {
        console.error(e);
    }
}

async function loadGame() {
    let parsed = null;

    if (yaPlayer) {
        try {
            const cloudData = await yaPlayer.getData();
            if (cloudData && Object.keys(cloudData).length > 0) {
                parsed = cloudData;
            }
        } catch (e) {
            console.warn('Облачное сохранение недоступно, используем локальное:', e);
        }
    }

    if (!parsed) {
        try {
            const saved = localStorage.getItem('waifu_idle_save_v2');
            if (saved) {
                parsed = JSON.parse(saved);
            }
        } catch (e) {
            console.error(e);
        }
    }

    if (parsed) {
        player = Object.assign({}, player, parsed);
    }

    if (!player.tokens) player.tokens = { common: 0, rare: 0, epic: 0, legendary: 0 };
    if (!player.gearInventory) player.gearInventory = [];
    if (!player.ownedCharacters) player.ownedCharacters = [];
    if (!player.mythicCooldowns) player.mythicCooldowns = { mythic_oneclick: 0, mythic_loot: 0, mythic_autoheal: 0 };
    if (player.gold === undefined || isNaN(player.gold)) player.gold = 1000;
    if (player.battleStage === undefined || isNaN(player.battleStage)) player.battleStage = 1;
    if (player.bossWinStreak === undefined) player.bossWinStreak = 0;
    if (player.maxBossWinStreak === undefined) player.maxBossWinStreak = player.bossWinStreak;
    if (player.timeAlive === undefined) player.timeAlive = 0;
    if (player.totalTimeAlive === undefined) player.totalTimeAlive = 0;
    if (player.mythicTimer === undefined) player.mythicTimer = 0;
    if (!player.settings) player.settings = { autoMythicAbilities: false };
    if (player.settings.autoMythicAbilities === undefined) player.settings.autoMythicAbilities = false;

    gearCounter = player.gearInventory.length;

    const maxHp = calculateTotalHp();
    if (player.squadCurrentHp === undefined || player.squadCurrentHp <= 0 || isNaN(player.squadCurrentHp)) {
        player.squadCurrentHp = maxHp;
    }
}

function showToast(message, color = '#ff8f00') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.borderLeftColor = color;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

function getGearCountByRarity(rarity) {
    return player.gearInventory.filter(g => g.rarity === rarity).length;
}

function calculateTotalAtk() {
    let total = 0;
    let globalMultiplier = 1;
    const hasCdrChronos = player.ownedCharacters.some(c => c.id === "mythic_cdr_buff");

    player.ownedCharacters.forEach(char => {
        let charAtk = char.baseAtk * (1 + (char.count - 1) * 0.5);
        if (char.stars < 6 && hasCdrChronos) charAtk *= 1.10; 

        const equipped = player.gearInventory.find(g => g.equippedTo === char.id);
        if (equipped && equipped.type === "atk") {
            if (equipped.rarity === "mythic") {
                charAtk = (charAtk + equipped.bonus) * (1 + (equipped.pct || 0) / 100);
            } else {
                charAtk += equipped.bonus;
            }
        }
        if (char.count >= 10 && char.stars <= 5) charAtk *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
        
        if (char.passive === "double_bm") charAtk *= 2;
        if (char.passive === "god_blessing") globalMultiplier += 0.12;
        if (char.passive === "overdrive") globalMultiplier += 0.18;
        if (char.passive === "dragon_rage") globalMultiplier += 0.25;
        if (char.passive === "fortress") globalMultiplier += 0.10;

        total += charAtk;
    });

    return total * globalMultiplier;
}

function calculateTotalHp() {
    let total = 0;
    const hasCdrChronos = player.ownedCharacters.some(c => c.id === "mythic_cdr_buff");

    player.ownedCharacters.forEach(char => {
        let charHp = char.baseHp * (1 + (char.count - 1) * 0.5);
        if (char.stars < 6 && hasCdrChronos) charHp *= 1.10;

        const equipped = player.gearInventory.find(g => g.equippedTo === char.id);
        if (equipped && equipped.type === "hp") {
            if (equipped.rarity === "mythic") {
                charHp = (charHp + equipped.bonus) * (1 + (equipped.pct || 0) / 100);
            } else {
                charHp += equipped.bonus; 
            }
        }
        if (char.count >= 10 && char.stars <= 5) charHp *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
        total += charHp;
    });
    return total === 0 ? 0.4 : total; 
}

function calculateTotalBM() {
    return calculateTotalAtk() + calculateTotalHp();
}

function calculateTotalGoldIncome() {
    let totalGold = 0;
    let globalGoldMultiplier = 1;
    const hasCdrChronos = player.ownedCharacters.some(c => c.id === "mythic_cdr_buff");

    player.ownedCharacters.forEach(char => {
        let charGold = char.baseGold * (1 + (char.count - 1) * 0.5);
        if (char.stars < 6 && hasCdrChronos) charGold *= 1.10;

        const equipped = player.gearInventory.find(g => g.equippedTo === char.id);
        if (equipped && equipped.type === "gold") {
            if (equipped.rarity === "mythic") {
                charGold = (charGold + equipped.bonus) * (1 + (equipped.pct || 0) / 100);
            } else {
                charGold += equipped.bonus;
            }
        }

        if (char.count >= 10 && char.stars <= 5) charGold *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
        
        if (char.passive === "gold_fever") globalGoldMultiplier += 0.10;
        if (char.passive === "ocean_wealth") globalGoldMultiplier += 0.15;
        if (char.passive === "imperial_tax") globalGoldMultiplier += 0.25;

        totalGold += charGold;
    });

    return totalGold * globalGoldMultiplier;
}

const REFERENCE_STAGE = 200;
const PROGRESS_EXPONENT = 0.5;

const MOB_ATK_SHARE = 0.22;
const MOB_SAFETY_MARGIN = 1.3;
const BOSS_ATK_SHARE = 0.38;
const BOSS_SAFETY_MARGIN = 1.15;

const COMBAT_SPEED_DIVISOR = 3;

function getCombatSquadAtk() {
    return calculateTotalAtk() / COMBAT_SPEED_DIVISOR;
}

function getEnemyStats(stage, isBoss) {
    const squadAtk = Math.max(calculateTotalAtk(), 0.01);
    const squadHp = Math.max(calculateTotalHp(), 0.01);

    const progress = Math.pow(Math.min(stage, REFERENCE_STAGE) / REFERENCE_STAGE, PROGRESS_EXPONENT);

    const atkShare = isBoss ? BOSS_ATK_SHARE : MOB_ATK_SHARE;
    const margin = isBoss ? BOSS_SAFETY_MARGIN : MOB_SAFETY_MARGIN;

    const rawAtk = Math.max(squadHp * atkShare * progress, 0.001);

    const powerBudget = (squadAtk * squadHp * progress) / margin;
    const hp = Math.max(powerBudget / rawAtk, 0.01);

    const atk = rawAtk / COMBAT_SPEED_DIVISOR;

    return { hp, atk };
}

const REWARD_BASE = 15;
const REWARD_MAX_MULT = 800;
const REWARD_PROGRESS_EXPONENT = 2;

function getGoldReward(stage, hpMod) {
    const progress = Math.pow(Math.min(stage, REFERENCE_STAGE) / REFERENCE_STAGE, REWARD_PROGRESS_EXPONENT);
    let reward = REWARD_BASE * (1 + progress * (REWARD_MAX_MULT - 1)) * hpMod;

    if (stage > REFERENCE_STAGE) {
        reward += calculateTotalGoldIncome() * 5 * hpMod;
    }

    return Math.floor(reward) + 2;
}

function spawnEnemy() {
    const bZone = document.getElementById('battle-zone-container');
    
    if (player.battleStage % 5 === 0) {
        campState.isActive = true;
        campState.timeLeft = 30;
        campState.hasDroppedGear = false;
        
        bZone.classList.add('camp-mode');
        currentEnemy.name = currentLang === 'en' ? "⛺ Campfire Rest (Resting Zone)" : "⛺ Привал у костра (Зона отдыха)";
        currentEnemy.emoji = "⛺";
        currentEnemy.spriteId = "camp";
        currentEnemy.maxHp = 30;
        currentEnemy.hp = 30;
        currentEnemy.atk = 0;
        currentEnemy.reward = 0;

        player.squadCurrentHp = calculateTotalHp();
        setArenaResting(true);
        renderArenaEnemySide();
        return;
    }

    campState.isActive = false;
    bZone.classList.remove('camp-mode');

    const pIndex = (player.battleStage - 1) % MONSTER_PREFIXES.length;
    const tIndex = (player.battleStage - 1) % MONSTER_TYPES.length;
    
    const isBoss = (player.battleStage >= 34 && player.battleStage % 5 === 4);
    const prefixes = currentLang === 'en' ? MONSTER_PREFIXES_EN : MONSTER_PREFIXES;
    const types = currentLang === 'en' ? MONSTER_TYPES_EN : MONSTER_TYPES;
    const bossTag = currentLang === 'en' ? "👹 [BOSS]" : "👹 [БОСС]";
    const levelTag = currentLang === 'en' ? "Lvl" : "Ур.";
    const prefix = isBoss ? bossTag : prefixes[pIndex];
    
    currentEnemy.name = `${prefix} ${types[tIndex]} [${levelTag}. ${player.battleStage}]`;
    currentEnemy.emoji = isBoss ? BOSS_EMOJI : MONSTER_TYPE_EMOJIS[tIndex];
    currentEnemy.spriteId = MONSTER_TYPE_IDS[tIndex] + (isBoss ? BOSS_SPRITE_SUFFIX : '');
    
    let hpMod = isBoss ? 2.5 : 1.0;

    const stats = getEnemyStats(player.battleStage, isBoss);
    currentEnemy.maxHp = stats.hp;
    currentEnemy.hp = stats.hp;
    currentEnemy.atk = stats.atk;

    currentEnemy.reward = getGoldReward(player.battleStage, hpMod);
    setArenaResting(false);
    renderArenaEnemySide();
}

function generateRandomGear(tier) {
    const pool = GEAR_POOLS[tier];
    const template = pool[Math.floor(Math.random() * pool.length)];
    const randomBonus = Math.random() * (template.maxBonus - template.minBonus) + template.minBonus;
    
    gearCounter++;
    return {
        instanceId: "gear_inst_" + gearCounter + "_" + Date.now(),
        id: template.id,
        name: template.name,
        bonus: parseFloat(randomBonus.toFixed(4)),
        rarity: tier,
        type: template.type, 
        equippedTo: null,
        pct: template.pct || 0
    };
}

function getDynamicDropTier(stage) {
    let wLegendary = Math.min(15, 0.2 + (stage * 0.15)); 
    let wEpic = Math.min(30, 3.8 + (stage * 0.35));       
    let wRare = Math.min(45, 16.0 + (stage * 0.5));       
    let wCommon = Math.max(10, 100 - (wLegendary + wEpic + wRare));

    const totalWeight = wLegendary + wEpic + wRare + wCommon;
    const roll = Math.random() * totalWeight;

    if (roll <= wLegendary) return 'legendary';
    if (roll <= wLegendary + wEpic) return 'epic';
    if (roll <= wLegendary + wEpic + wRare) return 'rare';
    return 'common';
}

function executeMonsterDrop() {
    const tier = getDynamicDropTier(player.battleStage);
    const newGear = generateRandomGear(tier);
    
    if (getGearCountByRarity(tier) >= getMaxGearLimit()) {
        pendingDroppedGear = newGear;
        openOverflowModal();
        return;
    }

    player.gearInventory.push(newGear);
    showToast(t('toast_gear_looted', { name: localizedName(newGear), bonus: newGear.bonus.toFixed(2), label: getGearLabel(newGear.type) }), rarityColors[tier]);
    renderInventory();
    saveGame();
}

function openOverflowModal() {
    const modal = document.getElementById('overflow-modal');
    if (!modal) return;
    
    modal.style.display = 'flex';
    const infoDiv = document.getElementById('overflow-gear-info');
    const price = GEAR_SELL_PRICES[pendingDroppedGear.rarity] || 50;
    const trophyLabel = currentLang === 'en' ? 'TROPHY' : 'ТРОФЕЙ';
    const sellCostLabel = currentLang === 'en' ? 'Immediate sale value:' : 'Стоимость немедленной продажи:';
    infoDiv.innerHTML = `
        <div style="color: ${rarityColors[pendingDroppedGear.rarity]}; font-weight: bold; font-size: 16px;">
            ${trophyLabel}: ${localizedName(pendingDroppedGear)} (+${pendingDroppedGear.bonus.toFixed(2)} ${getGearLabel(pendingDroppedGear.type)})
        </div>
        <div style="margin-top: 5px; font-size: 12px; color: var(--text-muted);">
            ${sellCostLabel} <span style="color: #ffd700;">${price} 💰</span>
        </div>
    `;
    
    renderOverflowInventoryManager();
}

function closeOverflowModal() {
    const modal = document.getElementById('overflow-modal');
    if (modal) modal.style.display = 'none';
    pendingDroppedGear = null;
}

function sellPendingGearImmediate() {
    if (!pendingDroppedGear) return;
    const price = GEAR_SELL_PRICES[pendingDroppedGear.rarity] || 50;
    player.gold += price;
    showToast(t('toast_gear_sold_immediate', { price: price }), '#4caf50');
    closeOverflowModal();
    updateUI();
    saveGame();
}

function claimPendingGear() {
    if (!pendingDroppedGear) return;
    if (getGearCountByRarity(pendingDroppedGear.rarity) >= getMaxGearLimit()) {
        alert(t('alert_warehouse_full_rarity'));
        return;
    }
    player.gearInventory.push(pendingDroppedGear);
    showToast(t('toast_gear_added_inv', { bonus: pendingDroppedGear.bonus.toFixed(2), label: getGearLabel(pendingDroppedGear.type) }), rarityColors[pendingDroppedGear.rarity]);
    closeOverflowModal();
    renderInventory();
    updateUI();
    saveGame();
}

function sellOldGearFromOverflow(instanceId) {
    const itemIndex = player.gearInventory.findIndex(g => g.instanceId === instanceId && g.equippedTo === null);
    if (itemIndex === -1) return;

    const item = player.gearInventory[itemIndex];
    const price = GEAR_SELL_PRICES[item.rarity] || 50;
    
    player.gold += price;
    player.gearInventory.splice(itemIndex, 1);
    
    showToast(t('toast_old_gear_sold', { price: price }), '#4caf50');
    renderOverflowInventoryManager();
    renderInventory();
    updateUI();
    saveGame();
}

function bulkReforgeFromOverflow(tier) {
    const unequipped = player.gearInventory.filter(g => g.rarity === tier && g.equippedTo === null);
    if (unequipped.length < 3) {
        alert(t('alert_need3_reforge', { tier: tier.toUpperCase() }));
        return;
    }

    let removedCount = 0;
    for (let i = player.gearInventory.length - 1; i >= 0; i--) {
        const g = player.gearInventory[i];
        if (g.rarity === tier && g.equippedTo === null && removedCount < 3) {
            player.gearInventory.splice(i, 1);
            removedCount++;
        }
    }

    let finalTier = tier;
    const tiersOrder = ['common', 'rare', 'epic', 'legendary'];
    const currentIndex = tiersOrder.indexOf(tier);
    
    if (currentIndex < tiersOrder.length - 1 && Math.random() <= 0.25) {
        finalTier = tiersOrder[currentIndex + 1];
        showToast(t('toast_reforge_evo', { tier: finalTier.toUpperCase() }), '#ffd700');
    } else {
        showToast(t('toast_reforge_done', { tier: finalTier.toUpperCase() }), '#ffffff');
    }

    const upgradeGear = generateRandomGear(finalTier);
    player.gearInventory.push(upgradeGear);

    renderOverflowInventoryManager();
    renderInventory();
    updateUI();
    saveGame();
}

function renderOverflowInventoryManager() {
    const listDiv = document.getElementById('overflow-inventory-list');
    if (!listDiv) return;
    listDiv.innerHTML = '';
    
    const unequippedItems = player.gearInventory.filter(g => g.equippedTo === null);
    
    const claimBtn = document.getElementById('btn-overflow-claim');
    if (claimBtn) {
        if (pendingDroppedGear && getGearCountByRarity(pendingDroppedGear.rarity) < getMaxGearLimit()) {
            claimBtn.disabled = false;
            claimBtn.style.opacity = '1';
        } else {
            claimBtn.disabled = true;
            claimBtn.style.opacity = '0.5';
        }
    }

    if (unequippedItems.length === 0) {
        const emptyMsg = currentLang === 'en' ? 'No free gear available to sell or reforge' : 'Нет свободного снаряжения для продажи или перековки';
        listDiv.innerHTML = `<div style="color:var(--text-muted); padding:10px; text-align:center;">${emptyMsg}</div>`;
        return;
    }

    const reforgeContainer = document.createElement('div');
    reforgeContainer.className = "overflow-reforge-group";
    
    const tiers = ['common', 'rare', 'epic', 'legendary'];
    tiers.forEach(t2 => {
        const count = unequippedItems.filter(g => g.rarity === t2).length;
        if (count >= 3) {
            const btn = document.createElement('button');
            btn.className = "btn-reforge-quick";
            btn.style.background = rarityColors[t2];
            btn.innerText = currentLang === 'en' ? `🔨 Combine 3 ${t2.toUpperCase()} (-2 slots)` : `🔨 Сжать 3 ${t2.toUpperCase()} (-2 слота)`;
            btn.onclick = () => bulkReforgeFromOverflow(t2);
            reforgeContainer.appendChild(btn);
        }
    });
    if (reforgeContainer.childElementCount > 0) {
        listDiv.appendChild(reforgeContainer);
    }

    unequippedItems.forEach(item => {
        const row = document.createElement('div');
        row.style.cssText = `display:flex; justify-content:space-between; align-items:center; padding:6px; margin-bottom:4px; background:rgba(255,255,255,0.05); border-left:3px solid ${rarityColors[item.rarity]}; font-size:12px;`;
        
        const price = GEAR_SELL_PRICES[item.rarity] || 50;
        const sellBtnLabel = currentLang === 'en' ? `Sell for +${price}💰` : `Продать за +${price}💰`;
        row.innerHTML = `
            <div>${localizedName(item)} <span style="color:#00e5ff;">(+${item.bonus.toFixed(2)} ${getGearLabel(item.type)})</span></div>
            <button onclick="sellOldGearFromOverflow('${item.instanceId}')" style="background:#cc3333; color:white; border:none; padding:2px 6px; border-radius:3px; cursor:pointer;">${sellBtnLabel}</button>
        `;
        listDiv.appendChild(row);
    });
}

function pullCharacter() {
    const roll = Math.random() * 100;
    let selectedRarity = 1;

    if (roll <= DROP_RATES[5]) selectedRarity = 5;
    else if (roll <= DROP_RATES[5] + DROP_RATES[4]) selectedRarity = 4;
    else if (roll <= DROP_RATES[5] + DROP_RATES[4] + DROP_RATES[3]) selectedRarity = 3;
    else if (roll <= DROP_RATES[5] + DROP_RATES[4] + DROP_RATES[3] + DROP_RATES[2]) selectedRarity = 2;
    else selectedRarity = 1;

    const pool = CHARACTER_DATABASE[selectedRarity];
    return pool[Math.floor(Math.random() * pool.length)];
}

const MAX_PULLS_PER_ACTION = 300;

function handlePulls(amount) {
    let pullsToPerform = amount;
    if (amount === 'max') pullsToPerform = Math.min(Math.floor(player.gold / 100), MAX_PULLS_PER_ACTION);

    if (typeof amount === 'number' && player.gold < amount * 100) {
        pullsToPerform = Math.floor(player.gold / 100);
    }

    if (pullsToPerform <= 0) {
        showToast(t('toast_not_enough_gold'), "#ff3333");
        return;
    }

    const oldMaxHp = calculateTotalHp();
    const hpRatio = oldMaxHp > 0 ? (player.squadCurrentHp / oldMaxHp) : 1;

    player.gold -= (pullsToPerform * 100);
    let results = [];

    for (let i = 0; i < pullsToPerform; i++) {
        let char = pullCharacter();
        results.push(char);

        let existing = player.ownedCharacters.find(c => c.id === char.id);
        if (existing) {
            if (existing.count < 10) {
                existing.count++;
            } else {
                if (char.stars === 1 || char.stars === 2) player.tokens.common += char.stars;
                else if (char.stars === 3) player.tokens.rare += 1;
                else if (char.stars === 4) player.tokens.epic += 1;
                else if (char.stars === 5) player.tokens.legendary += 1;
            }
        } else {
            player.ownedCharacters.push({ ...char, count: 1 });
        }
    }

    const newMaxHp = calculateTotalHp();
    player.squadCurrentHp = Math.min(hpRatio * newMaxHp, newMaxHp);

    document.getElementById('modal-title').innerText = t('gacha_result_title', { n: pullsToPerform });
    showGachaModal(results, "char");
    renderInventory();
    updateUI();
    saveGame();
}

function rollGear(tier, mode) {
    if (getGearCountByRarity(tier) >= getMaxGearLimit()) {
        alert(t('alert_forge_full', { tier: tier.toUpperCase(), n: getMaxGearLimit() }));
        return;
    }

    let singleCost = GEAR_FORGE_COST[tier];
    let rollsToPerform = 1;

    if (mode === 'max') {
        const maxAffordable = Math.floor(player.tokens[tier] / singleCost);
        const remainingSpace = getMaxGearLimit() - getGearCountByRarity(tier);
        rollsToPerform = Math.min(maxAffordable, remainingSpace);
    }

    let totalCost = rollsToPerform * singleCost;

    if (rollsToPerform <= 0 || player.tokens[tier] < totalCost) {
        alert(t('alert_not_enough_tokens_or_space', { tier: tier.toUpperCase() }));
        return;
    }

    player.tokens[tier] -= totalCost;
    let rolledItems = [];

    for (let i = 0; i < rollsToPerform; i++) {
        const newGearInstance = generateRandomGear(tier);
        player.gearInventory.push(newGearInstance);
        rolledItems.push(newGearInstance);
    }

    document.getElementById('modal-title').innerText = t('forge_result_title', { n: rollsToPerform });
    showGachaModal(rolledItems, "gear");
    
    renderInventory();
    updateUI();
    saveGame();
}

function buyCharacterCopy(charId, stars) {
    const tokenType = TOKEN_MAP[stars];
    const cost = CHAR_TOKEN_COST[stars];

    if (player.tokens[tokenType] < cost) {
        showToast(t('toast_not_enough_tokens', { cost: cost, emoji: TOKEN_EMOJIS[tokenType] }), "#ff3333");
        return;
    }

    let char = player.ownedCharacters.find(c => c.id === charId);
    if (char) {
        if (char.count >= 10) {
            showToast(t('toast_max_breakthrough'), "#ffaa00");
            return;
        }

        const oldMaxHp = calculateTotalHp();
        const hpRatio = oldMaxHp > 0 ? (player.squadCurrentHp / oldMaxHp) : 1;

        player.tokens[tokenType] -= cost;
        char.count++;
        showToast(t('toast_copy_bought', { n: char.count }), "#4caf50");
        
        const newMaxHp = calculateTotalHp();
        player.squadCurrentHp = Math.min(hpRatio * newMaxHp, newMaxHp);

        updateUI();
        renderInventory();
        saveGame();
    }
}

function sellGear(instanceId) {
    const itemIndex = player.gearInventory.findIndex(g => g.instanceId === instanceId && g.equippedTo === null);
    if (itemIndex === -1) return;

    const item = player.gearInventory[itemIndex];
    const price = GEAR_SELL_PRICES[item.rarity] || 50;
    
    player.gold += price;
    player.gearInventory.splice(itemIndex, 1);
    
    showToast(t('toast_gear_sold', { price: price }), '#4caf50');
    updateUI();
    renderInventory();
    saveGame();
}

function bulkReforge(tier) {
    const unequipped = player.gearInventory.filter(g => g.rarity === tier && g.equippedTo === null);
    if (unequipped.length < 3) {
        alert(t('alert_need3_reforge', { tier: tier.toUpperCase() }));
        return;
    }

    let removedCount = 0;
    for (let i = player.gearInventory.length - 1; i >= 0; i--) {
        const g = player.gearInventory[i];
        if (g.rarity === tier && g.equippedTo === null && removedCount < 3) {
            player.gearInventory.splice(i, 1);
            removedCount++;
        }
    }

    let finalTier = tier;
    const tiersOrder = ['common', 'rare', 'epic', 'legendary'];
    const currentIndex = tiersOrder.indexOf(tier);
    
    if (currentIndex < tiersOrder.length - 1 && Math.random() <= 0.25) {
        finalTier = tiersOrder[currentIndex + 1];
        showToast(t('toast_reforge_evo2', { tier: finalTier.toUpperCase() }), '#ffd700');
    } else {
        showToast(t('toast_reforge_done2', { tier: finalTier.toUpperCase() }), '#ffffff');
    }

    const upgradeGear = generateRandomGear(finalTier);
    player.gearInventory.push(upgradeGear);

    renderInventory();
    updateUI();
    saveGame();
}

function bulkReforgeAll(tier) {
    const countFree = () => player.gearInventory.filter(g => g.rarity === tier && g.equippedTo === null).length;

    if (countFree() < 3) {
        alert(t('alert_need3_reforge', { tier: tier.toUpperCase() }));
        return;
    }

    const tiersOrder = ['common', 'rare', 'epic', 'legendary'];
    const currentIndex = tiersOrder.indexOf(tier);

    let reforges = 0;
    let evolutions = 0;

    while (countFree() >= 3) {
        let removedCount = 0;
        for (let i = player.gearInventory.length - 1; i >= 0 && removedCount < 3; i--) {
            const g = player.gearInventory[i];
            if (g.rarity === tier && g.equippedTo === null) {
                player.gearInventory.splice(i, 1);
                removedCount++;
            }
        }

        let finalTier = tier;
        if (currentIndex < tiersOrder.length - 1 && Math.random() <= 0.25) {
            finalTier = tiersOrder[currentIndex + 1];
            evolutions++;
        }

        player.gearInventory.push(generateRandomGear(finalTier));
        reforges++;
    }

    showToast(t('toast_reforge_bulk', { tier: tier.toUpperCase(), n: reforges, evo: evolutions }), rarityColors[tier] || '#ffffff');

    renderInventory();
    updateUI();
    saveGame();
}

let currentWikiTab = 'heroes';

let expandedCharIds = new Set();

function toggleCharExpand(charId) {
    const grid = document.getElementById('inventory-grid');
    const mythicGrid = document.getElementById('mythic-squad-grid');
    const allCardsBefore = [
        ...(grid ? Array.from(grid.children) : []),
        ...(mythicGrid ? Array.from(mythicGrid.children) : [])
    ];

    const firstRects = new Map();
    allCardsBefore.forEach(el => {
        if (el.dataset.charId) firstRects.set(el.dataset.charId, el.getBoundingClientRect());
    });

    if (expandedCharIds.has(charId)) {
        expandedCharIds.delete(charId);
    } else {
        expandedCharIds.add(charId);
    }
    renderInventory();

    const gridAfter = document.getElementById('inventory-grid');
    const mythicGridAfter = document.getElementById('mythic-squad-grid');
    const allCardsAfter = [
        ...(gridAfter ? Array.from(gridAfter.children) : []),
        ...(mythicGridAfter ? Array.from(mythicGridAfter.children) : [])
    ];

    allCardsAfter.forEach(el => {
        const id = el.dataset.charId;
        const first = firstRects.get(id);
        if (!first) return;
        const last = el.getBoundingClientRect();

        const dx = first.left - last.left;
        const dy = first.top - last.top;
        const sx = last.width ? first.width / last.width : 1;
        const sy = last.height ? first.height / last.height : 1;

        if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx - 1) < 0.01 && Math.abs(sy - 1) < 0.01) return;

        el.style.transformOrigin = 'top left';
        el.style.transition = 'none';
        el.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.transition = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)';
                el.style.transform = '';
            });
        });
        el.addEventListener('transitionend', () => {
            el.style.transition = '';
            el.style.transformOrigin = '';
        }, { once: true });
    });
}

function toggleAutoMythic(checked) {
    player.settings.autoMythicAbilities = checked;
    saveGame();
}

function autoUseMythicAbilities() {
    if (!player.settings.autoMythicAbilities) return;
    ['mythic_oneclick', 'mythic_loot'].forEach(heroId => {
        if (!player.ownedCharacters.some(c => c.id === heroId)) return;
        if ((player.mythicCooldowns[heroId] || 0) > 0) return;
        if (heroId === 'mythic_oneclick' && campState.isActive) return;
        useMythicAbility(heroId);
    });
}

function toggleSettings() {
    const modal = document.getElementById('settings-modal');
    if (!modal) return;
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

function resetProgress() {
    const firstConfirm = confirm(t('confirm_reset1'));
    if (!firstConfirm) return;

    const secondConfirm = confirm(t('confirm_reset2'));
    if (!secondConfirm) return;

    localStorage.removeItem('waifu_idle_save_v2');
    clearTimeout(cloudSaveTimer);
    if (yaPlayer) {
        yaPlayer.setData({}, true).catch(() => {}).finally(() => location.reload());
    } else {
        location.reload();
    }
}

function toggleWiki() {
    const drawer = document.getElementById('wiki-drawer');
    const overlay = document.getElementById('wiki-overlay');
    if (!drawer || !overlay) return;

    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
    } else {
        switchWikiTab(currentWikiTab);
        drawer.classList.add('open');
        overlay.classList.add('open');
    }
}

function switchWikiTab(tab) {
    currentWikiTab = tab;
    document.getElementById('wiki-tab-heroes').classList.toggle('active', tab === 'heroes');
    document.getElementById('wiki-tab-gear').classList.toggle('active', tab === 'gear');

    if (tab === 'heroes') {
        renderWikiList();
    } else {
        renderWikiGearList();
    }
}

function renderWikiList() {
    const listContainer = document.getElementById('wiki-content-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    Object.keys(CHARACTER_DATABASE).forEach(rarity => {
        renderWikiBlock(rarity, CHARACTER_DATABASE[rarity], "★".repeat(rarity) + " Ранг", listContainer);
    });
    renderWikiBlock(6, MYTHIC_HEROES_POOL, "👑 МИФИЧЕСКИЙ РАНГ", listContainer);
}

function buildCopyStatsTable(char, currentCount) {
    let rows = '';
    for (let n = 1; n <= 10; n++) {
        let mult = 1 + (n - 1) * 0.5;
        let atk = char.baseAtk * mult;
        let hp = char.baseHp * mult;
        let gold = char.baseGold * mult;

        if (n >= 10 && char.stars <= 5) {
            const breakMult = 1 + MAX_UPGRADE_PASSIVES[char.stars].mult;
            atk *= breakMult;
            hp *= breakMult;
            gold *= breakMult;
        }

        const isCurrent = n === currentCount;
        rows += `<tr class="${isCurrent ? 'current-copy-row' : ''}">
            <td>${n}${n === 10 ? ' 💥' : ''}</td>
            <td>${atk.toFixed(2)}</td>
            <td>${hp.toFixed(2)}</td>
            <td>${gold.toFixed(2)}</td>
        </tr>`;
    }
    return `
        <table class="wiki-copy-table">
            <thead><tr><th>Копий</th><th>АТК</th><th>HP</th><th>ЗОЛ/с</th></tr></thead>
            <tbody>${rows}</tbody>
        </table>
        ${char.stars <= 5 ? `<div style="font-size:9px; color:var(--text-muted); margin-top:4px;">💥 на 10 копии срабатывает "${MAX_UPGRADE_PASSIVES[char.stars].desc}"</div>` : ''}
    `;
}

function getRosterStatAverages() {
    const allChars = [...Object.values(CHARACTER_DATABASE).flat(), ...MYTHIC_HEROES_POOL];
    const sum = allChars.reduce((acc, c) => {
        acc.atk += c.baseAtk; acc.hp += c.baseHp; acc.gold += c.baseGold;
        return acc;
    }, { atk: 0, hp: 0, gold: 0 });
    const n = allChars.length;
    return { atk: sum.atk / n, hp: sum.hp / n, gold: sum.gold / n };
}
const ROSTER_STAT_AVG = getRosterStatAverages();

const GOLD_PASSIVES = ['gold_fever', 'ocean_wealth', 'imperial_tax'];
const ATK_PASSIVES = ['double_bm', 'god_blessing', 'overdrive', 'dragon_rage', 'fortress'];

function recommendMythicGear(char) {
    const mAtk = GEAR_POOLS.mythic.find(g => g.type === 'atk');
    const mHp = GEAR_POOLS.mythic.find(g => g.type === 'hp');
    const mGold = GEAR_POOLS.mythic.find(g => g.type === 'gold');

    if (char.passive && GOLD_PASSIVES.includes(char.passive)) {
        return { type: 'gold', item: mGold, reason: 'синергия с золотой пассивкой' };
    }
    if (char.passive && ATK_PASSIVES.includes(char.passive)) {
        return { type: 'atk', item: mAtk, reason: 'синергия с атакующей пассивкой' };
    }

    const relAtk = char.baseAtk / ROSTER_STAT_AVG.atk;
    const relHp = char.baseHp / ROSTER_STAT_AVG.hp;
    const relGold = char.baseGold / ROSTER_STAT_AVG.gold;

    const best = Math.max(relAtk, relHp, relGold);
    if (best === relGold) return { type: 'gold', item: mGold, reason: 'сильнейшая сторона героини' };
    if (best === relAtk) return { type: 'atk', item: mAtk, reason: 'сильнейшая сторона героини' };
    return { type: 'hp', item: mHp, reason: 'сильнейшая сторона героини' };
}

function renderWikiBlock(rarityKey, pool, headTitle, container) {
    const rarityBlock = document.createElement('div');
    rarityBlock.className = 'wiki-rarity-block';
    rarityBlock.innerHTML = `<div class="wiki-rarity-head" style="color: ${rarityColors[rarityKey]};">${headTitle}</div>`;
    
    const list = document.createElement('div');
    list.className = 'wiki-list';

    pool.forEach(char => {
        const ownedChar = player.ownedCharacters.find(c => c.id === char.id);
        const isOwned = !!ownedChar;
        const row = document.createElement('div');
        row.className = `wiki-row ${isOwned ? 'owned' : 'unowned'}`;

        const isMythicHero = char.stars === 6;
        const ownedStatus = isOwned
            ? (isMythicHero ? '✅ Получена' : `✅ Открыта (копий: ${ownedChar.count}/10)`)
            : '🔒 Закрыта';
        const rec = recommendMythicGear(char);

        row.innerHTML = `
            <div class="wiki-row-top">
                <div class="wiki-row-name">${buildCharPortraitHTML(char, 'char-portrait-sm')}<span>${char.name}</span></div>
                <span>${ownedStatus}</span>
            </div>
            <div class="wiki-row-stats">
                Базовые${isMythicHero ? '' : ' (1 копия)'}: АТК ${char.baseAtk.toFixed(2)} | HP ${char.baseHp.toFixed(2)} | ЗОЛ +${char.baseGold.toFixed(2)}/с
            </div>
            ${char.passiveDesc ? `<div class="wiki-row-passive">Эффект: ${char.passiveDesc}</div>` : ''}
            <div class="wiki-row-mythic-rec">💠 Лучший мифик-артефакт: ${rec.item.name} (${getGearLabel(rec.type)}, +${rec.item.pct}% к итогу) — ${rec.reason}</div>
            ${isMythicHero ? '' : `
            <details class="wiki-copy-details">
                <summary>📊 Статы по количеству копий</summary>
                ${buildCopyStatsTable(char, isOwned ? ownedChar.count : 0)}
            </details>`}
        `;
        list.appendChild(row);
    });

    rarityBlock.appendChild(list);
    container.appendChild(rarityBlock);
}

function renderWikiGearList() {
    const listContainer = document.getElementById('wiki-content-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const tierTitles = {
        common: '🟢 ОБЫЧНОЕ',
        rare: '🔵 РЕДКОЕ',
        epic: '🟣 ЭПИЧЕСКОЕ',
        legendary: '🟡 ЛЕГЕНДАРНОЕ',
        mythic: '👑 МИФИЧЕСКОЕ'
    };

    Object.keys(GEAR_POOLS).forEach(tier => {
        const block = document.createElement('div');
        block.className = 'wiki-rarity-block';
        block.innerHTML = `<div class="wiki-rarity-head" style="color: ${rarityColors[tier]};">${tierTitles[tier]}</div>`;

        const list = document.createElement('div');
        list.className = 'wiki-list';

        GEAR_POOLS[tier].forEach(g => {
            const owned = player.gearInventory.some(inst => inst.id === g.id);
            const row = document.createElement('div');
            row.className = `wiki-row ${owned ? 'owned' : 'unowned'}`;

            const pctLine = g.pct ? ` (плюс фикс. +${g.pct}% к итоговому стату персонажа)` : '';

            row.innerHTML = `
                <div class="wiki-row-top">
                    <div class="wiki-row-name">${buildGearPortraitHTML(g, 'gear-portrait-sm')}<span>${g.name}</span></div>
                    <span>${getGearLabel(g.type)}</span>
                </div>
                <div class="wiki-row-stats">
                    Диапазон бонуса: от ${g.minBonus.toFixed(2)} до ${g.maxBonus.toFixed(2)} ${getGearLabel(g.type)}${pctLine}
                </div>
            `;
            list.appendChild(row);
        });

        block.appendChild(list);
        listContainer.appendChild(block);
    });
}

function grantMythicHeroChance() {
    const unowned = MYTHIC_HEROES_POOL.filter(mh => !player.ownedCharacters.some(c => c.id === mh.id));
    if (unowned.length > 0) {
        const selected = unowned[Math.floor(Math.random() * unowned.length)];
        player.ownedCharacters.push({ ...selected, count: 1 });
        showToast(t('toast_mythic_hero', { name: localizedName(selected) }), '#ff3366');
        renderInventory();
    } else {
        showToast(t('toast_mythic_all_collected'), '#ffd700');
        player.gold += 500000;
    }
    updateUI();
}

function rollMythicArtifactChance() {
    if (Math.random() <= 0.5) {
        const mythicGear = generateRandomGear('mythic');
        if (getGearCountByRarity('mythic') >= getMaxGearLimit()) {
            pendingDroppedGear = mythicGear;
            openOverflowModal();
        } else {
            player.gearInventory.push(mythicGear);
            showToast(t('toast_mythic_artifact', { name: localizedName(mythicGear) }), '#ff3366');
            renderInventory();
        }
    }
}

function useMythicAbility(heroId) {
    if (player.mythicCooldowns[heroId] > 0) return;
    const hasCdrChronos = player.ownedCharacters.some(c => c.id === "mythic_cdr_buff");
    const cdrMult = hasCdrChronos ? 0.9 : 1.0;

    if (heroId === "mythic_oneclick") {
        if (campState.isActive) {
            showToast(t('toast_no_camp_kill'), "#ff3333");
            return;
        }
        currentEnemy.hp = 0;
        player.mythicCooldowns[heroId] = Math.round(300 * cdrMult);
        showToast(t('toast_annihilate'), "#ff3366");
        rollMythicArtifactChance();
    } else if (heroId === "mythic_loot") {
        const tr = Math.random();
        let selectedTier = 'epic';
        if (tr > 0.6) selectedTier = 'legendary';
        if (tr > 0.93) selectedTier = 'mythic';
        
        const gear = generateRandomGear(selectedTier);
        if (getGearCountByRarity(selectedTier) >= getMaxGearLimit()) {
            pendingDroppedGear = gear;
            openOverflowModal();
        } else {
            player.gearInventory.push(gear);
            showToast(t('toast_loot_luck', { name: localizedName(gear) }), rarityColors[selectedTier]);
            renderInventory();
        }
        player.mythicCooldowns[heroId] = Math.round(300 * cdrMult);
        rollMythicArtifactChance();
    }
    updateUI();
    saveGame();
}

function buyMythicArtifact(type) {
    if (player.gold < 1000000) {
        showToast(t('toast_not_enough_gold_shop'), "#ff3333");
        return;
    }
    if (getGearCountByRarity('mythic') >= getMaxGearLimit()) {
        alert(t('alert_mythic_full'));
        return;
    }
    player.gold -= 1000000;
    const pool = GEAR_POOLS.mythic.filter(g => g.type === type);
    const item = generateRandomGear('mythic');
    item.type = type;
    item.name = pool[0].name;
    item.id = pool[0].id;
    item.pct = pool[0].pct;

    player.gearInventory.push(item);
    showToast(t('toast_shop_bought', { name: localizedName(item) }), '#ff3366');
    renderInventory();
    updateUI();
    saveGame();
}

function changeEquipmentFromPicker(charId, instanceId) {
    const oldMaxHp = calculateTotalHp();
    const hpRatio = oldMaxHp > 0 ? (player.squadCurrentHp / oldMaxHp) : 1;

    player.gearInventory.forEach(g => {
        if (g.equippedTo === charId) g.equippedTo = null;
    });

    if (instanceId !== "none") {
        const gear = player.gearInventory.find(g => g.instanceId === instanceId);
        if (gear) gear.equippedTo = charId;
    }

    const newMaxHp = calculateTotalHp();
    player.squadCurrentHp = Math.min(hpRatio * newMaxHp, newMaxHp);

    renderInventory();
    updateUI();
    saveGame();
}

const RARITY_RANK = { mythic: 5, legendary: 4, epic: 3, rare: 2, common: 1 };

function sortGearForPicker(list) {
    return [...list].sort((a, b) => {
        const r = RARITY_RANK[b.rarity] - RARITY_RANK[a.rarity];
        if (r !== 0) return r;
        return b.bonus - a.bonus;
    });
}

function getBestAvailableGearForChar(char) {
    const available = player.gearInventory.filter(g => g.equippedTo === null);
    if (available.length === 0) return null;

    const recType = recommendMythicGear(char).type;
    const scored = available.map(g => {
        let score = RARITY_RANK[g.rarity] * 1000 + g.bonus;
        if (g.type === recType) score += 500;
        return { g, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored[0].g;
}

function equipRecommendedGear(charId) {
    const char = player.ownedCharacters.find(c => c.id === charId);
    if (!char) return;

    const oldMaxHp = calculateTotalHp();
    const hpRatio = oldMaxHp > 0 ? (player.squadCurrentHp / oldMaxHp) : 1;

    player.gearInventory.forEach(g => { if (g.equippedTo === charId) g.equippedTo = null; });
    const best = getBestAvailableGearForChar(char);

    if (!best) {
        showToast(t('toast_no_gear_available'), '#ff9800');
    } else {
        best.equippedTo = charId;
        showToast(t('toast_equipped', { name: localizedName(best) }), rarityColors[best.rarity]);
    }

    const newMaxHp = calculateTotalHp();
    player.squadCurrentHp = Math.min(hpRatio * newMaxHp, newMaxHp);

    renderInventory();
    updateUI();
    saveGame();
}

function equipRecommendedGearAll() {
    if (player.ownedCharacters.length === 0) return;

    const oldMaxHp = calculateTotalHp();
    const hpRatio = oldMaxHp > 0 ? (player.squadCurrentHp / oldMaxHp) : 1;

    const sortedChars = [...player.ownedCharacters].sort((a, b) => b.stars - a.stars);
    sortedChars.forEach(char => {
        player.gearInventory.forEach(g => { if (g.equippedTo === char.id) g.equippedTo = null; });
        const best = getBestAvailableGearForChar(char);
        if (best) best.equippedTo = char.id;
    });

    const newMaxHp = calculateTotalHp();
    player.squadCurrentHp = Math.min(hpRatio * newMaxHp, newMaxHp);

    showToast(t('toast_equipped_all'), '#ffd700');
    renderInventory();
    updateUI();
    saveGame();
}

function updateUI() {
    document.getElementById('gold-display').innerText = Math.floor(player.gold).toLocaleString(currentLang === 'en' ? 'en-US' : 'ru-RU');
    const pGold = calculateTotalGoldIncome();
    document.getElementById('gold-speed-display').innerText = `+${pGold.toFixed(2)}/${t('gold_per_sec')}`;
    document.getElementById('income-display').innerText = calculateTotalBM().toFixed(2) + " БМ";
    
    const maxPullsCount = Math.min(Math.floor(player.gold / 100), MAX_PULLS_PER_ACTION);
    document.getElementById('btn-summon-max').innerText = currentLang === 'en' ? `Summon MAX (${maxPullsCount})` : `Призыв МАКС (${maxPullsCount})`;

    const adBtn = document.getElementById('btn-summon-ad');
    if (adBtn) {
        adBtn.innerText = t('ad_summon_btn', { n: getAdSummonAmount() });
    }

    document.getElementById('tok-c').innerText = `🟢 ${player.tokens.common}`;
    document.getElementById('tok-r').innerText = `🔵 ${player.tokens.rare}`;
    document.getElementById('tok-e').innerText = `🟣 ${player.tokens.epic}`;
    document.getElementById('tok-l').innerText = `🟡 ${player.tokens.legendary}`;
    
    document.getElementById('unique-display').innerText = `${player.ownedCharacters.length} / ${TOTAL_CHARACTERS_COUNT}`;
    
    const limit = getMaxGearLimit();
    const forgeTitle = currentLang === 'en' ? 'Ancient Relic Forge' : 'Древняя Кузня Реликвий';
    document.getElementById('warehouse-summary').innerText = 
        `${forgeTitle} (C: ${getGearCountByRarity('common')}/${limit} | R: ${getGearCountByRarity('rare')}/${limit} | E: ${getGearCountByRarity('epic')}/${limit} | L: ${getGearCountByRarity('legendary')}/${limit} | M: ${getGearCountByRarity('mythic')}/${limit})`;

    const maxSquadHp = calculateTotalHp();
    const totalAtk = calculateTotalAtk();
    const squadHpPercent = maxSquadHp > 0 ? Math.max(0, (player.squadCurrentHp / maxSquadHp) * 100) : 0;

    const squadTextEl = document.getElementById('squad-hp-text');
    if (squadTextEl) {
        squadTextEl.innerText = `${player.squadCurrentHp.toFixed(2)} / ${maxSquadHp.toFixed(2)} HP`;
        document.getElementById('squad-hp-bar').style.width = `${squadHpPercent}%`;
        document.getElementById('squad-info-atk').innerText = `${getCombatSquadAtk().toFixed(2)} ${t('atk_per_sec')}`;
        document.getElementById('squad-info-count').innerText = t('squad_count', { n: player.ownedCharacters.length });
        document.getElementById('squad-info-bm').innerText = t('squad_bm', { n: calculateTotalBM().toFixed(2) });
        document.getElementById('boss-streak-display').innerText = player.bossWinStreak;
        document.getElementById('max-boss-streak-display').innerText = player.maxBossWinStreak;
        document.getElementById('time-alive-display').innerText = formatTime(player.timeAlive);
        document.getElementById('total-time-display').innerText = formatTime(player.totalTimeAlive);
    }

    const mythicPanel = document.getElementById('mythic-panel');
    if (mythicPanel) {
        if (player.ownedCharacters.length > 0) {
            mythicPanel.style.display = 'block';
            const diff = 1800 - player.mythicTimer;
            document.getElementById('mythic-timer-display').innerText = t('mythic_timer', { m: Math.floor(diff/60), s: diff%60 });

            const autoToggle = document.getElementById('auto-mythic-toggle');
            if (autoToggle) autoToggle.checked = !!player.settings.autoMythicAbilities;

            document.querySelectorAll('.btn-mythic-ability-card').forEach(btn => {
                const heroId = btn.dataset.heroId;
                const cd = player.mythicCooldowns[heroId] || 0;
                btn.disabled = cd > 0;
                btn.innerText = cd > 0 ? t('btn_ability_cd', { n: cd }) : t('btn_ability_ready');
            });

            const skillsContainer = document.getElementById('mythic-skills-container');
            skillsContainer.innerHTML = '';
            
            const actives = [
                { id: "mythic_oneclick", labelKey: "mythic_active_annihilate" },
                { id: "mythic_loot", labelKey: "mythic_active_loot" }
            ];
            
            actives.forEach(act => {
                const heroChar = MYTHIC_HEROES_POOL.find(c => c.id === act.id);
                if (player.ownedCharacters.some(c => c.id === act.id)) {
                    const btn = document.createElement('button');
                    btn.className = 'btn-wiki-toggle';
                    const cd = player.mythicCooldowns[act.id] || 0;
                    const fullLabel = `${t(act.labelKey)} (${heroChar ? localizedName(heroChar) : ''})`;
                    if (cd > 0) {
                        btn.innerText = `${fullLabel} (${cd}${currentLang === 'en' ? 's' : 'с'})`;
                        btn.style.background = '#4a5568';
                        btn.disabled = true;
                    } else {
                        btn.innerText = fullLabel;
                        btn.style.background = 'linear-gradient(135deg, #ff3366 0%, #ff5e62 100%)';
                        btn.disabled = false;
                        btn.onclick = () => useMythicAbility(act.id);
                    }
                    skillsContainer.appendChild(btn);
                }
            });
            
            const hasShop = player.ownedCharacters.some(c => c.id === "mythic_shop_bag");
            document.getElementById('mythic-shop-container').style.display = hasShop ? 'block' : 'none';
        } else {
            mythicPanel.style.display = 'none';
        }
    }

    const enemyAtkEl = document.getElementById('enemy-info-atk');
    const enemyBmEl = document.getElementById('enemy-info-bm');

    if (campState.isActive) {
        document.getElementById('stage-display').innerText = t('rest_word');
        document.getElementById('enemy-name').innerText = currentEnemy.name;
        document.getElementById('hp-text').innerText = t('camp_status', { n: campState.timeLeft });
        const percent = (campState.timeLeft / 30) * 100;
        document.getElementById('hp-bar').style.width = `${percent}%`;
        document.getElementById('battle-info').innerText = t('camp_info');
        
        if (enemyAtkEl) enemyAtkEl.innerText = `0.00 ${t('atk_per_sec')}`;
        if (enemyBmEl) enemyBmEl.innerText = t('enemy_bm', { n: '0.00' });
    } else {
        document.getElementById('stage-display').innerText = `${t('stage_word')} ${player.battleStage}`;
        document.getElementById('enemy-name').innerText = currentEnemy.name;
        document.getElementById('hp-text').innerText = `${currentEnemy.hp.toFixed(2)} / ${currentEnemy.maxHp.toFixed(2)} HP`;
        const hpPercent = Math.max(0, (currentEnemy.hp / currentEnemy.maxHp) * 100);
        document.getElementById('hp-bar').style.width = `${hpPercent}%`;
        
        document.getElementById('battle-info').innerText = 
            t('battle_info', { atk: getCombatSquadAtk().toFixed(2), matk: currentEnemy.atk.toFixed(2), gold: pGold.toFixed(2) });

        if (enemyAtkEl) enemyAtkEl.innerText = `${currentEnemy.atk.toFixed(2)} ${t('atk_per_sec')}`;
        if (enemyBmEl) {
            const enemyBM = currentEnemy.atk + currentEnemy.maxHp;
            enemyBmEl.innerText = t('enemy_bm', { n: enemyBM.toFixed(2) });
        }
    }
}

function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    const mythicGrid = document.getElementById('mythic-squad-grid');
    if (!grid) return;
    grid.innerHTML = '';
    if (mythicGrid) mythicGrid.innerHTML = '';

    player.ownedCharacters.sort((a, b) => b.stars - a.stars);

    const hasCdrChronos = player.ownedCharacters.some(c => c.id === "mythic_cdr_buff");

    player.ownedCharacters.forEach(char => {
        let passiveHTML = char.passiveDesc && char.passive !== 'm_active' ? `<div class="char-passive">${localizedPassiveDesc(char)}</div>` : '';
        if (char.count >= 10 && char.stars <= 5) {
            passiveHTML += `<div class="char-passive awaken">${localizedBreakthroughDesc(char.stars)}</div>`;
        }

        let currentCharAtk = char.baseAtk * (1 + (char.count - 1) * 0.5);
        let currentCharHp = char.baseHp * (1 + (char.count - 1) * 0.5);
        let currentCharGold = char.baseGold * (1 + (char.count - 1) * 0.5);

        if (char.stars < 6 && hasCdrChronos) {
            currentCharAtk *= 1.10;
            currentCharHp *= 1.10;
            currentCharGold *= 1.10;
        }

        const currentlyEquipped = player.gearInventory.find(g => g.equippedTo === char.id);
        if (currentlyEquipped) {
            if (currentlyEquipped.type === "atk") {
                if (currentlyEquipped.rarity === 'mythic') currentCharAtk = (currentCharAtk + currentlyEquipped.bonus) * (1 + currentlyEquipped.pct / 100);
                else currentCharAtk += currentlyEquipped.bonus;
            }
            if (currentlyEquipped.type === "hp") {
                if (currentlyEquipped.rarity === 'mythic') currentCharHp = (currentCharHp + currentlyEquipped.bonus) * (1 + currentlyEquipped.pct / 100);
                else currentCharHp += currentlyEquipped.bonus;
            }
            if (currentlyEquipped.type === "gold") {
                if (currentlyEquipped.rarity === 'mythic') currentCharGold = (currentCharGold + currentlyEquipped.bonus) * (1 + currentlyEquipped.pct / 100);
                else currentCharGold += currentlyEquipped.bonus;
            }
        }

        if (char.count >= 10 && char.stars <= 5) {
            currentCharAtk *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
            currentCharHp *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
            currentCharGold *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
        }
        if (char.passive === "double_bm") currentCharAtk *= 2;

        let isMax = char.count >= 10 || char.stars === 6;
        let countText = char.stars === 6 ? "UNIQUE" : (isMax ? "MAX" : `x${char.count}`);

        const isExpanded = expandedCharIds.has(char.id);
        const card = document.createElement('div');
        card.className = `char-card ${char.stars >= 4 ? 'glow-' + char.stars : ''} ${isExpanded ? 'expanded' : ''}`;
        card.dataset.charId = char.id;
        card.style.setProperty('--rarity-color', rarityColors[char.stars]);
        card.innerHTML = buildCharCardHTML(char, currentCharAtk, currentCharHp, currentCharGold, passiveHTML, isMax, countText);

        if (char.stars === 6 && mythicGrid) {
            mythicGrid.appendChild(card);
        } else {
            grid.appendChild(card);
        }
    });

    const warehouseRarities = ['common', 'rare', 'epic', 'legendary', 'mythic'];
    warehouseRarities.forEach(rarity => {
        const rGrid = document.getElementById(`gear-grid-${rarity}`);
        if (!rGrid) return;
        rGrid.innerHTML = '';

        const freeItems = player.gearInventory.filter(g => g.rarity === rarity && g.equippedTo === null);

        if (freeItems.length === 0) {
            rGrid.innerHTML = `<div style="font-size:11px; color: var(--text-muted); text-align:center; padding:10px 0;">${t('no_gear_empty')}</div>`;
            return;
        }

        freeItems.forEach(gear => {
            const row = document.createElement('div');
            row.className = 'unassigned-item';
            row.style.borderLeftColor = rarityColors[gear.rarity];
            const pctTag = gear.pct ? ` (+${gear.pct}%)` : '';
            const sellTitle = currentLang === 'en' ? `Sell for ${GEAR_SELL_PRICES[gear.rarity] || 50} 💰` : `Продать за ${GEAR_SELL_PRICES[gear.rarity] || 50} 💰`;
            row.innerHTML = `
                <div class="unassigned-item-left">
                    ${buildGearPortraitHTML(gear, 'gear-portrait-sm')}
                    <span>${localizedName(gear)}<br>+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)}${pctTag}</span>
                </div>
                <button class="btn-sell-gear" onclick="sellGear('${gear.instanceId}')" title="${sellTitle}">💰</button>
            `;
            rGrid.appendChild(row);
        });
    });

    renderArenaSquadSide();
}

function showGachaModal(items, type) {
    const modal = document.getElementById('gacha-modal');
    const grid = document.getElementById('modal-results-grid');
    if (!modal || !grid) return;

    grid.innerHTML = '';
    modal.style.display = 'flex';

    items.forEach(item => {
        const el = document.createElement('div');
        if (type === "char") {
            el.className = 'char-card';
            el.style.setProperty('--rarity-color', rarityColors[item.stars]);
            let starsStr = item.stars === 6 ? (currentLang === 'en' ? "👑 MYTHIC" : "👑 МИФИК") : "★".repeat(item.stars);
            el.innerHTML = `
                ${buildCharPortraitSquareHTML(item)}
                <div class="char-stars" style="color:${rarityColors[item.stars]}">${starsStr}</div>
                <div class="char-name" style="white-space:normal;">${localizedName(item)}</div>
            `;
        } else {
            el.className = 'gear-card-anim';
            el.style.setProperty('--rarity-color', rarityColors[item.rarity]);
            el.innerHTML = `
                ${buildGearPortraitHTML(item, 'gear-portrait-lg')}
                <div class="gear-title-anim">${localizedName(item)}</div>
                <div class="gear-bonus-anim">+${item.bonus.toFixed(2)} ${getGearLabel(item.type)}</div>
            `;
        }
        grid.appendChild(el);
    });
}

function closeModal() {
    const modal = document.getElementById('gacha-modal');
    if (modal) modal.style.display = 'none';
}

setInterval(() => {
    if (isAdFreeze) return;
    if (pendingDroppedGear !== null || document.getElementById('overflow-modal').style.display === 'flex') {
        return; 
    }

    const goldSec = calculateTotalGoldIncome();
    player.gold += goldSec;

    if (player.ownedCharacters.length > 0 && player.squadCurrentHp > 0) {
        player.timeAlive++;
        player.totalTimeAlive++;
        
        player.mythicTimer++;
        if (player.mythicTimer >= 1800) {
            player.mythicTimer = 0;
            grantMythicHeroChance();
        }
    }

    if (player.mythicCooldowns) {
        for (let k in player.mythicCooldowns) {
            if (player.mythicCooldowns[k] > 0) player.mythicCooldowns[k]--;
        }
    }

    autoUseMythicAbilities();

    const maxSquadHp = calculateTotalHp();

    if (player.ownedCharacters.some(c => c.id === "mythic_autoheal")) {
        if (!player.mythicCooldowns.mythic_autoheal) player.mythicCooldowns.mythic_autoheal = 0;
        if (player.squadCurrentHp > 0 && player.squadCurrentHp <= maxSquadHp * 0.10 && player.mythicCooldowns.mythic_autoheal <= 0) {
            player.squadCurrentHp = maxSquadHp;
            const hasCdrChronos = player.ownedCharacters.some(c => c.id === "mythic_cdr_buff");
            player.mythicCooldowns.mythic_autoheal = Math.round(600 * (hasCdrChronos ? 0.9 : 1.0));
            showToast(t('toast_phoenix'), "#ff3366");
            rollMythicArtifactChance();
        }
    }

    if (player.squadCurrentHp > maxSquadHp) {
        player.squadCurrentHp = maxSquadHp;
    }

    if (campState.isActive) {
        campState.timeLeft--;
        currentEnemy.hp = Math.max(0, campState.timeLeft);
        player.squadCurrentHp = maxSquadHp;

        if (campState.timeLeft % 5 === 0 && campState.timeLeft > 0) {
            const tier = getDynamicDropTier(player.battleStage);
            if (Math.random() < 0.15 && getGearCountByRarity(tier) < getMaxGearLimit()) {
                const gear = generateRandomGear(tier);
                player.gearInventory.push(gear);
                campState.hasDroppedGear = true;
                showToast(t('toast_campfire_gear', { name: localizedName(gear), bonus: gear.bonus.toFixed(2), label: getGearLabel(gear.type) }), rarityColors[tier]);
                renderInventory(); 
                saveGame();
            }
        }

        if (campState.timeLeft <= 0) {
            campState.isActive = false; 
            campState.timeLeft = 0;
            const tier = getDynamicDropTier(player.battleStage);
            if (!campState.hasDroppedGear && getGearCountByRarity(tier) < getMaxGearLimit()) {
                const gear = generateRandomGear(tier);
                player.gearInventory.push(gear);
                renderInventory(); 
                saveGame();
            }
            player.battleStage++;
            spawnEnemy();
        }
    } else {

        arenaRotationCounter++;
        if (arenaRotationCounter >= ARENA_ROTATE_EVERY_TICKS) {
            arenaRotationCounter = 0;
            arenaRotationOffset++;
            renderArenaSquadSide();
        }

        let squadAtk = getCombatSquadAtk();
        if (squadAtk > 0) {
            currentEnemy.hp -= squadAtk;
            triggerArenaSquadAttack();
        }

        if (currentEnemy.hp > 0 && player.ownedCharacters.length > 0) {
            player.squadCurrentHp -= currentEnemy.atk;
            triggerArenaEnemyAttack();

            if (player.squadCurrentHp <= 0) {
                showToast(t('toast_defeat'), "#ff3333");
                playArenaSquadWipe();
                player.bossWinStreak = 0;
                player.timeAlive = 0;
                player.battleStage = Math.max(1, player.battleStage - 1);
                player.squadCurrentHp = calculateTotalHp(); 
                spawnEnemy();
                updateUI();
                return; 
            }
        }

        if (currentEnemy.hp <= 0) {
            player.gold += currentEnemy.reward;
            
            player.bossWinStreak++;
            if (player.bossWinStreak > player.maxBossWinStreak) player.maxBossWinStreak = player.bossWinStreak;
            
            if (player.battleStage >= 34 && player.battleStage % 5 === 4) {
                showToast(t('toast_boss_win', { n: player.bossWinStreak }), '#ffd700');
            } else {
                showToast(t('toast_win', { n: player.bossWinStreak }), '#4caf50');
            }
            executeMonsterDrop(); 
            player.battleStage++;
            spawnEnemy();
        }
    }
    
    saveTimerCounter++;
    if (saveTimerCounter >= 30) {
        saveTimerCounter = 0;
        saveGame();
    }

    updateUI();
}, 1000);

function resumeCampFromSave() {
    if (!player.savedCampState) return false;

    campState.isActive = true;
    campState.timeLeft = player.savedCampState.timeLeft;
    campState.hasDroppedGear = player.savedCampState.hasDroppedGear;
    player.savedCampState = null;

    const bZone = document.getElementById('battle-zone-container');
    bZone.classList.add('camp-mode');
    currentEnemy.name = currentLang === 'en' ? "⛺ Campfire Rest (Resting Zone)" : "⛺ Привал у костра (Зона отдыха)";
    currentEnemy.emoji = "⛺";
    currentEnemy.spriteId = "camp";
    currentEnemy.maxHp = 30;
    currentEnemy.hp = campState.timeLeft;
    currentEnemy.atk = 0;
    currentEnemy.reward = 0;
    player.squadCurrentHp = calculateTotalHp();
    setArenaResting(true);
    renderArenaEnemySide();
    return true;
}

let ysdk = null;
let yaPlayer = null;
let adTimerSec = 0;
const AD_INTERVAL_SEC = 300;
let isAdFreeze = false;

async function initYandexSDK() {
    try {
        if (typeof YaGames === 'undefined') {
            console.warn('Yandex Games SDK не найден (запуск вне платформы Yandex Games).');
            return;
        }
        ysdk = await YaGames.init();
        window.ysdk = ysdk;

        try {
            yaPlayer = await ysdk.getPlayer({ scopes: false });
        } catch (e) {
            console.warn('Не удалось получить объект игрока, облачные сохранения недоступны:', e);
        }

        if (!localStorage.getItem('waifu_idle_lang')) {
            try {
                const envLang = ysdk.environment.i18n.lang;
                setLanguage(envLang === 'ru' ? 'ru' : 'en');
            } catch (e) { }
        }

        if (ysdk.features && ysdk.features.LoadingAPI) {
            ysdk.features.LoadingAPI.ready();
        }
    } catch (err) {
        console.error('Ошибка инициализации Yandex SDK:', err);
    }
}

function toggleFullscreen() {
    if (ysdk && ysdk.screen && ysdk.screen.fullscreen) {
        if (ysdk.screen.fullscreen.status === 'on') {
            ysdk.screen.fullscreen.exit();
        } else {
            ysdk.screen.fullscreen.request();
        }
        return;
    }
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen().catch(() => {});
    }
}

function freezeGameForAd(freeze) {
    isAdFreeze = freeze;
    const overlay = document.getElementById('ad-freeze-overlay');
    if (overlay) overlay.style.display = freeze ? 'flex' : 'none';
    document.body.classList.toggle('game-frozen', freeze);
}

function showFullscreenAdWithFreeze() {
    freezeGameForAd(true);
    if (!ysdk || !ysdk.adv) {
        setTimeout(() => freezeGameForAd(false), 1500);
        return;
    }
    ysdk.adv.showFullscreenAdv({
        callbacks: {
            onClose: () => { freezeGameForAd(false); },
            onError: () => { freezeGameForAd(false); },
            onOffline: () => { freezeGameForAd(false); }
        }
    });
}

function getAdSummonAmount() {
    return Math.min(Math.max(1, player.battleStage), 100);
}

function handleRewardedSummon() {
    if (!ysdk || !ysdk.adv) {
        showToast(t('toast_ad_unavailable'), '#ff9800');
        return;
    }
    freezeGameForAd(true);
    ysdk.adv.showRewardedVideo({
        callbacks: {
            onRewarded: () => {
                const n = getAdSummonAmount();
                const oldMaxHp = calculateTotalHp();
                const hpRatio = oldMaxHp > 0 ? (player.squadCurrentHp / oldMaxHp) : 1;

                let results = [];
                for (let i = 0; i < n; i++) {
                    let char = pullCharacter();
                    results.push(char);
                    let existing = player.ownedCharacters.find(c => c.id === char.id);
                    if (existing) {
                        if (existing.count < 10) {
                            existing.count++;
                        } else {
                            if (char.stars === 1 || char.stars === 2) player.tokens.common += char.stars;
                            else if (char.stars === 3) player.tokens.rare += 1;
                            else if (char.stars === 4) player.tokens.epic += 1;
                            else if (char.stars === 5) player.tokens.legendary += 1;
                        }
                    } else {
                        player.ownedCharacters.push({ ...char, count: 1 });
                    }
                }

                const newMaxHp = calculateTotalHp();
                player.squadCurrentHp = Math.min(hpRatio * newMaxHp, newMaxHp);

                document.getElementById('modal-title').innerText = t('gacha_result_title', { n: n });
                showGachaModal(results, "char");
                showToast(t('toast_ad_reward', { n: n }), '#4caf50');
                renderInventory();
                updateUI();
                saveGame();
            },
            onClose: () => { freezeGameForAd(false); },
            onError: () => { freezeGameForAd(false); showToast(t('toast_ad_unavailable'), '#ff9800'); }
        }
    });
}

setInterval(() => {
    if (isAdFreeze) return;
    adTimerSec++;
    if (adTimerSec >= AD_INTERVAL_SEC) {
        adTimerSec = 0;
        showFullscreenAdWithFreeze();
    }
}, 1000);

document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.game-container, .wiki-drawer, .modal-overlay, .overflow-modal-overlay')) {
        e.preventDefault();
    }
});

let cloudSaveTimer = null;
const CLOUD_SAVE_DEBOUNCE_MS = 4000;

function scheduleCloudSave() {
    if (!yaPlayer) return;
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer = setTimeout(() => {
        try {
            const payload = JSON.parse(JSON.stringify(player));
            yaPlayer.setData(payload, false).catch(err => console.warn('Ошибка облачного сохранения:', err));
        } catch (e) {
            console.warn('Не удалось подготовить данные для облачного сохранения:', e);
        }
    }, CLOUD_SAVE_DEBOUNCE_MS);
}

function flushCloudSaveNow() {
    if (!yaPlayer) return;
    clearTimeout(cloudSaveTimer);
    try {
        const payload = JSON.parse(JSON.stringify(player));
        yaPlayer.setData(payload, true).catch(() => {});
    } catch (e) { }
}

window.addEventListener('beforeunload', flushCloudSaveNow);
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushCloudSaveNow();
});

async function bootGame() {
    await initYandexSDK();
    await loadGame();
    if (!resumeCampFromSave()) {
        spawnEnemy();
    }
    renderInventory();
    updateUI();
    renderArena();
    applyStaticTranslations();
}

bootGame();