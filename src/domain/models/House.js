export default class Citizen {
    id;
    name;
    bedCount;

    constructor(id, name, beds) {
        this.id = id;
        this.name = name;
        this.bedCount = beds;
    }

    static fromJson(json) {
        // @todo data validation
        return new Citizen(
            json.id,
            json.name,
            json.beds
        );
    }

    toJson() {
        return {
            name: this.name,
            beds: this.bedCount
        };
    }
}
