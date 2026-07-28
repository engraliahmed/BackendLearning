const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favouritePath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
    static addToFavourite(homeId, callback) {
        Favourite.getFavourite((favourites) => {
            if (favourites.includes(homeId)) {
                callback("Home is already marked favourite");
            } else {
                favourites.push(homeId);
                fs.writeFile(
                    favouritePath,
                    JSON.stringify(favourites),
                    callback,
                );
            }
        });
    }

    static getFavourite(callback) {
        fs.readFile(favouritePath, (err, data) => {
            callback(!err ? JSON.parse(data) : []);
        });
    }

    static deleteByID(delHomeId, callback) {
        Favourite.getFavourite((homeIds) => {
            homeIds = homeIds.filter((homeId) => delHomeId !== homeId);
            fs.writeFile(favouritePath, JSON.stringify(homeIds), callback);
        });
    }
};
