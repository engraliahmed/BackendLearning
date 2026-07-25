const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { stringify } = require("querystring");

let registeredHomes = [];
const homePath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
    constructor(houseName, price, date, location, image) {
        this.houseName = houseName;
        this.price = price;
        this.date = date;
        this.location = location;
        this.image = image;
    }

    save() {
        this.id = Math.random().toString();
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            fs.writeFile(homePath, JSON.stringify(registeredHomes), (error) => {
                console.log("file writing added", error);
            });
        });
    }

    static fetchAll(callback) {
        fs.readFile(homePath, (err, data) => {
            if (!err) {
                callback(JSON.parse(data));
            } else {
                callback([]);
            }
        });
    }

    static findById(homeId, callback) {
        this.fetchAll((homes) => {
            const homeFound = homes.find((home) => home.id === homeId);
            callback(homeFound);
        });
    }
};
