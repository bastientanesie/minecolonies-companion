import House from '../../domain/models/House';

const LOCAL_STORAGE_KEY = 'mc-house-list';

const Storage = {
    uid: 0,
    save: (houses) => {
        const rawData = houses.map((item) => item.toJson());
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rawData));
    },
    fetchAll: () => {
        const rawData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        const houses = [];
        rawData.forEach((item, index) => {
            item.id = index;
            houses.push(House.fromJson(item));
        });
        Storage.uid = houses.length;
        return houses;
    },
};

export default Storage;
