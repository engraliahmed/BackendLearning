const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
    res.render("host/editHome", {
        pageTitle: "add home",
    });
};

exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId;
    const editing = req.query.editing;
    console.log(homeId, editing);
    res.render("host/editHome", {
        pageTitle: "Edit Home",
    });
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
