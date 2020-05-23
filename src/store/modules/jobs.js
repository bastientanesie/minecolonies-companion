export default {
    namespaced: true,
    state() {
        return {
            selectedCitizen: null,
        };
    },
    mutations: {
        setSelectedCitizen(state, citizen) {
            state.selectedCitizen = citizen;
        },
    },
    actions: {
        selectToAssign(context, citizenId) {
            return new Promise((resolve, reject) => {
                if (citizenId === null) {
                    context.commit('setSelectedCitizen', null);
                    return resolve();
                }

                const citizen = context.rootGetters['citizens/findById'](citizenId);
                if (citizen === null) {
                    return reject(`Could not find citizen in database`);
                }

                context.commit('setSelectedCitizen', citizen);
                return resolve();
            });
        },
    }
}
