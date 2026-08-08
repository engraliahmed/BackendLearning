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

    Home.findById(homeId).then((home) => {
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
    Home.find().then((registeredHomes) => {
        res.render("host/hostHomeList", {
            registeredHomes,
            pageTitle: "Host Home List",
        });
    });
};

exports.postAddHome = (req, res, next) => {
    const { houseName, price, date, location, image, description } = req.body;
    const home = new Home({
        houseName,
        price,
        date,
        location,
        image,
        description,
    });
    home.save().then(() => {
        console.log("Home saved successfully");
    });
    res.redirect("/host/hostHomeList");
};

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.deleteByID(homeId)
        .then(() => {
            res.redirect("/host/hostHomeList");
        })
        .catch((error) => {
            console.log("error while delete", error);
        });
};

exports.postEditHome = (req, res, next) => {
    const { id, houseName, price, date, location, image, description } =
        req.body;
    const home = new Home(
        houseName,
        price,
        date,
        location,
        image,
        description,
        id,
    );

    home.save()
        .then(() => {
            res.redirect("/host/hostHomeList");
        })
        .catch((err) => {
            console.log("Error updating home:", err);
        });
};
