const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtil");

module.exports = class Home {
    constructor(houseName, price, date, location, image, description, _id) {
        this.houseName = houseName;
        this.price = price;
        this.date = date;
        this.location = location;
        this.image = image;
        this.description = description;
        if (_id) {
            this._id = _id;
        }
    }

    save() {
        const db = getDB();
        if(this._id){ //update
            
        }
        else{  //insert
            return db.collection("homes").insertOne(this);
        }
    }

    static fetchAll(callback) {
        const db = getDB();
        return db.collection("homes").find().toArray();
    }

    static findById(homeId) {
        const db = getDB();
        return db
            .collection("homes")
            .find({ _id: new ObjectId(String(homeId)) })
            .next();
    }

    static deleteByID(homeId) {
        const db = getDB();
        return db
            .collection("homes")
            .deleteOne({ _id: new ObjectId(String(homeId)) });
    }
};
