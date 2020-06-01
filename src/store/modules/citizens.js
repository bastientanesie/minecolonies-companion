import Storage from '../../infrastructure/Storage/Citizen';
import Citizen from '../../domain/models/Citizen';
import { exists as jobExists } from '../../domain/jobs';

export default {
    namespaced: true,
    state() {
        return {
            citizens: Storage.fetchAll(),
        };
    },
    getters: {
        findById: (state) => (citizenId) => {
            return state.citizens.find((citizen) => {
                return citizen.id === citizenId;
            });
        },
        sortByName(state) {
            return [...state.citizens].sort((citizenA, citizenB) => {
                return citizenA.name.localeCompare(citizenB.name);
            });
        },
    },
    mutations: {
        create(state, citizen) {
            state.citizens.push(citizen);
            Storage.save(state.citizens);
        },
        update(state, { citizen, payload }) {
            const citizenIndex = state.citizens.indexOf(citizen);

            if (Object.prototype.hasOwnProperty.call(payload, 'name')) {
                citizen.name = payload.name;
            }
            if (Object.prototype.hasOwnProperty.call(payload, 'job')) {
                citizen.job = payload.job;
            }
            if (Object.prototype.hasOwnProperty.call(payload, 'house')) {
                citizen.house = payload.house;
            }
            if (Object.prototype.hasOwnProperty.call(payload, 'skills')) {
                citizen.skills = payload.skills;
            }

            state.citizens[citizenIndex] = citizen;
            Storage.save(state.citizens);
        },
        deleteAtIndex(state, index) {
            state.citizens.splice(index, 1);
            Storage.save(state.citizens);
        },
    },
    actions: {
        add(context, {name, job, house, skills}) {
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

                if (Number.isInteger(house)
                    && context.rootGetters["houses/exists"](house)
                ) {
                    citizen.house = parseInt(house);
                } else {
                    citizen.house = null;
                }

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
                if (Number.isInteger(payload.job)) {
                    payload.job = jobExists(payload.job) ? payload.job : null;
                }
                if (Number.isInteger(payload.house)
                    && context.rootGetters["houses/exists"](payload.house)
                ) {
                    payload.house = parseInt(payload.house);
                }

                context.commit('update', {
                    citizen,
                    payload
                });
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
