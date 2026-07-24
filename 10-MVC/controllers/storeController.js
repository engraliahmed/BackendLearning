const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
    const registeredHomes = Home.fetchAll((registeredHomes) =>
        res.render("store/homepage", {
            registeredHomes,
            pageTitle: "Home Page",
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

exports.getFavouriteList = (req, res, next) =>{
    res.render("store/favourites", {
        pageTitle: "Favourites"
    })
}
