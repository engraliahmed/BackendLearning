const { cacheSignal } = require("react");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
    const registeredHomes = Home.fetchAll((registeredHomes) =>
        res.render("store/home-list", {
            registeredHomes,
            pageTitle: "Homes List",
        }),
    );
};

exports.getIndex = (req, res, next) => {
    const registeredHomes = Home.fetchAll((registeredHomes) =>
        res.render("store/index", {
            registeredHomes,
            pageTitle: "airbnb Home",
        }),
    );
};

exports.getBookings = (req, res, next) => {
    res.render("store/bookings", {
        pageTitle: "My Bookings",
    });
};

exports.getFavouriteList = (req, res, next) => {
    res.render("store/favourites", {
        pageTitle: "Favourites",
    });
};

exports.getHomeDetails = (req, res, next) => {
    const homeID = req.params.homeID;
    console.log(homeID);
    res.render("store/homeDetails", {
        pageTitle: "Homes Details",
    });
};
