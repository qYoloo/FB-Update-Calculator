// data.js
const UPDATE_HISTORY = [
    { 
        date: "26/11/2022", 
        name: "Release", 
        fruits: ["Gravity (L)", "Quake (L)"], 
        notes: "Official Game Launch",
        isHalfUpdate: false 
    },
    { 
        date: "05/12/2022", 
        name: "Update 1", 
        fruits: ["Magma (E)"], 
        notes: "Console Support; Bounty LB",
        isHalfUpdate: false 
    },
    { 
        date: "19/12/2022", 
        name: "Update 2", 
        fruits: ["Phoenix (L)"], 
        notes: "First Boss (Marco)",
        isHalfUpdate: false 
    },
    { 
        date: "27/12/2022", 
        name: "Update 3", 
        fruits: ["Paw (E)"], 
        notes: "-",
        isHalfUpdate: false 
    },
    { 
        date: "17/01/2023", 
        name: "Update 4", 
        fruits: ["TSR (L)"], 
        notes: "-",
        isHalfUpdate: false 
    },
    { 
        date: "11/02/2023", 
        name: "Update 5", 
        fruits: ["Dragon (M)"], 
        notes: "Mythic Rarity; Wano Map; Kaido Boss; AFK World; Level Cap Raised to 300",
        isHalfUpdate: false 
    },
    { 
        date: "10/03/2023", 
        name: "Update 6", 
        fruits: ["Dough (M)"], 
        notes: "Perm 2x Luck Added",
        isHalfUpdate: false 
    },
    { 
        date: "09/04/2023", 
        name: "Update 7", 
        fruits: ["Goro (M)", "Gas (U)", "Falcon (U)"], 
        notes: "-",
        isHalfUpdate: false 
    },
    { 
        date: "13/05/2023", 
        name: "Update 8", 
        fruits: ["Leopard (M)", "Magnet (L)"], 
        notes: "Anti-Spinning Dupe System",
        isHalfUpdate: false 
    },
    { 
        date: "17/06/2023", 
        name: "Update 9", 
        fruits: ["Ope (M)", "String (E)"], 
        notes: "Pity System Revamped",
        isHalfUpdate: false 
    },
    { 
        date: "24/07/2023", 
        name: "Update 10", 
        fruits: ["Venom (M)"], 
        notes: "New Tournament Gamemode",
        isHalfUpdate: false 
    },
    { 
        date: "09/09/2023", 
        name: "Update 11", 
        fruits: ["Nika (M)"], 
        notes: "First Fruit Awakening",
        isHalfUpdate: false 
    },
    { 
        date: "30/10/2023", 
        name: "Update 12", 
        fruits: ["Dragon V2 (M)"], 
        notes: "Fast Spin Gamepass",
        isHalfUpdate: false 
    },
    { 
        date: "08/12/2023", 
        name: "Update 13", 
        fruits: ["Ice V2 (L)", "Magma V2 (L)"], 
        notes: "-",
        isHalfUpdate: false 
    },
    { 
        date: "02/02/2024", 
        name: "Update 14", 
        fruits: ["Soul (M)"], 
        notes: "New Map (Whole Cake); Big Mom Boss",
        isHalfUpdate: false 
    },
    { 
        date: "24/02/2024", 
        name: "Update 14.5", 
        fruits: ["Love (E)"], 
        notes: "Perm 2x Exp; New Slot",
        isHalfUpdate: true 
    },
    { 
        date: "07/04/2024", 
        name: "Update 15", 
        fruits: ["DXQ (M)"], 
        notes: "Level Protection System; New Slots",
        isHalfUpdate: false 
    },
    { 
        date: "18/05/2024", 
        name: "Update 16", 
        fruits: ["Light V2 (L)"], 
        notes: "Ranked Mode Release",
        isHalfUpdate: false 
    },
    { 
        date: "02/07/2024", 
        name: "Update 17", 
        fruits: ["Flame V2 (L)", "Ash (R)"], 
        notes: "-",
        isHalfUpdate: false 
    },
    { 
        date: "20/09/2024", 
        name: "Update 18", 
        fruits: ["Okuchi (M)"], 
        notes: "Leveling Revamp; AFK World Buff; Venom Downgrade; Global Bounty Reset",
        isHalfUpdate: false 
    },
    { 
        date: "05/12/2024", 
        name: "Update 19", 
        fruits: ["Dough V2 (M)"], 
        notes: "Mirror World Map; Katakuri Boss; Auto Spin; Chest VFX Revamp; Dough Downgrade",
        isHalfUpdate: false 
    },
    { 
        date: "17/03/2025", 
        name: "Update 20", 
        fruits: ["Leopard V2 (M)", "Snow (E)"], 
        notes: "Rebirth System; Leopard Downgrade",
        isHalfUpdate: false 
    },
    { 
        date: "01/08/2025", 
        name: "Update 21", 
        fruits: ["Garp (M)"], 
        notes: "Server List Added; EXP Buffs",
        isHalfUpdate: false 
    },
    { 
        date: "19/11/2025", 
        name: "Update 22", 
        fruits: ["Ope V2 (M)"], 
        notes: "Current Latest Update",
        isHalfUpdate: false 
    }
];

// Calculation Helpers
const parseDate = (str) => {
    const [d, m, y] = str.split('/');
    return new Date(y, m - 1, d);
};

const lastUpdateData = UPDATE_HISTORY[UPDATE_HISTORY.length - 1];
const lastUpdateDate = parseDate(lastUpdateData.date);
const today = new Date();
const daysSinceLast = Math.floor((today - lastUpdateDate) / (1000 * 60 * 60 * 24));