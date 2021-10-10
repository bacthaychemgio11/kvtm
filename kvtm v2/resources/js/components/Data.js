export const flowers = [
    {
        id: 1,
        name: 'Lavender',
        cost: 500,
        moneyGain: 200,
        expGain: 50,
        id_bug: 2,
        chanceToSpawnBug: 30,
        timeGrowingStage: 35,
        timeDevelopingStage: 40,
        harvestTimes: 3,
        levelRequire: 3,
        seedImg: '/images/Plants/Seeds/Lavender.png',
        imgDefault: '/images/Plants/Pot_lv3/Pot_1_Empty.png',
        developingImg: '/images/Plants/Pot_lv3/Pot_Lavender_1.png',
        harvestabledImg: '/images/Plants/Pot_lv3/Pot_Lavender_2.png',
        growingImg: '/images/Plants/Pot_lv3/Pot_2_Seeding.PNG',
    },
    {
        id: 2,
        name: 'Apple',
        cost: 200,
        moneyGain: 100,
        expGain: 20,
        id_bug: 1,
        chanceToSpawnBug: 50,
        timeGrowingStage: 15,
        timeDevelopingStage: 20,
        harvestTimes: 3,
        levelRequire: 1,
        seedImg: '/images/Plants/Seeds/Apple.png',
        imgDefault: '/images/Plants/Pot_lv3/Pot_1_Empty.png',
        developingImg: '/images/Plants/Pot_lv3/Pot_Apple_1.png',
        harvestabledImg: '/images/Plants/Pot_lv3/Pot_Apple_2.png',
        growingImg: '/images/Plants/Pot_lv3/Pot_2_Seeding.PNG',
    }
    ,
    {
        id: 3,
        name: 'Rose',
        cost: 100,
        moneyGain: 50,
        expGain: 10,
        id_bug: 1,
        chanceToSpawnBug: 30,
        timeGrowingStage: 10,
        timeDevelopingStage: 15,
        harvestTimes: 3,
        levelRequire: 0,
        seedImg: '/images/Plants/Seeds/Rose.png',
        imgDefault: '/images/Plants/Pot_lv3/Pot_1_Empty.png',
        developingImg: '/images/Plants/Pot_lv3/Pot_Rose_1.png',
        harvestabledImg: '/images/Plants/Pot_lv3/Pot_Rose_2.png',
        growingImg: '/images/Plants/Pot_lv3/Pot_2_Seeding.PNG',
    },
    {
        id: 4,
        name: 'Cotton',
        cost: 400,
        moneyGain: 150,
        expGain: 40,
        id_bug: 2,
        chanceToSpawnBug: 50,
        timeGrowingStage: 25,
        timeDevelopingStage: 30,
        harvestTimes: 3,
        levelRequire: 4,
        seedImg: '/images/Plants/Seeds/Cotton.png',
        imgDefault: '/images/Plants/Pot_lv3/Pot_1_Empty.png',
        developingImg: '/images/Plants/Pot_lv3/Pot_Cotton_1.png',
        harvestabledImg: '/images/Plants/Pot_lv3/Pot_Cotton_2.png',
        growingImg: '/images/Plants/Pot_lv3/Pot_2_Seeding.PNG',
    }
    ,
    {
        id: 5,
        name: 'Snowflake',
        cost: 700,
        moneyGain: 250,
        expGain: 80,
        id_bug: 3,
        chanceToSpawnBug: 30,
        timeGrowingStage: 35,
        timeDevelopingStage: 40,
        harvestTimes: 3,
        levelRequire: 6,
        seedImg: '/images/Plants/Seeds/Snowflake.png',
        imgDefault: '/images/Plants/Pot_lv3/Pot_1_Empty.png',
        developingImg: '/images/Plants/Pot_lv3/Pot_Snowflake_1.png',
        harvestabledImg: '/images/Plants/Pot_lv3/Pot_Snowflake_2.png',
        growingImg: '/images/Plants/Pot_lv3/Pot_2_Seeding.PNG',
    }
    ,
    {
        id: 6,
        name: 'Samba',
        cost: 800,
        moneyGain: 300,
        expGain: 100,
        id_bug: 4,
        chanceToSpawnBug: 30,
        timeGrowingStage: 55,
        timeDevelopingStage: 60,
        harvestTimes: 3,
        levelRequire: 8,
        seedImg: '/images/Plants/Seeds/cocoa.png',
        imgDefault: '/images/Plants/Pot_lv3/Pot_1_Empty.png',
        developingImg: '/images/Plants/Pot_lv3/Pot_Pineapple_1.png',
        harvestabledImg: '/images/Plants/Pot_lv3/Pot_Pineapple_2.png',
        growingImg: '/images/Plants/Pot_lv3/Pot_2_Seeding.PNG',
    }
]

export const bugs = [
    {
        id: 1,
        name: 'Bọ cánh cam',
        bugImg: '/images/Bugs/Bug.png',
    },
    {
        id: 2,
        name: 'Ốc sên',
        bugImg: '/images/Bugs/Snail.png',
    }
    ,
    {
        id: 3,
        name: 'Đom đóm',
        bugImg: '/images/Bugs/Firefly.png',
    }
    ,
    {
        id: 4,
        name: 'Ong',
        bugImg: '/images/Bugs/Bee.png',
    }
]

export const collapseMenu = [
    {
        id: 1,
        name: 'Seeds',
        icon: '/images/Shops/hatgiong-active.png',
        nameStorage: 'seedStorage'
    },
    {
        id: 2,
        name: 'Garden Tools',
        icon: '/images/Shops/nangcap2-active.png'
    },
    {
        id: 3,
        name: 'Storage',
        icon: '/images/Shops/nangcap-active.png'
    }
]

export const seedStorage = [
    {
        id: 0,
        idPlayer: 0,
        data: [
            {
                id: 1,
                idFlower: 1,
                quantity: 0
            },
            {
                id: 2,
                idFlower: 3,
                quantity: 0
            },
            {
                id: 3,
                idFlower: 2,
                quantity: 0
            },
            {
                id: 4,
                idFlower: 4,
                quantity: 0
            },
            {
                id: 5,
                idFlower: 5,
                quantity: 0
            },
            {
                id: 6,
                idFlower: 6,
                quantity: 0
            }
        ]
    },
    {
        id: 1,
        idPlayer: 1,
        data: [{
            id: 1,
            idFlower: 1,
            quantity: 0
        },
        {
            id: 2,
            idFlower: 3,
            quantity: 0
        },
        {
            id: 3,
            idFlower: 2,
            quantity: 10
        },
        {
            id: 4,
            idFlower: 4,
            quantity: 0
        },
        {
            id: 5,
            idFlower: 5,
            quantity: 0
        },
        {
            id: 6,
            idFlower: 6,
            quantity: 0
        }]
    }
]

export const playerData = [
    {
        id: 0,
        name: 'Default',
        money: 0,
        exp: 0,
        level: 0,
        seedStorageId: 0,
        toolsStorageId: 0,
        bugsStorageId: 0,
        gameStatusId: 0,
    },
    {
        id: 1,
        name: 'D.Air',
        money: 2000,
        exp: 0,
        level: 0,
        seedStorageId: 1,
        toolsStorageId: 1,
        bugsStorageId: 1,
        gameStatusId: 1,
    }
]

export const expPerLevel = [
    {
        id: 0,
        expRequired: 30
    },
    {
        id: 1,
        expRequired: 70
    },
    {
        id: 2,
        expRequired: 120
    },
    {
        id: 3,
        expRequired: 250
    },
    {
        id: 4,
        expRequired: 400
    },
    {
        id: 5,
        expRequired: 800
    },
    {
        id: 6,
        expRequired: 1100
    },
    {
        id: 7,
        expRequired: 1500
    },
    {
        id: 8,
        expRequired: 2000
    },
    {
        id: 9,
        expRequired: 2600
    },
    {
        id: 10,
        expRequired: 3300
    },
]

export const tabMenuShop = [
    {
        id: 0,
        type: "Seeds",
        urlActive: '/images/Shops/hatgiong-active.png',
        urlDeactive: '/images/Shops/hat-giong-deactive.png',
        path: "seeds"
    },
    {
        id: 1,
        type: "Tools",
        urlActive: '/images/Shops/nangcap2-active.png',
        urlDeactive: '/images/Shops/gio-deactive.png',
        path: "tools"
    }
]

export const toolsStorage = [
    {
        id: 0,
        idPlayer: 0,
        data: [
            {
                id: 1,
                idTools: 1,
                quantity: 0
            },
            {
                id: 2,
                idTools: 2,
                quantity: 0
            },
        ]
    },
    {
        id: 1,
        idPlayer: 1,
        data: [
            {
                id: 1,
                idTools: 1,
                quantity: 0
            },
            {
                id: 2,
                idTools: 2,
                quantity: 0
            },
        ]
    }
]

export const tools = [
    {
        id: 1,
        name: 'Net',
        cost: 50,
        url: '/images/Tools/ButterflyNet_Yellow.png',
        type: 'NET',
        description: 'Use this item to catch bugs'
    },
    {
        id: 2,
        name: 'Fertilizer',
        cost: 150,
        url: '/images/Tools/phan-bon-1.png',
        type: 'FERTILIZER',
        description: 'Double exp when harvest. Can only be used once during growing stage.'
    }
]

export const bugsStorage = [
    {
        id: 0,
        idPlayer: 0,
        data: [{
            id: 1,
            idBugs: 1,
            quantity: 0,
        },
        {
            id: 2,
            idBugs: 2,
            quantity: 0,
        },
        {
            id: 3,
            idBugs: 3,
            quantity: 0,
        },
        {
            id: 4,
            idBugs: 4,
            quantity: 0,
        },]
    },
    {
        id: 1,
        idPlayer: 1,
        data: [
            {
                id: 1,
                idBugs: 1,
                quantity: 0,
            },
            {
                id: 2,
                idBugs: 2,
                quantity: 0,
            },
            {
                id: 3,
                idBugs: 3,
                quantity: 0,
            },
            {
                id: 4,
                idBugs: 4,
                quantity: 0,
            },
        ]
    },
]

export const gameStatusStorage = [
    {
        id: 0,
        idPlayer: 0,
        top_line0: 490,
        top_line1: 170,
        line0_open: true,
        line1_open: false
    }, {
        id: 1,
        idPlayer: 1,
        top_line0: 490,
        top_line1: 170,
        line0_open: true,
        line1_open: false
    }
]

export const lineRequirement = [
    {
        id: 0,
        level: 0
    }, {
        id: 1,
        level: 3
    }
]