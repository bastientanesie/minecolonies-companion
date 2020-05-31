import Storage from '../../infrastructure/Storage/House';
import House from '../../domain/models/House';

export default {
    namespaced: true,
    state() {
        return {
            houses: Storage.fetchAll()
        };
    },
    actions: {
        add(context, {name, beds}) {
            return new Promise((resolve) => {
                // filtering & sanitizing
                beds = parseInt(beds);
                name = name.trim();

                const citizen = new House(
                    Storage.uid++,
                    name,
                    beds
                );

                context.commit('create', citizen);
                return resolve();
            });
        },
    },
    mutations: {
        create(state, citizen) {
            state.houses.push(citizen);
            Storage.save(state.houses);
        },
    },
};
