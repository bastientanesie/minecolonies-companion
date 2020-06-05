export default class House {
    /** @type {Number} */
    id;
    /** @type {String} */
    name;
    /** @type {Number} */
    bedCount;
    /** @type {Number[]} */
    inhabitants = [];

    /**
     * @param {Number} id
     * @param {String} name
     * @param {Number} beds
     */
    constructor(id, name, beds) {
        this.id = id;
        this.name = name;
        this.bedCount = beds;
    }

    /**
     * @param {Object} json
     * @return {House}
     */
    static fromJson(json) {
        // @todo data validation
        const instance = new House(
            json.id,
            json.name,
            json.beds
        );
        if (Object.prototype.hasOwnProperty.call(json, 'inhabitants')
            && Array.isArray(json.inhabitants)
        ) {
            instance.inhabitants = json.inhabitants;
        }
        return instance;
    }

    /**
     * @return {{inhabitants: Number[], name: String, beds: Number}}
     */
    toJson() {
        return {
            name: this.name,
            beds: this.bedCount,
            inhabitants: this.inhabitants
        };
    }
}
