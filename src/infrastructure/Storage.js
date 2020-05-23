import Citizen from '../domain/models/Citizen';

const LOCAL_STORAGE_KEY = 'mc-citizen-list';

const Storage = {
    uid: 0,
    save: (citizens) => {
        const rawData = citizens.map((item) => item.toJson());
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rawData));
    },
    fetchAll: () => {
        const rawData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        const citizens = [];
        rawData.forEach((item, index) => {
            item.id = index;
            citizens.push(Citizen.fromJson(item));
        });
        Storage.uid = citizens.length;
        return citizens;
    },
};

export default Storage;
