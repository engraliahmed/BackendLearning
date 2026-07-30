const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
    Home.fetchAll().then(([registeredHomes]) => {
        res.render("store/index", {
            registeredHomes,
            pageTitle: "airbnb Home",
        });
    });
};

exports.getHomes = (req, res, next) => {
    Home.fetchAll().then(([registeredHomes]) => {
        res.render("store/home-list", {
            registeredHomes,
            pageTitle: "Homes List",
        });
    });
};

exports.getBookings = (req, res, next) => {
    res.render("store/bookings", {
        pageTitle: "My Bookings",
    });
};

exports.getFavouriteList = (req, res, next) => {
    Favourite.getFavourite((favouriteIds) => {
        Home.fetchAll().then(([registeredHomes]) => {
            const favouriteHomes = registeredHomes.filter((home) =>
                favouriteIds.includes(home.id),
            );

            res.render("store/favourites", {
                favourites: favouriteHomes,
                pageTitle: "Favourites",
            });
        });
    });
};

exports.postAddToFavourite = (req, res, next) => {
    Favourite.addToFavourite(req.body.id, (error) => {
        if (error) {
            console.log("Error while adding favourite", error);
        }
        res.redirect("/favourites");
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
    const homeId = req.params.homeId;
    Favourite.deleteByID(homeId, (error) => {
        if (error) {
            console.log("Error while removing from favourites", error);
        }
        res.redirect("/favourites");
    });
};

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log(homeId);
    Home.findById(homeId, (home) => {
        if (!home) {
            console.log("Home not found");
            res.redirect("/homes");
        } else {
            // console.log("Home details found", home);
            res.render("store/homeDetails", {
                home: home,
                pageTitle: `${home.houseName} - ${home.location}`,
            });
        }
    });
};
