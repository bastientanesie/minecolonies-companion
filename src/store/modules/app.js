export default {
    namespaced: true,
    state() {
        return {
            editedCitizen: null
        };
    },
    mutations: {
        selectCitizenToEdit(state, citizen) {
            state.editedCitizen = citizen;
        }
    },
    actions: {
        showEditCitizenForm(context, citizenId) {
            return new Promise((resolve, reject) => {
                const citizen = context.rootState.citizens.reduce((result, citizen) => {
                    return (citizen.id === citizenId) ? citizen : result;
                }, null);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }
                context.commit('selectCitizenToEdit', citizen);
                return resolve();
            });
        },
        hideEditCitizenForm(context) {
            return new Promise((resolve) => {
                context.commit('selectCitizenToEdit', null);
                return resolve();
            });
        }
    }
};
