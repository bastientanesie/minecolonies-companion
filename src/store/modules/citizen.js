import Storage from '../../infrastructure/Storage';
import Citizen from '../../domain/models/Citizen';
import { JOBS } from '../../domain/jobs';

export default {
    namespaced: true,
    state() {
        return {
            citizens: Storage.fetchAll(),
            editedCitizen: null
        };
    },
    mutations: {
        create(state, citizen) {
            if (! citizen.job) {
                citizen.job = null;
            }
            state.citizens.push(citizen);
            Storage.save(state.citizens);
        },
        update(state, { citizen, payload }) {
            const citizenIndex = state.citizens.indexOf(citizen);

            citizen.name = payload.name;
            citizen.job = payload.job || null;
            citizen.skills = payload.skills;

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
                const citizen = new Citizen(
                    Storage.uid++,
                    name,
                    skills
                );
                if (job
                    && Object.prototype.hasOwnProperty.call(JOBS, job)
                ) {
                    citizen.job = JOBS[job].name;
                }
                context.commit('create', citizen);
                return resolve();
            });
        },
        remove(context, citizenId) {
            return new Promise((resolve, reject) => {
                const citizen = context.state.citizens.reduce((result, citizen) => {
                    return (citizen.id === citizenId) ? citizen : result;
                }, null);
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
                const citizen = context.state.citizens.reduce((result, citizen) => {
                    return (citizen.id === citizenId) ? citizen : result;
                }, null);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
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
                const citizen = context.state.citizens.reduce((result, citizen) => {
                    return (citizen.id === citizenId) ? citizen : result;
                }, null);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }
                context.commit('setEditedCitizen', citizen);
                return resolve();
            });
        }
    }
};
