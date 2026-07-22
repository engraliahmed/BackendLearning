const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { stringify } = require("querystring");

let registeredHomes = [];

module.exports = class Home {
    constructor(houseName, price, date, location, image) {
        this.houseName = houseName;
        this.price = price;
        this.date = date;
        this.location = location;
        this.image = image;
    }

    save() {
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            const homePath = path.join(rootDir, "data", "homes.json");
            fs.writeFile(homePath, JSON.stringify(registeredHomes), (error) => {
                console.log("file writing added", error);
            });
        });
    }

    static fetchAll(callback) {
        const homePath = path.join(rootDir, "data", "homes.json");
        fs.readFile(homePath, (err, data) => {
            if (!err) {
                callback(JSON.parse(data));
            } else {
                callback([]);
            }
        });
    }
};
