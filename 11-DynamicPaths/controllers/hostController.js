const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
    res.render("host/editHome", {
        pageTitle: "add home",
        editing: false,
    });
};

exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId;
    const editing = req.query.editing === "true";

    Home.findById(homeId, (home) => {
        if (!home) {
            console.log("Home not found for editing");
            return res.redirect("/host/hostHomeList");
        }
        console.log(homeId, editing, home);
        res.render("host/editHome", {
            pageTitle: "Edit Home",
            editing: editing,
            home: home,
        });
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
