// 1. Идеально сбалансированная база данных персонажей (1★=0.1, 2★=0.2, 3★=0.3, 4★=0.5, 5★=1.0 БМ)
const CHARACTER_DATABASE = {
    1: [
        { id: "slime", name: "Квантовый Слайм", stars: 1, baseIncome: 0.09 },
        { id: "trashcan", name: "Космический Бак", stars: 1, baseIncome: 0.10 },
        { id: "goblin", name: "Гоблин-Техник", stars: 1, baseIncome: 0.11 }
    ],
    2: [
        { id: "raptor", name: "Кибер-Раптор", stars: 2, baseIncome: 0.17 },
        { id: "boar", name: "Модифицированный Вепрь", stars: 2, baseIncome: 0.20 },
        { id: "bunny", name: "Заводной Кролик", stars: 2, baseIncome: 0.23 }
    ],
    3: [
        { id: "knight", name: "Стальной Рыцарь", stars: 3, baseIncome: 0.26 },
        { id: "drone", name: "Дрон-Разведчик", stars: 3, baseIncome: 0.30 },
        { id: "mage", name: "Хрономаг", stars: 3, baseIncome: 0.34 }
    ],
    4: [
        { id: "t_rex", name: "Меха-Тираннозавр", stars: 4, baseIncome: 0.43, passive: "double_gold", passiveDesc: "×2 БМ от себя" },
        { id: "cyborg", name: "Киборг-Ищейка", stars: 4, baseIncome: 0.50, passive: "speed_up", passiveDesc: "Стабильный буст" }
    ],
    5: [
        { id: "dragon", name: "Сингулярный Дракон", stars: 5, baseIncome: 0.90, passive: "god_blessing", passiveDesc: "+10% ко всей БМ отряда" },
        { id: "kaneki_android", name: "Андроид «КЕН»", stars: 5, baseIncome: 1.10, passive: "overdrive", passiveDesc: "+15% ко всей БМ отряда" }
    ]
};

// Процентные абилки финального прорыва при достижении 10 копий (MAX)
const MAX_UPGRADE_PASSIVES = {
    1: { desc: "Прорыв I: +20% БМ персонажа", mult: 0.20 },
    2: { desc: "Прорыв II: +30% БМ персонажа", mult: 0.30 },
    3: { desc: "Прорыв III: +40% БМ персонажа", mult: 0.40 },
    4: { desc: "Прорыв IV: +50% БМ персонажа", mult: 0.50 },
    5: { desc: "Прорыв V: +60% БМ персонажа", mult: 0.60 }
};

// 2. Пулы артефактов
const GEAR_POOLS = {
    common: [
        { id: "gear_c1", name: "Модернизированный Чип", bonus: 0.15 },
        { id: "gear_c2", name: "Лазерный Прицел MK-1", bonus: 0.25 }
    ],
    rare: [
        { id: "gear_r1", name: "Импульсный Резонатор", bonus: 0.80 },
        { id: "gear_r2", name: "Высокочастотный Клинок", bonus: 1.20 }
    ],
    epic: [
        { id: "gear_e1", name: "Гравитационный Двигатель", bonus: 4.50 },
        { id: "gear_e2", name: "Тяжелая Плазменная Пушка", bonus: 6.00 }
    ],
    legendary: [
        { id: "gear_l1", name: "Куинке «IXA» (Реплика)", bonus: 25.00 },
        { id: "gear_l2", name: "Ядро Сингулярности", bonus: 40.00 }
    ]
};

const GEAR_GACHA_COSTS = { common: 5, rare: 3, epic: 2, legendary: 1 };
const DROP_RATES = { 5: 0.6, 4: 5.4, 3: 15, 2: 39, 1: 40 };

const rarityColors = { 
    1: '#757575', 2: '#388e3c', 3: '#0288d1', 4: '#a124c7', 5: '#ff8f00',
    'common': '#4caf50', 'rare': '#2196f3', 'epic': '#e040fb', 'legendary': '#ff8f00' // Сделан золотым
};

let player = {
    gold: 1000,
    tokens: { common: 0, rare: 0, epic: 0, legendary: 0 },
    ownedCharacters: [],
    gearInventory: []
};

let gearCounter = 0;

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
    const cost = amount * 100;
    if (player.gold < cost) {
        alert("Недостаточно Кредитов!");
        return;
    }

    player.gold -= cost;
    let results = [];

    for (let i = 0; i < amount; i++) {
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

    document.getElementById('modal-title').innerText = "Результаты Квантового Сдвига";
    showGachaModal(results, "char");
    renderInventory();
    updateUI();
}

// Улучшенная ковка артефактов с поддержкой Мультипризыва (MAX) и лимитом в 10 штук каждой редкости
function rollGear(tier, mode) {
    const costPerRoll = GEAR_GACHA_COSTS[tier];
    const currentGearCount = player.gearInventory.filter(g => g.rarity === tier).length;
    const remainingSpace = 10 - currentGearCount;

    if (remainingSpace <= 0) {
        alert(`Достигнут лимит артефактов редкости ${tier.toUpperCase()} (макс. 10 шт.)!`);
        return;
    }

    let rollsToPerform = 1;
    if (mode === 'max') {
        const maxAffordable = Math.floor(player.tokens[tier] / costPerRoll);
        rollsToPerform = Math.min(maxAffordable, remainingSpace);
    }

    if (rollsToPerform <= 0 || player.tokens[tier] < (rollsToPerform * costPerRoll)) {
        alert("Недостаточно Жетонов для ковки снаряжения!");
        return;
    }

    player.tokens[tier] -= (rollsToPerform * costPerRoll);
    let rolledItems = [];

    for (let i = 0; i < rollsToPerform; i++) {
        const pool = GEAR_POOLS[tier];
        const rolledItem = pool[Math.floor(Math.random() * pool.length)];

        gearCounter++;
        const newGearInstance = {
            instanceId: "gear_inst_" + gearCounter,
            id: rolledItem.id,
            name: rolledItem.name,
            bonus: rolledItem.bonus,
            rarity: tier,
            equippedTo: null
        };

        player.gearInventory.push(newGearInstance);
        rolledItems.push(newGearInstance);
    }

    document.getElementById('modal-title').innerText = `Кузня: Синтез завершен (x${rollsToPerform})`;
    showGachaModal(rolledItems, "gear");
    
    updateUI();
    renderInventory();
}

// Расчёт глобальной боевой мощи (БМ)
function calculateTotalBM() {
    let total = 0;
    let globalMultiplier = 1;

    player.ownedCharacters.forEach(char => {
        // Базовая прогрессия БМ от копий
        let charBM = char.baseIncome * (1 + (char.count - 1) * 0.5);
        
        // Плоский бонус надетого артефакта
        const equipped = player.gearInventory.find(g => g.equippedTo === char.id);
        if (equipped) {
            charBM += equipped.bonus;
        }
        
        // Начисление дополнительной абилки Прорыва при MAX прокачке
        if (char.count >= 10) {
            const extraBonus = MAX_UPGRADE_PASSIVES[char.stars].mult;
            charBM *= (1 + extraBonus);
        }
        
        // Встроенные пассивные таланты героев
        if (char.passive === "double_gold") charBM *= 2;
        if (char.passive === "god_blessing") globalMultiplier += 0.10;
        if (char.passive === "overdrive") globalMultiplier += 0.15;

        total += charBM;
    });

    return total;
}

function changeEquipment(charId, selectElement) {
    const selectedInstanceId = selectElement.value;

    player.gearInventory.forEach(g => {
        if (g.equippedTo === charId) g.equippedTo = null;
    });

    if (selectedInstanceId !== "none") {
        const gear = player.gearInventory.find(g => g.instanceId === selectedInstanceId);
        if (gear) gear.equippedTo = charId;
    }

    renderInventory();
    updateUI();
}

// Ежесекундное начисление валюты на базе БМ
setInterval(() => {
    player.gold += calculateTotalBM();
    updateUI();
}, 1000);

function updateUI() {
    document.getElementById('gold-display').innerText = Math.floor(player.gold).toLocaleString('ru-RU');
    document.getElementById('income-display').innerText = calculateTotalBM().toFixed(2) + " БМ";
    
    document.getElementById('tok-c').innerText = player.tokens.common;
    document.getElementById('tok-r').innerText = player.tokens.rare;
    document.getElementById('tok-e').innerText = player.tokens.epic;
    document.getElementById('tok-l').innerText = player.tokens.legendary;
    
    document.getElementById('unique-display').innerText = player.ownedCharacters.length;

    const countByRarity = (r) => player.gearInventory.filter(g => g.rarity === r).length;
    document.getElementById('warehouse-summary').innerText = 
        `Склад артефактов: C: ${countByRarity('common')}/10 | R: ${countByRarity('rare')}/10 | E: ${countByRarity('epic')}/10 | L: ${countByRarity('legendary')}/10`;
}

function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = '';

    player.ownedCharacters.sort((a, b) => b.stars - a.stars);

    player.ownedCharacters.forEach(char => {
        const card = document.createElement('div');
        card.className = `char-card ${char.stars >= 4 ? 'glow-' + char.stars : ''}`;
        card.style.setProperty('--rarity-color', rarityColors[char.stars]);

        let starsStr = "★".repeat(char.stars);
        let passiveHTML = char.passiveDesc ? `<div class="char-passive">${char.passiveDesc}</div>` : '';
        
        // Если MAX копий, дописываем абилку Прорыва в карточку
        if (char.count >= 10) {
            passiveHTML += `<div class="char-passive awaken">${MAX_UPGRADE_PASSIVES[char.stars].desc}</div>`;
        }
        
        let currentCharBM = char.baseIncome * (1 + (char.count - 1) * 0.5);
        const currentlyEquipped = player.gearInventory.find(g => g.equippedTo === char.id);
        if (currentlyEquipped) currentCharBM += currentlyEquipped.bonus;
        if (char.count >= 10) currentCharBM *= (1 + MAX_UPGRADE_PASSIVES[char.stars].mult);
        if (char.passive === "double_gold") currentCharBM *= 2;

        let isMax = char.count >= 10;
        let countText = isMax ? "MAX" : `x${char.count}`;
        let badgeStyle = isMax ? 'style="background: #ff8f00;"' : '';

        // Выпадающий список экипировки с подсветкой редкостей
        let selectHTML = `<select class="gear-selector" onchange="changeEquipment('${char.id}', this)">`;
        selectHTML += `<option value="none" ${!currentlyEquipped ? 'selected' : ''}>[Без артефакта]</option>`;
        
        player.gearInventory.forEach(gear => {
            if (gear.equippedTo === null || gear.equippedTo === char.id) {
                const isSelected = gear.equippedTo === char.id ? 'selected' : '';
                const hexColor = rarityColors[gear.rarity];
                // Маркер "●" и инлайновый стиль гарантируют видимость цвета во всех браузерах
                selectHTML += `<option value="${gear.instanceId}" style="color: ${hexColor}; font-weight: bold;" ${isSelected}>
                    ● [${gear.rarity.toUpperCase()}] ${gear.name} (+${gear.bonus})
                </option>`;
            }
        });
        selectHTML += `</select>`;

        card.innerHTML = `
            <div class="char-count" ${badgeStyle}>${countText}</div>
            <div class="char-stars">${starsStr}</div>
            <div class="char-name">${char.name}</div>
            <div class="char-income">${currentCharBM.toFixed(2)} БМ</div>
            ${passiveHTML}
            <div style="margin-top:8px;">${selectHTML}</div>
        `;
        grid.appendChild(card);
    });
}

function showGachaModal(items, type) {
    const modalGrid = document.getElementById('modal-results-grid');
    modalGrid.innerHTML = '';

    if (type === "char") {
        items.forEach(char => {
            const card = document.createElement('div');
            card.className = `char-card ${char.stars >= 4 ? 'glow-' + char.stars : ''}`;
            card.style.setProperty('--rarity-color', rarityColors[char.stars]);
            card.innerHTML = `
                <div class="char-stars">${"★".repeat(char.stars)}</div>
                <div class="char-name">${char.name}</div>
                <div class="char-income">+${char.baseIncome.toFixed(2)} БМ</div>
            `;
            modalGrid.appendChild(card);
        });
    } else if (type === "gear") {
        items.forEach(gear => {
            const card = document.createElement('div');
            const isLegendary = gear.rarity === 'legendary' ? 'glow-legendary' : '';
            card.className = `gear-card-anim ${isLegendary}`;
            card.style.setProperty('--rarity-color', rarityColors[gear.rarity]);
            card.innerHTML = `
                <div style="color: var(--rarity-color); font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 5px;">
                    ● ${gear.rarity} артефакт
                </div>
                <div class="gear-title-anim">${gear.name}</div>
                <div class="gear-bonus-anim">+${gear.bonus.toFixed(2)} к базовой БМ</div>
            `;
            modalGrid.appendChild(card);
        });
    }

    document.getElementById('gacha-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('gacha-modal').style.display = 'none';
}

updateUI();