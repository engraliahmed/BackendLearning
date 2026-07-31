const db = require("../utils/databaseUtil");

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
        // If you go with this syntax this will cause SQL injection you are directly sending query to the DataBase if hacker attacks and add DELETE query it will drop your table instead follow the next one
        // return db.execute(
        //     `INSERT INTO homes (houseName, price, date, location, image, description) VALUES ('${this.houseName}',${this.price}, ${this.date}, '${this.location}', '${this.image}', '${this.description}')`
        // );

        if (this.id) {
            return db.execute(
                "UPDATE homes SET houseName=?, price=?, date=?, location=?, image=?, description=? WHERE id=?",
                [
                    this.houseName,
                    this.price,
                    this.date,
                    this.location,
                    this.image,
                    this.description,
                    this.id,
                ],
            );
        } else {
            return db.execute(
                "INSERT INTO homes (houseName, price, date, location, image, description) VALUES (?, ?, ?, ?, ?, ?)",
                [
                    this.houseName,
                    this.price,
                    this.date,
                    this.location,
                    this.image,
                    this.description,
                ],
            );
        }
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
