export default class Citizen {
    id;
    name;
    job = null;
    skills = {
        adaptability: 0,
        agility: 0,
        athletics: 0,
        creativity: 0,
        dexterity: 0,
        focus: 0,
        intelligence: 0,
        knowledge: 0,
        mana: 0,
        stamina: 0,
        strength: 0
    };

    constructor(id, name, skills) {
        this.id = id;
        this.name = name;
        this.skills = skills;
    }

    static fromJson(json) {
        // @todo data validation
        const instance = new Citizen(
            json.id,
            json.name,
            json.skills
        );
        if (json.job) {
            instance.job = json.job;
        }
        return instance;
    }

    toJson() {
        return {
            name: this.name,
            job: this.job,
            skills: this.skills
        };
    }
}
