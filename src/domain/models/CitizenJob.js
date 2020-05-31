export default class CitizenJob {
    id;
    name;
    primarySkills;
    secondarySkills;
    primarySkillLevels;
    secondarySkillLevels;

    constructor(id, name, primarySkills, secondarySkills) {
        this.id = id;
        this.name = name;
        this.primarySkills = primarySkills;
        this.secondarySkills = secondarySkills;
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
        this.primarySkillLevels = {};

        this.primarySkills.forEach((skill) => {
            if (! Object.prototype.hasOwnProperty.call(citizenSkills, skill)) {
                throw new Error(`Citizen skills object does not contain required skill: ${skill}`);
            }

            this.primarySkillLevels[skill] = citizenSkills[skill];
        });

        if (this.secondarySkills) {
            this.secondarySkillLevels = {};

            this.secondarySkills.forEach((skill) => {
                if (! Object.prototype.hasOwnProperty.call(citizenSkills, skill)) {
                    throw new Error(`Citizen skills object does not contain required skill: ${skill}`);
                }

                this.secondarySkillLevels[skill] = citizenSkills[skill];
            });
        }
    }

    getScore() {
        let score = 0;

        for (const key in this.primarySkillLevels) {
            if (! Object.prototype.hasOwnProperty.call(this.primarySkillLevels, key)) {
                continue;
            }
            score += this.primarySkillLevels[key] * 2;
        }

        for (const key in this.secondarySkillLevels) {
            if (! Object.prototype.hasOwnProperty.call(this.secondarySkillLevels, key)) {
                continue;
            }
            score += parseInt(this.secondarySkillLevels[key]);
        }

        return score;
    }
}
