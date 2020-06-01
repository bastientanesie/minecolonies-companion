import Storage from '../../infrastructure/Storage/House';
import House from '../../domain/models/House';

export default {
    namespaced: true,
    state() {
        return {
            houses: Storage.fetchAll()
        };
    },
    getters: {
        findById: (state) => (houseId) => {
            return state.houses.find((house) => {
                return house.id === houseId;
            });
        },
        exists: (stat, getters) => (houseId) => {
            return getters.findById(houseId) !== null;
        },
        getSorted(state) {
            return [...state.houses].sort((houseA, houseB) => {
                return houseA.name.localeCompare(houseB.name);
            });
        },
    },
    actions: {
        add(context, {name, beds}) {
            return new Promise((resolve) => {
                // filtering & sanitizing
                beds = parseInt(beds);
                name = name.trim();

                const house = new House(
                    Storage.uid++,
                    name,
                    beds
                );

                context.commit('create', house);
                return resolve();
            });
        },
        edit(context, {houseId, ...payload}) {
            return new Promise((resolve, reject) => {
                const house = context.getters.findById(houseId);
                if (house === null) {
                    return reject(`Could not find house in database`);
                }

                // filtering & sanitizing
                if (payload.name) {
                    payload.name = payload.name.trim();
                }
                if (payload.beds) {
                    payload.beds = parseInt(payload.beds);
                }

                context.commit('update', {
                    house,
                    payload
                });
                return resolve();
            });
        },
        remove(context, houseId) {
            return new Promise((resolve, reject) => {
                const house = context.getters.findById(houseId);
                if (house === null) {
                    return reject(`Could not find house in database`);
                }

                const houseIndex = context.state.houses.indexOf(house);
                context.commit('deleteAtIndex', houseIndex);
                return resolve();
            });
        },
    },
    mutations: {
        create(state, house) {
            state.houses.push(house);
            Storage.save(state.houses);
        },
        update(state, { house, payload }) {
            const houseIndex = state.houses.indexOf(house);

            if (payload.name) {
                house.name = payload.name;
            }
            if (payload.beds) {
                house.bedCount = payload.beds;
            }

            state.houses[houseIndex] = house;
            Storage.save(state.houses);
        },
        deleteAtIndex(state, index) {
            state.houses.splice(index, 1);
            Storage.save(state.houses);
        },
    },
};
