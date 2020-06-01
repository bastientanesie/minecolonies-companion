export default class Citizen {
    id;
    name;
    job = null;
    house = null;
    skills = {};

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
        if (json.job !== null) {
            instance.job = json.job;
        }
        if (json.house !== null) {
            instance.house = parseInt(json.house);
        }
        return instance;
    }

    toJson() {
        return {
            name: this.name,
            job: this.job,
            house: this.house,
            skills: this.skills
        };
    }
}
