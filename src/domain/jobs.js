const JOBS = Object.freeze([
    {
        id: 'baker',
        name: 'Baker',
        skills: {
            primary: ['knowledge'],
            secondary: ['dexterity']
        }
    },
    {
        id: 'blacksmith',
        name: 'Blacksmith',
        skills: {
            primary: ['strength'],
            secondary: ['focus']
        }
    },
    {
        id: 'builder',
        name: 'Builder',
        skills: {
            primary: ['adaptability'],
            secondary: ['athletics']
        }
    },
    {
        id: 'chickenHerder',
        name: 'Chicken Herder',
        skills: {
            primary: ['adaptability'],
            secondary: ['agility']
        }
    },
    {
        id: 'composter',
        name: 'Composter',
        skills: {
            primary: ['stamina'],
            secondary: ['athletics']
        }
    },
    {
        id: 'cook',
        name: 'Cook',
        skills: {
            primary: ['adaptability'],
            secondary: ['knowledge']
        }
    },
    {
        id: 'cowboy',
        name: 'Cowboy',
        skills: {
            primary: ['athletics'],
            secondary: ['stamina']
        }
    },
    {
        id: 'crusher',
        name: 'Crusher',
        skills: {
            primary: ['stamina'],
            secondary: ['strength']
        }
    },
    {
        id: 'deliveryman',
        name: 'Deliveryman',
        skills: {
            primary: ['agility'],
            secondary: ['adaptability']
        }
    },
    {
        id: 'enchanter',
        name: 'Enchanter',
        skills: {
            primary: ['mana'],
            secondary: ['knowledge']
        }
    },
    {
        id: 'farmer',
        name: 'Farmer',
        skills: {
            primary: ['stamina'],
            secondary: ['athletics']
        }
    },
    {
        id: 'fisherman',
        name: 'Fisherman',
        skills: {
            primary: ['focus'],
            secondary: ['agility']
        }
    },
    {
        id: 'florist',
        name: 'Florist',
        skills: {
            primary: ['dexterity'],
            secondary: ['agility']
        }
    },
    {
        id: 'guard',
        name: 'Guard',
        skills: {
            primary: ['adaptability'],
            secondary: ['stamina']
        }
    },
    {
        id: 'healer',
        name: 'Healer',
        skills: {
            primary: ['mana'],
            secondary: ['knowledge']
        }
    },
    {
        id: 'libraryStudent',
        name: 'Library Student',
        skills: {
            primary: ['intelligence'],
            secondary: []
        }
    },
    {
        id: 'lumberjack',
        name: 'Lumberjack',
        skills: {
            primary: ['strength'],
            secondary: ['focus']
        }
    },
    {
        id: 'miller',
        name: 'Woodworker (Miller)',
        skills: {
            primary: ['knowledge'],
            secondary: ['dexterity']
        }
    },
    {
        id: 'miner',
        name: 'Miner',
        skills: {
            primary: ['strength'],
            secondary: ['stamina']
        }
    },
    {
        id: 'ranger',
        name: 'Ranger',
        skills: {
            primary: ['agility'],
            secondary: ['adaptability']
        }
    },
    {
        id: 'shepherd',
        name: 'Shepherd',
        skills: {
            primary: ['focus'],
            secondary: ['strength']
        }
    },
    {
        id: 'Sifter',
        name: 'Sifter',
        skills: {
            primary: ['focus'],
            secondary: ['strength']
        }
    },
    {
        id: 'smelter',
        name: 'Smelter',
        skills: {
            primary: ['athletics'],
            secondary: ['strength']
        }
    },
    {
        id: 'stonemason',
        name: 'StoneMason',
        skills: {
            primary: ['creativity'],
            secondary: ['dexterity']
        }
    },
    {
        id: 'stoneSmelter',
        name: 'Stone Smelter',
        skills: {
            primary: ['athletics'],
            secondary: ['dexterity']
        }
    },
    {
        id: 'swineHerder',
        name: 'Swine Herder',
        skills: {
            primary: ['strength'],
            secondary: ['athletics']
        }
    },
    {
        id: 'universityStudent',
        name: 'University Student',
        skills: {
            primary: ['knowledge'],
            secondary: ['mana']
        }
    }
]);

export default JOBS;

export function findById(jobId) {
    return JOBS.reduce((result, job) => {
        return (job.id === jobId) ? job : result;
    }, null);
}

export function exists(jobId) {
    return findById(jobId) !== null;
}
