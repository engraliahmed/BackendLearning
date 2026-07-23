const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
    res.render("host/addHome", { pageTitle: "add home" });
};

exports.postAddHome = (req, res, next) => {
    const { houseName, price, date, location, image } = req.body;

    const home = new Home(houseName, price, date, location, image);

    home.save();

    res.render("host/homeAdded", { pageTitle: "Success" });
};
