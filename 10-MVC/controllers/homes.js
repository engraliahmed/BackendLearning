const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
    res.render("addHome", { pageTitle: "add home" });
};

exports.postAddHome = (req, res, next) => {
    const { houseName, price, date, location, image } = req.body;

    const home = new Home(houseName, price, date, location, image);

    home.save();

    res.render("homeAdded", { pageTitle: "Success" });
};

exports.getHomes = (req, res, next) => {
    const registeredHomes = Home.fetchAll((registeredHomes) =>
        res.render("home", { registeredHomes, pageTitle: "airbnb Home" }),
    );
};
