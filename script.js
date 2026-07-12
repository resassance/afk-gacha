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
        { id: "esdeath", name: "❄️ General Генерал Льда Эсдес", stars: 5, baseAtk: 4.10, baseHp: 26.00, baseGold: 15.0, passive: "imperial_tax", passiveDesc: "+25% к золоту из всех источников" },
        { id: "tiamat", name: "🌋 Дракон Хаоса Тиамат", stars: 5, baseAtk: 6.50, baseHp: 31.00, baseGold: 6.0, passive: "dragon_rage", passiveDesc: "+25% к АТК всего отряда" }
    ]
};

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
    ]
};

const MAX_GEAR_PER_RARITY = 50;
const TOTAL_CHARACTERS_COUNT = Object.values(CHARACTER_DATABASE).flat().length;

const TOKEN_MAP = { 1: 'common', 2: 'common', 3: 'rare', 4: 'epic', 5: 'legendary' };
const CHAR_TOKEN_COST = { 1: 15, 2: 30, 3: 15, 4: 10, 5: 5 };
const TOKEN_EMOJIS = { common: '🟢', rare: '🔵', epic: '🟣', legendary: '🟡' };
const GEAR_FORGE_COST = { common: 10, rare: 10, epic: 10, legendary: 5 };

const DROP_RATES = { 5: 0.6, 4: 5.4, 3: 15, 2: 39, 1: 40 };
const GEAR_SELL_PRICES = { common: 100, rare: 400, epic: 1500, legendary: 7000 };

const rarityColors = { 
    1: '#757575', 2: '#388e3c', 3: '#0288d1', 4: '#a124c7', 5: '#ff8f00',
    'common': '#4caf50', 'rare': '#2196f3', 'epic': '#e040fb', 'legendary': '#ff8f00'
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
    squadCurrentHp: 0  
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

function saveGame() {
    try {
        localStorage.setItem('waifu_idle_save_v1', JSON.stringify(player));
    } catch (e) {
        console.error(e);
    }
}

function loadGame() {
    try {
        const saved = localStorage.getItem('waifu_idle_save_v1');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed) {
                player = Object.assign({}, player, parsed);
                gearCounter = player.gearInventory.length;
            }
        }
    } catch (e) {
        console.error(e);
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

    player.ownedCharacters.forEach(char => {
        let charAtk = char.baseAtk * (1 + (char.count - 1) * 0.5);
        const equipped = player.gearInventory.find(g => g.equippedTo === char.id);
        
        if (equipped && equipped.type === "atk") {
            charAtk += equipped.bonus;
        }
        if (char.count >= 10) charAtk *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
        
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
    player.ownedCharacters.forEach(char => {
        let charHp = char.baseHp * (1 + (char.count - 1) * 0.5);
        const equipped = player.gearInventory.find(g => g.equippedTo === char.id);
        
        if (equipped && equipped.type === "hp") {
            charHp += equipped.bonus; 
        }
        if (char.count >= 10) charHp *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
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

    player.ownedCharacters.forEach(char => {
        let charGold = char.baseGold * (1 + (char.count - 1) * 0.5);
        const equipped = player.gearInventory.find(g => g.equippedTo === char.id);
        
        if (equipped && equipped.type === "gold") {
            charGold += equipped.bonus;
        }

        if (char.count >= 10) charGold *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
        
        if (char.passive === "gold_fever") globalGoldMultiplier += 0.10;
        if (char.passive === "ocean_wealth") globalGoldMultiplier += 0.15;
        if (char.passive === "imperial_tax") globalGoldMultiplier += 0.25;

        totalGold += charGold;
    });

    return totalGold * globalGoldMultiplier;
}

function spawnEnemy() {
    const bZone = document.getElementById('battle-zone-container');
    
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
    
    currentEnemy.name = `${MONSTER_PREFIXES[pIndex]} ${MONSTER_TYPES[tIndex]} [Ур. ${player.battleStage}]`;
    currentEnemy.maxHp = 12.0 * Math.pow(1.2, player.battleStage - 1) + (player.battleStage * 0.5);
    currentEnemy.hp = currentEnemy.maxHp;
    
    currentEnemy.atk = 0.05 * Math.pow(1.12, player.battleStage - 1) + (player.battleStage * 0.005);
    currentEnemy.reward = Math.floor(15 * Math.pow(1.12, player.battleStage - 1)) + 2;
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
        equippedTo: null
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
    
    if (getGearCountByRarity(tier) >= MAX_GEAR_PER_RARITY) {
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
    if (getGearCountByRarity(pendingDroppedGear.rarity) >= MAX_GEAR_PER_RARITY) {
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
        if (pendingDroppedGear && getGearCountByRarity(pendingDroppedGear.rarity) < MAX_GEAR_PER_RARITY) {
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
    reforgeContainer.style.cssText = "display:flex; gap:5px; margin-bottom:10px; flex-wrap:wrap; background:rgba(0,0,0,0.3); padding:8px; border-radius:4px;";
    
    const tiers = ['common', 'rare', 'epic', 'legendary'];
    tiers.forEach(t => {
        const count = unequippedItems.filter(g => g.rarity === t).length;
        if (count >= 3) {
            const btn = document.createElement('button');
            btn.className = "btn-reforge-quick";
            btn.style.cssText = `background:${rarityColors[t]}; color:#fff; border:none; padding:4px 8px; border-radius:3px; cursor:pointer; font-size:11px;`;
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
    if (getGearCountByRarity(tier) >= MAX_GEAR_PER_RARITY) {
        alert(`Ваша оружейная для редкости ${tier.toUpperCase()} забита! Максимум: ${MAX_GEAR_PER_RARITY} шт.`);
        return;
    }

    let singleCost = GEAR_FORGE_COST[tier];
    let rollsToPerform = 1;

    if (mode === 'max') {
        const maxAffordable = Math.floor(player.tokens[tier] / singleCost);
        const remainingSpace = MAX_GEAR_PER_RARITY - getGearCountByRarity(tier);
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

setInterval(() => {
    const goldSec = calculateTotalGoldIncome();
    player.gold += goldSec;

    const maxSquadHp = calculateTotalHp();
    if (player.squadCurrentHp <= 0 || player.squadCurrentHp > maxSquadHp) {
        if (player.squadCurrentHp <= 0 && player.ownedCharacters.length > 0) {
        } else {
            player.squadCurrentHp = maxSquadHp;
        }
    }

    if (campState.isActive) {
        campState.timeLeft--;
        currentEnemy.hp = campState.timeLeft;
        player.squadCurrentHp = maxSquadHp;

        if (campState.timeLeft % 5 === 0 && campState.timeLeft > 0) {
            const tier = getDynamicDropTier(player.battleStage);
            if (Math.random() < 0.15 && getGearCountByRarity(tier) < MAX_GEAR_PER_RARITY) {
                const gear = generateRandomGear(tier);
                player.gearInventory.push(gear);
                campState.hasDroppedGear = true;
                showToast(`🔥 Костер согрел: найдена экипировка ${gear.name} (+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)})!`, rarityColors[tier]);
                renderInventory(); 
                saveGame();
            }
        }

        if (campState.timeLeft <= 0) {
            const tier = getDynamicDropTier(player.battleStage);
            if (!campState.hasDroppedGear && getGearCountByRarity(tier) < MAX_GEAR_PER_RARITY) {
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
        
        if (squadAtk > 0) {
            currentEnemy.hp -= squadAtk;
        }

        if (currentEnemy.hp > 0 && player.ownedCharacters.length > 0) {
            player.squadCurrentHp -= currentEnemy.atk;

            if (player.squadCurrentHp <= 0) {
                showToast("💀 Отряд повержен! Отступление на 1 этап назад для перегруппировки.", "#ff3333");
                player.battleStage = Math.max(1, player.battleStage - 1);
                player.squadCurrentHp = calculateTotalHp(); 
                spawnEnemy();
                updateUI();
                return; 
            }
        }

        if (currentEnemy.hp <= 0) {
            player.gold += currentEnemy.reward;
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
    document.getElementById('warehouse-summary').innerText = 
        `Древняя Кузня Реликвий (C: ${getGearCountByRarity('common')}/50 | R: ${getGearCountByRarity('rare')}/50 | E: ${getGearCountByRarity('epic')}/50 | L: ${getGearCountByRarity('legendary')}/50)`;

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

    player.ownedCharacters.forEach(char => {
        const card = document.createElement('div');
        card.className = `char-card ${char.stars >= 4 ? 'glow-' + char.stars : ''}`;
        card.style.setProperty('--rarity-color', rarityColors[char.stars]);

        let starsStr = "★".repeat(char.stars);
        let passiveHTML = char.passiveDesc ? `<div class="char-passive">${char.passiveDesc}</div>` : '';
        if (char.count >= 10) {
            passiveHTML += `<div class="char-passive awaken">${MAX_UPGRADE_PASSIVES[char.stars].desc}</div>`;
        }
        
        let currentCharAtk = char.baseAtk * (1 + (char.count - 1) * 0.5);
        let currentCharHp = char.baseHp * (1 + (char.count - 1) * 0.5);
        let currentCharGold = char.baseGold * (1 + (char.count - 1) * 0.5);
        
        const currentlyEquipped = player.gearInventory.find(g => g.equippedTo === char.id);
        
        if (currentlyEquipped) {
            if (currentlyEquipped.type === "atk") currentCharAtk += currentlyEquipped.bonus;
            if (currentlyEquipped.type === "hp") currentCharHp += currentlyEquipped.bonus;
            if (currentlyEquipped.type === "gold") currentCharGold += currentlyEquipped.bonus;
        }
        
        if (char.count >= 10) {
            currentCharAtk *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
            currentCharHp *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
            currentCharGold *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
        }
        if (char.passive === "double_bm") currentCharAtk *= 2;

        let isMax = char.count >= 10;
        let countText = isMax ? "MAX" : `x${char.count}`;

        let selectHTML = `<select class="gear-selector" onchange="changeEquipment('${char.id}', this)">`;
        selectHTML += `<option value="none" ${!currentlyEquipped ? 'selected' : ''}>[Без реликвии]</option>`;
        
        player.gearInventory.forEach(gear => {
            if (gear.equippedTo === null || gear.equippedTo === char.id) {
                const isSelected = gear.equippedTo === char.id ? 'selected' : '';
                selectHTML += `<option value="${gear.instanceId}" style="color: ${rarityColors[gear.rarity]};" ${isSelected}>
                    [${gear.rarity.toUpperCase()}] ${gear.name} (+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)})
                </option>`;
            }
        });
        selectHTML += `</select>`;

        const tType = TOKEN_MAP[char.stars];
        const tCost = CHAR_TOKEN_COST[char.stars];
        const buyBtnHTML = isMax ? '' : `<button class="btn-buy-copy" onclick="buyCharacterCopy('${char.id}', ${char.stars})">🧬 Копия за ${tCost} ${TOKEN_EMOJIS[tType]}</button>`;

        card.innerHTML = `
            <div class="char-count" ${isMax ? 'style="background:#ff8f00;"' : ''}>${countText}</div>
            <div class="char-stars">${starsStr}</div>
            <div class="char-name">${char.name}</div>
            <div class="char-income">${currentCharAtk.toFixed(2)} АТК</div>
            <div class="char-hp-stat">${currentCharHp.toFixed(2)} HP</div>
            <div class="char-gold-income">+${currentCharGold.toFixed(2)} зл/с</div>
            ${passiveHTML}
            <div style="margin-top:8px;">${selectHTML}</div>
            ${buyBtnHTML}
        `;
        grid.appendChild(card);
    });

    const tiers = ['common', 'rare', 'epic', 'legendary'];
    tiers.forEach(tier => {
        const subGrid = document.getElementById(`gear-grid-${tier}`);
        if (!subGrid) return;
        subGrid.innerHTML = '';
        
        const filteredGear = player.gearInventory.filter(g => g.rarity === tier && g.equippedTo === null);
        if (filteredGear.length === 0) {
            subGrid.innerHTML = '<div style="font-size:10px; color:var(--text-muted); padding:5px;">Пусто</div>';
            return;
        }
        
        filteredGear.forEach(gear => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'unassigned-item';
            itemDiv.style.borderLeftColor = rarityColors[gear.rarity];
            const price = GEAR_SELL_PRICES[gear.rarity] || 50;
            
            itemDiv.innerHTML = `
                <div>${gear.name} <span style="color:#00e5ff;">(+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)})</span></div>
                <button class="btn-sell-gear" onclick="sellGear('${gear.instanceId}')">+${price} 💰</button>
            `;
            subGrid.appendChild(itemDiv);
        });
    });
}

function showGachaModal(items, type) {
    const modalGrid = document.getElementById('modal-results-grid');
    if (!modalGrid) return;
    modalGrid.innerHTML = '';

    if (type === "char") {
        items.forEach(char => {
            const card = document.createElement('div');
            card.className = `char-card ${char.stars >= 4 ? 'glow-' + char.stars : ''}`;
            card.style.setProperty('--rarity-color', rarityColors[char.stars]);
            card.innerHTML = `
                <div class="char-stars">${"★".repeat(char.stars)}</div>
                <div class="char-name">${char.name}</div>
                <div class="char-income">${char.baseAtk.toFixed(2)} АТК</div>
                <div class="char-hp-stat">${char.baseHp.toFixed(2)} HP</div>
            `;
            modalGrid.appendChild(card);
        });
    } else if (type === "gear") {
        items.forEach(gear => {
            const card = document.createElement('div');
            card.className = `gear-card-anim ${gear.rarity === 'legendary' ? 'glow-legendary' : ''}`;
            card.style.setProperty('--rarity-color', rarityColors[gear.rarity]);
            card.innerHTML = `
                <div style="color: var(--rarity-color); font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 5px;">
                    ● ${gear.rarity}
                </div>
                <div class="gear-title-anim">${gear.name}</div>
                <div class="gear-bonus-anim">+${gear.bonus.toFixed(2)} ${getGearLabel(gear.type)}</div>
            `;
            modalGrid.appendChild(card);
        });
    }
    document.getElementById('gacha-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('gacha-modal').style.display = 'none';
}

loadGame();
spawnEnemy();
updateUI();
renderInventory();