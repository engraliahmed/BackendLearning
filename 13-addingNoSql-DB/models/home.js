const { getDB } = require("../utils/databaseUtil");

module.exports = class Home {
    constructor(id, houseName, price, date, location, image, description) {
        this.id = id;
        this.houseName = houseName;
        this.price = price;
        this.date = date;
        this.location = location;
        this.image = image;
        this.description = description;
    }

    save() {
        const db = getDB();
        return db.collection("homes").insertOne(this);
    }

    static fetchAll(callback) {
        return db.execute("SELECT * FROM homes");
    }

    static findById(homeId) {
        return db.execute("SELECT * FROM homes WHERE id=?", [homeId]);
    }

    static deleteByID(homeId) {
        return db.execute("DELETE FROM homes WHERE id=?", [homeId]);
    }
};
