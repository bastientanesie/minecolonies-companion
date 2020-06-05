export default class Citizen {
    id;
    name;
    job = null;
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
        if (Object.prototype.hasOwnProperty.call(json, 'job')
            && json.job !== null
        ) {
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
