const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
    res.render("host/addHome", { pageTitle: "add home" });
};

exports.getHostHomes = (req, res, next) => {
    const registeredHomes = Home.fetchAll((registeredHomes) =>
        res.render("host/hostHomeList", {
            registeredHomes,
            pageTitle: "Host Home List",
        }),
    );
};

exports.postAddHome = (req, res, next) => {
    const { houseName, price, date, location, image } = req.body;
    const home = new Home(houseName, price, date, location, image);
    home.save();
    res.render("host/homeAdded", { pageTitle: "Success" });
};

