const db = require("../utils/databaseUtil");

module.exports = class Home {
    constructor(houseName, price, date, location, image) {
        this.houseName = houseName;
        this.price = price;
        this.date = date;
        this.location = location;
        this.image = image;
    }

    save() {}

    static fetchAll(callback) {
        return db.execute("SELECT * FROM homes")
    }

    static findById(homeId, callback) {}

    static deleteByID(homeId, callback) {}
};
