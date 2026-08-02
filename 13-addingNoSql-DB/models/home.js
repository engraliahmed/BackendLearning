const { getDB } = require("../utils/databaseUtil");

module.exports = class Home {
    constructor(houseName, price, date, location, image, description, id) {
        this.houseName = houseName;
        this.price = price;
        this.date = date;
        this.location = location;
        this.image = image;
        this.description = description;
        this.id = id;
    }

    save() {
        return db.collection("homes").insertOne(this);
    }

    static fetchAll(callback) {
        const db = getDB();
        return db.collection("homes").find().toArray();
    }

    static findById(homeId) {
        return db.execute("SELECT * FROM homes WHERE id=?", [homeId]);
    }

    static deleteByID(homeId) {
        return db.execute("DELETE FROM homes WHERE id=?", [homeId]);
    }
};
