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
        if (this.id) {
        } else {
        }
        Home.fetchAll((registeredHomes) => {
            if (this.id) {
                //edit home case
                registeredHomes = registeredHomes.map((home) => {
                    if (home.id === this.id) {
                        return this;
                    }
                    return home;
                });
            } else {
                //add home case
                this.id = Math.random().toString();
                registeredHomes.push(this);
            }

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
