import Storage from '../../infrastructure/Storage/Citizen';
import Citizen from '../../domain/models/Citizen';
import { exists as jobExists } from '../../domain/jobs';

export default {
    namespaced: true,
    state() {
        return {
            citizens: Storage.fetchAll(),
            editedCitizen: null
        };
    },
    getters: {
        findById: (state) => (citizenId) => {
            return state.citizens.find((citizen) => {
                return citizen.id === citizenId;
            });
        }
    },
    mutations: {
        create(state, citizen) {
            state.citizens.push(citizen);
            Storage.save(state.citizens);
        },
        update(state, { citizen, payload }) {
            const citizenIndex = state.citizens.indexOf(citizen);

            if (payload.name) {
                citizen.name = payload.name;
            }
            if (payload.job) {
                citizen.job = payload.job;
            }
            if (payload.skills) {
                citizen.skills = payload.skills;
            }

            state.citizens[citizenIndex] = citizen;
            Storage.save(state.citizens);
        },
        deleteAtIndex(state, index) {
            state.citizens.splice(index, 1);
            Storage.save(state.citizens);
        },
        setEditedCitizen(state, citizen) {
            state.editedCitizen = citizen;
        }
    },
    actions: {
        add(context, {name, job, skills}) {
            return new Promise((resolve) => {
                // filtering & sanitizing
                for (const key in skills) {
                    if (! Object.prototype.hasOwnProperty.call(skills, key)) {
                        continue;
                    }
                    skills[key] = parseInt(skills[key]);
                }

                const citizen = new Citizen(
                    Storage.uid++,
                    name,
                    skills
                );

                citizen.job = (job && jobExists(job)) ? job : null;

                context.commit('create', citizen);
                return resolve();
            });
        },
        remove(context, citizenId) {
            return new Promise((resolve, reject) => {
                const citizen = context.getters.findById(citizenId);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }

                const citizenIndex = context.state.citizens.indexOf(citizen);
                context.commit('deleteAtIndex', citizenIndex);
                return resolve();
            });
        },
        edit(context, {citizenId, ...payload}) {
            return new Promise((resolve, reject) => {
                const citizen = context.getters.findById(citizenId);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }

                // filtering & sanitizing
                if (payload.name) {
                    payload.name = payload.name.trim();
                }
                if (payload.skills) {
                    for (const key in payload.skills) {
                        if (!Object.prototype.hasOwnProperty.call(payload.skills, key)) {
                            continue;
                        }
                        payload.skills[key] = parseInt(payload.skills[key]);
                    }
                }
                if (payload.job) {
                    payload.job = jobExists(payload.job) ? payload.job : null;
                }

                context.commit('update', {
                    citizen,
                    payload
                });
                return resolve();
            });
        },
        selectToEdit(context, citizenId) {
            return new Promise((resolve, reject) => {
                if (citizenId === null) {
                    context.commit('setEditedCitizen', null);
                    return resolve();
                }

                const citizen = context.getters.findById(citizenId);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }

                context.commit('setEditedCitizen', citizen);
                return resolve();
            });
        },
        assignJob(context, {citizenId, jobId}) {
            return new Promise((resolve, reject) => {
                const citizen = context.getters.findById(citizenId);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }
                if (! jobExists(jobId)) {
                    return reject(`Could not find job "${jobId}"`);
                }

                context.commit('update', {
                    citizen,
                    payload: { job: jobId }
                });
                return resolve();
            });
        },
    }
};
