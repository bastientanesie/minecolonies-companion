const SKILLS = Object.freeze([
    {
        id: 'athletics',
        name: 'Athletics',
    },
    {
        id: 'dexterity',
        name: 'Dexterity',
    },
    {
        id: 'strength',
        name: 'Strength',
    },
    {
        id: 'agility',
        name: 'Agility',
    },
    {
        id: 'stamina',
        name: 'Stamina',
    },
    {
        id: 'mana',
        name: 'Mana',
    },
    {
        id: 'adaptability',
        name: 'Adaptability',
    },
    {
        id: 'focus',
        name: 'Focus',
    },
    {
        id: 'creativity',
        name: 'Creativity',
    },
    {
        id: 'knowledge',
        name: 'Knowledge',
    },
    {
        id: 'intelligence',
        name: 'Intelligence',
    },
]);

export default SKILLS;

export function findById(skillId) {
    return SKILLS.reduce((result, skill) => {
        return (skill.id === skillId) ? skill : result;
    }, null);
}

export function exists(skillId) {
    return findById(skillId) !== null;
}
