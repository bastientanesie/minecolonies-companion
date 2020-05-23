export default class CitizenJob {
    id;
    name;
    primarySkill;
    secondarySkill;
    primarySkillLevel;
    secondarySkillLevel;

    constructor(id, name, primarySkill, secondarySkill) {
        this.id = id;
        this.name = name;
        this.primarySkill = primarySkill;
        this.secondarySkill = secondarySkill;
    }

    static fromJob(job) {
        return new CitizenJob(
            job.id,
            job.name,
            job.skills.primary,
            job.skills.secondary,
        );
    }

    static compareByScore(jobA, jobB) {
        if (jobA.getScore() === jobB.getScore()) {
            return 0;
        }
        return jobA.getScore() < jobB.getScore();
    }

    setCitizenLevels(citizenSkills) {
        if (! Object.prototype.hasOwnProperty.call(citizenSkills, this.primarySkill)) {
            throw new Error(`Citizen skills object does not contain required skill: ${this.primarySkill}`);
        }
        this.primarySkillLevel = citizenSkills[this.primarySkill];

        if (this.secondarySkill) {
            if (! Object.prototype.hasOwnProperty.call(citizenSkills, this.secondarySkill)) {
                throw new Error(`Citizen skills object does not contain required skill: ${this.secondarySkill}`);
            }
            this.secondarySkillLevel = citizenSkills[this.secondarySkill];
        }
    }

    getScore() {
        if (this.secondarySkill) {
            return (parseInt(this.primarySkillLevel) * 2) + parseInt(this.secondarySkillLevel);
        }
        return parseInt(this.primarySkillLevel) * 2;
    }
}
