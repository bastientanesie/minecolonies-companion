import Vue from 'vue'
import Vuex from 'vuex'
import Citizen from '../domain/models/Citizen';
import { JOBS } from '../domain/jobs';
import Storage from '../infrastructure/Storage';
import app from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        app
    },
    state() {
        return {
            citizens: Storage.fetchAll()
        };
    },
    mutations: {
        addCitizen(state, citizen) {
            state.citizens.push(citizen);
            Storage.save(state.citizens);
        },
        editCitizen(state, { citizen, payload }) {
            const citizenIndex = state.citizens.indexOf(citizen);

            citizen.name = payload.name;
            citizen.job = payload.job;
            citizen.skills = payload.skills;

            state.citizens[citizenIndex] = citizen;
            Storage.save(state.citizens);
        },
        removeCitizenAtIndex(state, index) {
            state.citizens.splice(index, 1);
            Storage.save(state.citizens);
        }
    },
    actions: {
        addCitizen(context, {name, job, skills}) {
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
                context.commit('addCitizen', citizen);
                return resolve();
            });
        },
        removeCitizen(context, citizenId) {
            return new Promise((resolve, reject) => {
                const citizen = context.state.citizens.reduce((result, citizen) => {
                    return (citizen.id === citizenId) ? citizen : result;
                }, null);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }

                const citizenIndex = context.state.citizens.indexOf(citizen);
                context.commit('removeCitizenAtIndex', citizenIndex);
                return resolve();
            });
        },
        editCitizen(context, {citizenId, ...payload}) {
            return new Promise((resolve, reject) => {
                const citizen = context.state.citizens.reduce((result, citizen) => {
                    return (citizen.id === citizenId) ? citizen : result;
                }, null);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }

                context.commit('editCitizen', {
                    citizen,
                    payload
                });
                return resolve();
            });
        }
    }
});
