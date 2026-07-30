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
    Home.fetchAll().then(([registeredHomes]) => {
        res.render("host/hostHomeList", {
            registeredHomes,
            pageTitle: "Host Home List",
        });
    });
};

exports.postAddHome = (req, res, next) => {
    const { houseName, price, date, location, image, description} = req.body;
    const home = new Home(houseName, price, date, location, image, description);
    home.save();
    res.redirect("/host/hostHomeList");
};

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.deleteByID(homeId, (error) => {
        if (error) {
            console.log("Error while deleting", error);
        }
        res.redirect("/host/hostHomeList");
    });
};

exports.postEditHome = (req, res, next) => {
    const { id, houseName, price, date, location, image, description } = req.body;
    const home = new Home(id, houseName, price, date, location, image, description);

    home.save();

    res.redirect("/host/hostHomeList");
};
