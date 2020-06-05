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
        findByInhabitant: (state) => (inhabitantId) => {
            return state.houses.find((house) => {
                return house.inhabitants.indexOf(inhabitantId) >= 0;
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

                return resolve(house);
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
        async assignInhabitant(context, { houseId, inhabitantId }) {
            const house = context.getters.findById(houseId);
            if (! house) {
                throw new Error(`Could not find house in database`);
            }

            if (house.inhabitants.length >= house.bedCount) {
                throw new Error(`This house is full`);
            }

            if (house.inhabitants.indexOf(inhabitantId) >= 0) {
                // Inhabitant already assigned to this house
                return;
            }

            // Remove inhabitant from its current house
            const currentHouse = context.getters.findByInhabitant(inhabitantId);
            if (currentHouse) {
                if (currentHouse.id === house.id) {
                    // Same house, nothing to do
                    return;
                }

                context.commit('deleteInhabitant', {
                    house: currentHouse,
                    inhabitantId
                });
            }

            context.commit('addInhabitant', {
                house,
                inhabitantId
            });
        },
        async removeInhabitant(context, { houseId, inhabitantId }) {
            const house = context.getters.findById(houseId);
            if (! house) {
                throw new Error(`Could not find house in database`);
            }

            if (house.inhabitants.indexOf(inhabitantId) < 0) {
                // Inhabitant not assigned to this house
                return;
            }

            context.commit('deleteInhabitant', {
                house,
                inhabitantId
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
        addInhabitant(state, { house, inhabitantId }) {
            const houseIndex = state.houses.indexOf(house);

            house.inhabitants.push(inhabitantId);

            state.houses[houseIndex] = house;
            Storage.save(state.houses);
        },
        deleteInhabitant(state, { house, inhabitantId }) {
            const houseIndex = state.houses.indexOf(house);

            house.inhabitants.splice(
                house.inhabitants.indexOf(inhabitantId),
                1
            );

            state.houses[houseIndex] = house;
            Storage.save(state.houses);
        },
    },
};
