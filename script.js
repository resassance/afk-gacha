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
        { id: "gear_c1", name: "🗡️ Стальной Меч Новичка", type: "atk", minBonus: 0.02, maxBonus: 0.06 },
        { id: "gear_c2", name: "🛡️ Крепкий Щит Стажёра", type: "hp", minBonus: 0.05, maxBonus: 0.15 },
        { id: "gear_c3", name: "🪙 Старая Монета Удачи", type: "gold", minBonus: 0.01, maxBonus: 0.03 }
    ],
    rare: [
        { id: "gear_r1", name: "⚔️ Рунический Меч Власти", type: "atk", minBonus: 0.08, maxBonus: 0.20 },
        { id: "gear_r2", name: "🍃 Амулет Живой Души", type: "hp", minBonus: 0.20, maxBonus: 0.50 },
        { id: "gear_r3", name: "💰 Кошель Торговца", type: "gold", minBonus: 0.04, maxBonus: 0.10 }
    ],
    epic: [
        { id: "gear_e1", name: "🏹 Лук Звездного Разлома", type: "atk", minBonus: 0.40, maxBonus: 1.10 },
        { id: "gear_e2", name: "🧥 Плотная Мантия Титана", type: "hp", minBonus: 1.00, maxBonus: 2.80 },
        { id: "gear_e3", name: "👑 Золотая Корона Мидаса", type: "gold", minBonus: 0.20, maxBonus: 0.60 }
    ],
    legendary: [
        { id: "gear_l1", name: "🔱 Святой Экскалибур", type: "atk", minBonus: 2.20, maxBonus: 5.50 },
        { id: "gear_l2", name: "💎 Сердце Прародителя", type: "hp", minBonus: 5.00, maxBonus: 14.00 },
        { id: "gear_l3", name: "🏆 Кубок Бесконечного Богатства", type: "gold", minBonus: 1.00, maxBonus: 3.00 }
    ],
    mythic: [
        { id: "gear_m1", name: "🌌 Клеймор Первородного Хаоса", type: "atk", minBonus: 12.0, maxBonus: 28.0, pct: 25 },
        { id: "gear_m2", name: "👑 Эгида Абсолютного Бессмертия", type: "hp", minBonus: 30.0, maxBonus: 75.0, pct: 30 },
        { id: "gear_m3", name: "💎 Рог Изобилия Вселенной", type: "gold", minBonus: 6.0, maxBonus: 15.0, pct: 20 }
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
    if (type === 'atk') return 'АТК';
    if (type === 'hp') return 'HP';
    if (type === 'gold') return 'ЗОЛ';
    return '';
}

const MONSTER_PREFIXES = ["Дикий", "Проклятый", "Пещерный", "Кровавый", "Элитный", "Адский", "Древний"];
const MONSTER_TYPES = ["Слайм", "Гоблин", "Орк-Налётчик", "Скелет-Воин", "Гарпия", "Каменный Голем", "Химера", "Дракон Бездны"];

let player = {
    gold: 1000,
    tokens: { common: 0, rare: 0, epic: 0, legendary: 0 },
    ownedCharacters: [],
    gearInventory: [],
    battleStage: 1,
    squadCurrentHp: 0,
    bossWinStreak: 0,
    timeAlive: 0,
    totalTimeAlive: 0,
    savedCampState: null,
    mythicTimer: 0,
    mythicCooldowns: { mythic_oneclick: 0, mythic_loot: 0, mythic_autoheal: 0 }
};

let currentEnemy = { name: "", hp: 0, maxHp: 0, atk: 0, reward: 0 };
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
    } catch (e) {
        console.error(e);
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('waifu_idle_save_v2');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed) {
                player = Object.assign({}, player, parsed);
            }
        }
    } catch (e) {
        console.error(e);
    }

    if (!player.tokens) player.tokens = { common: 0, rare: 0, epic: 0, legendary: 0 };
    if (!player.gearInventory) player.gearInventory = [];
    if (!player.ownedCharacters) player.ownedCharacters = [];
    if (!player.mythicCooldowns) player.mythicCooldowns = { mythic_oneclick: 0, mythic_loot: 0, mythic_autoheal: 0 };
    if (player.gold === undefined || isNaN(player.gold)) player.gold = 1000;
    if (player.battleStage === undefined || isNaN(player.battleStage)) player.battleStage = 1;
    if (player.bossWinStreak === undefined) player.bossWinStreak = 0;
    if (player.timeAlive === undefined) player.timeAlive = 0;
    if (player.totalTimeAlive === undefined) player.totalTimeAlive = 0;
    if (player.mythicTimer === undefined) player.mythicTimer = 0;

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

const ENEMY_SOFTCAP_STAGE = 200;
const ENEMY_SAFETY_MARGIN = 1.3;
const ENEMY_MAX_ATK_SHARE = 0.30;

function getEnemyStats(stage, isBoss) {
    const hpMod = isBoss ? 2.5 : 1.0;
    const atkMod = isBoss ? 1.8 : 1.0;

    const classicHp = (12.0 * Math.pow(1.2, stage - 1) + (stage * 0.5)) * hpMod;
    const classicAtk = (0.05 * Math.pow(1.12, stage - 1) + (stage * 0.005)) * atkMod;

    if (stage <= ENEMY_SOFTCAP_STAGE) {
        return { hp: classicHp, atk: classicAtk };
    }

    const squadAtk = Math.max(calculateTotalAtk(), 0.01);
    const squadHp = Math.max(calculateTotalHp(), 0.01);
    const atkCeiling = squadHp * ENEMY_MAX_ATK_SHARE * atkMod;
    const atk = Math.min(classicAtk, atkCeiling);
    const powerBudget = (squadAtk * squadHp) / ENEMY_SAFETY_MARGIN;
    const hpCeiling = powerBudget / atk;
    const hp = Math.min(classicHp, hpCeiling);

    return { hp, atk };
}

function spawnEnemy() {
    const bZone = document.getElementById('battle-zone-container');
    
    if (player.savedCampState) {
        campState.isActive = true;
        campState.timeLeft = player.savedCampState.timeLeft;
        campState.hasDroppedGear = player.savedCampState.hasDroppedGear;
        player.savedCampState = null;
        
        bZone.classList.add('camp-mode');
        currentEnemy.name = "⛺ Привал у костра (Зона отдыха)";
        currentEnemy.maxHp = 30;
        currentEnemy.hp = campState.timeLeft;
        currentEnemy.atk = 0;
        currentEnemy.reward = 0;
        player.squadCurrentHp = calculateTotalHp();
        return;
    }
    
    if (player.battleStage % 5 === 0) {
        campState.isActive = true;
        campState.timeLeft = 30;
        campState.hasDroppedGear = false;
        
        bZone.classList.add('camp-mode');
        currentEnemy.name = "⛺ Привал у костра (Зона отдыха)";
        currentEnemy.maxHp = 30;
        currentEnemy.hp = 30;
        currentEnemy.atk = 0;
        currentEnemy.reward = 0;

        player.squadCurrentHp = calculateTotalHp();
        return;
    }

    campState.isActive = false;
    bZone.classList.remove('camp-mode');

    const pIndex = (player.battleStage - 1) % MONSTER_PREFIXES.length;
    const tIndex = (player.battleStage - 1) % MONSTER_TYPES.length;
    const isBoss = (player.battleStage >= 34 && player.battleStage % 5 === 4);
    const prefix = isBoss ? "👹 [БОСС]" : MONSTER_PREFIXES[pIndex];
    
    currentEnemy.name = `${prefix} ${MONSTER_TYPES[tIndex]} [Ур. ${player.battleStage}]`;
    
    let hpMod = isBoss ? 2.5 : 1.0;

    const stats = getEnemyStats(player.battleStage, isBoss);
    currentEnemy.maxHp = stats.hp;
    currentEnemy.hp = stats.hp;
    currentEnemy.atk = stats.atk;
    currentEnemy.reward = Math.floor((15 * Math.pow(1.12, player.battleStage - 1)) * hpMod) + 2;
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
    showToast(`⚔️ Выбит трофей: ${newGear.name} (+${newGear.bonus.toFixed(2)} ${getGearLabel(newGear.type)})!`, rarityColors[tier]);
    renderInventory();
    saveGame();
}

function openOverflowModal() {
    const modal = document.getElementById('overflow-modal');
    if (!modal) return;
    
    modal.style.display = 'flex';
    const infoDiv = document.getElementById('overflow-gear-info');
    const price = GEAR_SELL_PRICES[pendingDroppedGear.rarity] || 50;
    infoDiv.innerHTML = `
        <div style="color: ${rarityColors[pendingDroppedGear.rarity]}; font-weight: bold; font-size: 16px;">
            ТРОФЕЙ: ${pendingDroppedGear.name} (+${pendingDroppedGear.bonus.toFixed(2)} ${getGearLabel(pendingDroppedGear.type)})
        </div>
        <div style="margin-top: 5px; font-size: 12px; color: var(--text-muted);">
            Стоимость немедленной продажи: <span style="color: #ffd700;">${price} 💰</span>
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
    showToast(`💰 Новый трофей сразу продан за +${price} монет!`, '#4caf50');
    closeOverflowModal();
    updateUI();
    saveGame();
}

function claimPendingGear() {
    if (!pendingDroppedGear) return;
    if (getGearCountByRarity(pendingDroppedGear.rarity) >= getMaxGearLimit()) {
        alert("Склад этой редкости всё ещё полон!");
        return;
    }
    player.gearInventory.push(pendingDroppedGear);
    showToast(`⚔️ Предмет добавлен в арсенал (+${pendingDroppedGear.bonus.toFixed(2)} ${getGearLabel(pendingDroppedGear.type)})!`, rarityColors[pendingDroppedGear.rarity]);
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
    
    showToast(`💰 Старая реликвия продана за +${price} монет!`, '#4caf50');
    renderOverflowInventoryManager();
    renderInventory();
    updateUI();
    saveGame();
}

function bulkReforgeFromOverflow(tier) {
    const unequipped = player.gearInventory.filter(g => g.rarity === tier && g.equippedTo === null);
    if (unequipped.length < 3) {
        alert(`Недостаточно свободных реликвий тира ${tier.toUpperCase()} для перековки (нужно 3 шт.)`);
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
        showToast(`✨ Успешная эволюция! Получен тир ${finalTier.toUpperCase()}!`, '#ffd700');
    } else {
        showToast(`🔨 Перековка завершена. Получен тир ${finalTier.toUpperCase()}`, '#ffffff');
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
        listDiv.innerHTML = '<div style="color:var(--text-muted); padding:10px; text-align:center;">Нет свободного снаряжения для продажи или перековки</div>';
        return;
    }

    const reforgeContainer = document.createElement('div');
    reforgeContainer.className = "overflow-reforge-group";
    
    const tiers = ['common', 'rare', 'epic', 'legendary'];
    tiers.forEach(t => {
        const count = unequippedItems.filter(g => g.rarity === t).length;
        if (count >= 3) {
            const btn = document.createElement('button');
            btn.className = "btn-reforge-quick";
            btn.style.background = rarityColors[t];
            btn.innerText = `🔨 Сжать 3 ${t.toUpperCase()} (-2 слота)`;
            btn.onclick = () => bulkReforgeFromOverflow(t);
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
        row.innerHTML = `
            <div>${item.name} <span style="color:#00e5ff;">(+${item.bonus.toFixed(2)} ${getGearLabel(item.type)})</span></div>
            <button onclick="sellOldGearFromOverflow('${item.instanceId}')" style="background:#cc3333; color:white; border:none; padding:2px 6px; border-radius:3px; cursor:pointer;">Продать за +${price}💰</button>
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

function handlePulls(amount) {
    let pullsToPerform = amount;
    if (amount === 'max') pullsToPerform = Math.floor(player.gold / 100);

    if (typeof amount === 'number' && player.gold < amount * 100) {
        pullsToPerform = Math.floor(player.gold / 100);
    }

    if (pullsToPerform <= 0) {
        showToast("Недостаточно Кредитов для призыва!", "#ff3333");
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

    document.getElementById('modal-title').innerText = `Призыв воительниц (x${pullsToPerform})`;
    showGachaModal(results, "char");
    renderInventory();
    updateUI();
    saveGame();
}

function rollGear(tier, mode) {
    if (getGearCountByRarity(tier) >= getMaxGearLimit()) {
        alert(`Ваша оружейная для редкости ${tier.toUpperCase()} забита! Максимум: ${getMaxGearLimit()} шт.`);
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
        alert(`Недостаточно жетонов ${tier.toUpperCase()} или нет свободного места!`);
        return;
    }

    player.tokens[tier] -= totalCost;
    let rolledItems = [];

    for (let i = 0; i < rollsToPerform; i++) {
        const newGearInstance = generateRandomGear(tier);
        player.gearInventory.push(newGearInstance);
        rolledItems.push(newGearInstance);
    }

    document.getElementById('modal-title').innerText = `Кузня: Выковано реликвий (x${rollsToPerform})`;
    showGachaModal(rolledItems, "gear");
    
    renderInventory();
    updateUI();
    saveGame();
}

function buyCharacterCopy(charId, stars) {
    const tokenType = TOKEN_MAP[stars];
    const cost = CHAR_TOKEN_COST[stars];

    if (player.tokens[tokenType] < cost) {
        showToast(`Недостаточно жетонов! Требуется ${cost} ${TOKEN_EMOJIS[tokenType]}`, "#ff3333");
        return;
    }

    let char = player.ownedCharacters.find(c => c.id === charId);
    if (char) {
        if (char.count >= 10) {
            showToast("Максимальный уровень прорыва!", "#ffaa00");
            return;
        }

        const oldMaxHp = calculateTotalHp();
        const hpRatio = oldMaxHp > 0 ? (player.squadCurrentHp / oldMaxHp) : 1;

        player.tokens[tokenType] -= cost;
        char.count++;
        showToast(`🧬 Успешно куплена копия персонажа! Прогресс: x${char.count}`, "#4caf50");
        
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
    
    showToast(`💰 Реликвия продана за +${price} монет!`, '#4caf50');
    updateUI();
    renderInventory();
    saveGame();
}

function bulkReforge(tier) {
    const unequipped = player.gearInventory.filter(g => g.rarity === tier && g.equippedTo === null);
    if (unequipped.length < 3) {
        alert(`Необходимо минимум 3 свободных реликвии редкости ${tier.toUpperCase()} для перековки!`);
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
        showToast(`✨ Великолепный исход! Реликвия эволюционировала в ${finalTier.toUpperCase()}!`, '#ffd700');
    } else {
        showToast(`🔨 Перековка завершена. Получен предмет тира ${finalTier.toUpperCase()}`, '#ffffff');
    }

    const upgradeGear = generateRandomGear(finalTier);
    player.gearInventory.push(upgradeGear);

    renderInventory();
    updateUI();
    saveGame();
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
        renderWikiList();
        drawer.classList.add('open');
        overlay.classList.add('open');
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

function renderWikiBlock(rarityKey, pool, headTitle, container) {
    const rarityBlock = document.createElement('div');
    rarityBlock.className = 'wiki-rarity-block';
    rarityBlock.innerHTML = `<div class="wiki-rarity-head" style="color: ${rarityColors[rarityKey]};">${headTitle}</div>`;
    
    const list = document.createElement('div');
    list.className = 'wiki-list';

    pool.forEach(char => {
        const isOwned = player.ownedCharacters.some(c => c.id === char.id);
        const row = document.createElement('div');
        row.className = `wiki-row ${isOwned ? 'owned' : 'unowned'}`;
        
        row.innerHTML = `
            <div class="wiki-row-top">
                <span>${char.name}</span>
                <span>${isOwned ? '✅ Открыта' : '🔒 Закрыта'}</span>
            </div>
            <div class="wiki-row-stats">
                Базовые: АТК ${char.baseAtk.toFixed(2)} | HP ${char.baseHp.toFixed(2)} | ЗОЛ +${char.baseGold.toFixed(2)}/с
            </div>
            ${char.passiveDesc ? `<div class="wiki-row-passive">Эффект: ${char.passiveDesc}</div>` : ''}
        `;
        list.appendChild(row);
    });

    rarityBlock.appendChild(list);
    container.appendChild(rarityBlock);
}

function grantMythicHeroChance() {
    const unowned = MYTHIC_HEROES_POOL.filter(mh => !player.ownedCharacters.some(c => c.id === mh.id));
    if (unowned.length > 0) {
        const selected = unowned[Math.floor(Math.random() * unowned.length)];
        player.ownedCharacters.push({ ...selected, count: 1 });
        showToast(`👑 В отряд снизошла МИФИЧЕСКАЯ богиня: ${selected.name}!`, '#ff3366');
        renderInventory();
    } else {
        showToast(`✨ Все мифические богини собраны! Выдано утешение: +500,000 золота!`, '#ffd700');
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
            showToast(`✨ Абсолютный резонанс! Найден МИФИЧЕСКИЙ артефакт: ${mythicGear.name}!`, '#ff3366');
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
            showToast("Нельзя истреблять костры!", "#ff3333");
            return;
        }
        currentEnemy.hp = 0;
        player.mythicCooldowns[heroId] = Math.round(300 * cdrMult);
        showToast("🌌 Пространство разорвано! Враг моментально аннигилирован!", "#ff3366");
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
            showToast(`🎰 Удача улыбнулась: выдан предмет ${gear.name}!`, rarityColors[selectedTier]);
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
        showToast("Недостаточно кредитов! Лавка требует 1,000,000 монет.", "#ff3333");
        return;
    }
    if (getGearCountByRarity('mythic') >= getMaxGearLimit()) {
        alert("Оружейная мификов переполнена!");
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
    showToast(`🏪 Куплено из лавки Вельзевул: ${item.name}!`, '#ff3366');
    renderInventory();
    updateUI();
    saveGame();
}

function changeEquipment(charId, selectElement) {
    const selectedInstanceId = selectElement.value;
    const oldMaxHp = calculateTotalHp();
    const hpRatio = oldMaxHp > 0 ? (player.squadCurrentHp / oldMaxHp) : 1;

    player.gearInventory.forEach(g => {
        if (g.equippedTo === charId) g.equippedTo = null;
    });

    if (selectedInstanceId !== "none") {
        const gear = player.gearInventory.find(g => g.instanceId === selectedInstanceId);
        if (gear) gear.equippedTo = charId;
    }

    const newMaxHp = calculateTotalHp();
    player.squadCurrentHp = Math.min(hpRatio * newMaxHp, newMaxHp);

    renderInventory();
    updateUI();
    saveGame();
}

function updateUI() {
    document.getElementById('gold-display').innerText = Math.floor(player.gold).toLocaleString('ru-RU');
    const pGold = calculateTotalGoldIncome();
    document.getElementById('gold-speed-display').innerText = `+${pGold.toFixed(2)}/сек`;
    document.getElementById('income-display').innerText = calculateTotalBM().toFixed(2) + " БМ";
    
    const maxPullsCount = Math.floor(player.gold / 100);
    document.getElementById('btn-summon-max').innerText = `Призыв МАКС (${maxPullsCount})`;

    document.getElementById('tok-c').innerText = `🟢 ${player.tokens.common}`;
    document.getElementById('tok-r').innerText = `🔵 ${player.tokens.rare}`;
    document.getElementById('tok-e').innerText = `🟣 ${player.tokens.epic}`;
    document.getElementById('tok-l').innerText = `🟡 ${player.tokens.legendary}`;
    
    document.getElementById('unique-display').innerText = `${player.ownedCharacters.length} / ${TOTAL_CHARACTERS_COUNT}`;
    
    const limit = getMaxGearLimit();
    document.getElementById('warehouse-summary').innerText = 
        `Древняя Кузня Реликвий (C: ${getGearCountByRarity('common')}/${limit} | R: ${getGearCountByRarity('rare')}/${limit} | E: ${getGearCountByRarity('epic')}/${limit} | L: ${getGearCountByRarity('legendary')}/${limit} | M: ${getGearCountByRarity('mythic')}/${limit})`;

    const maxSquadHp = calculateTotalHp();
    const totalAtk = calculateTotalAtk();
    const squadHpPercent = maxSquadHp > 0 ? Math.max(0, (player.squadCurrentHp / maxSquadHp) * 100) : 0;

    const squadTextEl = document.getElementById('squad-hp-text');
    if (squadTextEl) {
        squadTextEl.innerText = `${player.squadCurrentHp.toFixed(2)} / ${maxSquadHp.toFixed(2)} HP`;
        document.getElementById('squad-hp-bar').style.width = `${squadHpPercent}%`;
        document.getElementById('squad-info-atk').innerText = `${totalAtk.toFixed(2)} АТК/с`;
        document.getElementById('squad-info-count').innerText = `В строю: ${player.ownedCharacters.length} тян`;
        document.getElementById('squad-info-bm').innerText = `Общая БМ: ${calculateTotalBM().toFixed(2)}`;
        document.getElementById('boss-streak-display').innerText = player.bossWinStreak;
        document.getElementById('time-alive-display').innerText = formatTime(player.timeAlive);
        document.getElementById('total-time-display').innerText = formatTime(player.totalTimeAlive);
    }

    const mythicPanel = document.getElementById('mythic-panel');
    if (mythicPanel) {
        if (player.ownedCharacters.length > 0) {
            mythicPanel.style.display = 'block';
            const diff = 1800 - player.mythicTimer;
            document.getElementById('mythic-timer-display').innerText = `До прихода следующей мифической сущности: ${Math.floor(diff/60)} мин ${diff%60} сек`;
            
            const skillsContainer = document.getElementById('mythic-skills-container');
            skillsContainer.innerHTML = '';
            
            const actives = [
                { id: "mythic_oneclick", label: "🌌 Аннигиляция Врага" },
                { id: "mythic_loot", label: "🎰 Призыв Сокровища" }
            ];
            
            actives.forEach(act => {
                if (player.ownedCharacters.some(c => c.id === act.id)) {
                    const btn = document.createElement('button');
                    btn.className = 'btn-wiki-toggle';
                    const cd = player.mythicCooldowns[act.id] || 0;
                    if (cd > 0) {
                        btn.innerText = `${act.label} (${cd}с)`;
                        btn.style.background = '#4a5568';
                        btn.disabled = true;
                    } else {
                        btn.innerText = act.label;
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
        document.getElementById('stage-display').innerText = `ОТДЫХ`;
        document.getElementById('enemy-name').innerText = currentEnemy.name;
        document.getElementById('hp-text').innerText = `Время стоянки: ${campState.timeLeft} сек`;
        const percent = (campState.timeLeft / 30) * 100;
        document.getElementById('hp-bar').style.width = `${percent}%`;
        document.getElementById('battle-info').innerText = `Зона отдыха. Здоровье отряда зафиксировано на 100%. Идет поиск вещей...`;
        
        if (enemyAtkEl) enemyAtkEl.innerText = `0.00 АТК/с`;
        if (enemyBmEl) enemyBmEl.innerText = `БМ Врага: 0.00`;
    } else {
        document.getElementById('stage-display').innerText = `ЭТАП ${player.battleStage}`;
        document.getElementById('enemy-name').innerText = currentEnemy.name;
        document.getElementById('hp-text').innerText = `${currentEnemy.hp.toFixed(2)} / ${currentEnemy.maxHp.toFixed(2)} HP`;
        const hpPercent = Math.max(0, (currentEnemy.hp / currentEnemy.maxHp) * 100);
        document.getElementById('hp-bar').style.width = `${hpPercent}%`;
        
        document.getElementById('battle-info').innerText = 
            `Атака отряда: ${totalAtk.toFixed(2)} АТК/сек | Сила монстра: ${currentEnemy.atk.toFixed(2)} АТК/сек | +${pGold.toFixed(2)} золото/с`;

        if (enemyAtkEl) enemyAtkEl.innerText = `${currentEnemy.atk.toFixed(2)} АТК/с`;
        if (enemyBmEl) {
            const enemyBM = currentEnemy.atk + currentEnemy.maxHp;
            enemyBmEl.innerText = `БМ Врага: ${enemyBM.toFixed(2)}`;
        }
    }
}

function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    if (!grid) return;
    grid.innerHTML = '';
    player.ownedCharacters.sort((a, b) => b.stars - a.stars);

    const hasCdrChronos = player.ownedCharacters.some(c => c.id === "mythic_cdr_buff");

    player.ownedCharacters.forEach(char => {
        const card = document.createElement('div');
        card.className = `char-card ${char.stars >= 4 ? 'glow-' + char.stars : ''}`;
        card.style.setProperty('--rarity-color', rarityColors[char.stars]);

        let starsStr = char.stars === 6 ? "👑 МИФИК" : "★".repeat(char.stars);
        let passiveHTML = char.passiveDesc ? `<div class="char-passive">${char.passiveDesc}</div>` : '';
        if (char.count >= 10 && char.stars <= 5) {
            passiveHTML += `<div class="char-passive awaken">${MAX_UPGRADE_PASSIVES[char.stars].desc}</div>`;
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

        let selectHTML = `<select class="gear-selector" onchange="changeEquipment('${char.id}', this)">`;
        selectHTML += `<option value="none" ${!currentlyEquipped ? 'selected' : ''}>[Без реликвии]</option>`;
        
        player.gearInventory.forEach(gear => {
            if (gear.equippedTo === null || gear.equippedTo === char.id) {
                const isSelected = gear.equippedTo === char.id ? 'selected' : '';
                const pctTag = gear.pct ? ` (+${gear.pct}%)` : '';
                selectHTML += `<option value="${gear.instanceId}" style="color: ${rarityColors[gear.rarity]};" ${isSelected}>
                    [${gear.rarity.toUpperCase()}] ${gear.name} (+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)}${pctTag})
                </option>`;
            }
        });
        selectHTML += `</select>`;

        const tType = TOKEN_MAP[char.stars];
        const tCost = CHAR_TOKEN_COST[char.stars];
        const buyBtnHTML = isMax ? '' : `<button class="btn-buy-copy" onclick="buyCharacterCopy('${char.id}', ${char.stars})">🧬 Копия за ${tCost} ${TOKEN_EMOJIS[tType]}</button>`;

        card.innerHTML = `
            <div class="char-count" ${isMax ? 'style="background:#ff8f00;"' : ''}>${countText}</div>
            <div class="char-stars" style="color:${rarityColors[char.stars]}">${starsStr}</div>
            <div class="char-name">${char.name}</div>
            <div class="char-income">${currentCharAtk.toFixed(2)} АТК</div>
            <div class="char-hp-stat">${currentCharHp.toFixed(2)} HP</div>
            <div class="char-gold-income">${currentCharGold.toFixed(2)} ЗОЛ/с</div>
            ${passiveHTML}
            ${selectHTML}
            ${buyBtnHTML}
        `;
        grid.appendChild(card);
    });

    const warehouseRarities = ['common', 'rare', 'epic', 'legendary', 'mythic'];
    warehouseRarities.forEach(rarity => {
        const rGrid = document.getElementById(`gear-grid-${rarity}`);
        if (!rGrid) return;
        rGrid.innerHTML = '';

        const freeItems = player.gearInventory.filter(g => g.rarity === rarity && g.equippedTo === null);

        if (freeItems.length === 0) {
            rGrid.innerHTML = `<div style="font-size:11px; color: var(--text-muted); text-align:center; padding:10px 0;">Пусто</div>`;
            return;
        }

        freeItems.forEach(gear => {
            const row = document.createElement('div');
            row.className = 'unassigned-item';
            row.style.borderLeftColor = rarityColors[gear.rarity];
            const pctTag = gear.pct ? ` (+${gear.pct}%)` : '';
            row.innerHTML = `
                <span>${gear.name}<br>+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)}${pctTag}</span>
                <button class="btn-sell-gear" onclick="sellGear('${gear.instanceId}')">Продать</button>
            `;
            rGrid.appendChild(row);
        });
    });
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
            let starsStr = item.stars === 6 ? "👑 МИФИК" : "★".repeat(item.stars);
            el.innerHTML = `
                <div class="char-stars" style="color:${rarityColors[item.stars]}">${starsStr}</div>
                <div class="char-name" style="white-space:normal;">${item.name}</div>
            `;
        } else {
            el.className = 'gear-card-anim';
            el.style.setProperty('--rarity-color', rarityColors[item.rarity]);
            el.innerHTML = `
                <div class="gear-title-anim">${item.name}</div>
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

    const maxSquadHp = calculateTotalHp();

    if (player.ownedCharacters.some(c => c.id === "mythic_autoheal")) {
        if (!player.mythicCooldowns.mythic_autoheal) player.mythicCooldowns.mythic_autoheal = 0;
        if (player.squadCurrentHp > 0 && player.squadCurrentHp <= maxSquadHp * 0.10 && player.mythicCooldowns.mythic_autoheal <= 0) {
            player.squadCurrentHp = maxSquadHp;
            const hasCdrChronos = player.ownedCharacters.some(c => c.id === "mythic_cdr_buff");
            player.mythicCooldowns.mythic_autoheal = Math.round(600 * (hasCdrChronos ? 0.9 : 1.0));
            showToast("💖 Феникс восстал из пепла! ХП отряда полностью восстановлено!", "#ff3366");
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
                showToast(`🔥 Костер согрел: найдена экипировка ${gear.name} (+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)})!`, rarityColors[tier]);
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
        let squadAtk = calculateTotalAtk();
        if (squadAtk > 0) currentEnemy.hp -= squadAtk;

        if (currentEnemy.hp > 0 && player.ownedCharacters.length > 0) {
            player.squadCurrentHp -= currentEnemy.atk;

            if (player.squadCurrentHp <= 0) {
                showToast("💀 Отряд повержен! Серия побед обнулена. Отступление на 1 этап назад.", "#ff3333");
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
            if (player.battleStage >= 34 && player.battleStage % 5 === 4) {
                showToast(`🏆 БОСС побежден! Серия побед подряд: ${player.bossWinStreak}`, '#ffd700');
            } else {
                showToast(`⚔️ Враг повержен! Серия побед подряд: ${player.bossWinStreak}`, '#4caf50');
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

loadGame();
spawnEnemy();
renderInventory();
updateUI();