const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
    console.log("Session value:", req.session);
    Home.find().then((registeredHomes) => {
        res.render("store/index", {
            registeredHomes,
            pageTitle: "airbnb Home",
            isLoggedIn: req.isLoggedIn,
        });
    });
};

exports.getHomes = (req, res, next) => {
    Home.find().then((registeredHomes) => {
        res.render("store/home-list", {
            registeredHomes,
            pageTitle: "Homes List",
            isLoggedIn: req.isLoggedIn,
        });
    });
};

exports.getBookings = (req, res, next) => {
    res.render("store/bookings", {
        pageTitle: "My Bookings",
        isLoggedIn: req.isLoggedIn,
    });
};

exports.getFavouriteList = (req, res, next) => {
    Favourite.find()
        .populate("houseId")
        .then((favourites) => {
            const favouriteHomes = favourites.map((fav) => fav.houseId);
            res.render("store/favourites", {
                favourites: favouriteHomes,
                pageTitle: "My Favourites",
                isLoggedIn: req.isLoggedIn,
            });
        });
};

exports.postAddToFavourite = (req, res, next) => {
    const homeId = req.body.id;
    Favourite.findOne({ houseId: homeId })
        .then((fav) => {
            if (fav) {
                console.log("Already marked as favourite");
            } else {
                fav = new Favourite({ houseId: homeId });
                fav.save().then((result) => {
                    console.log("Fav added: ", result);
                });
            }
            res.redirect("/favourites");
        })
        .catch((err) => {
            console.log("Error while marking favourite: ", err);
        });
};

exports.postRemoveFromFavourite = (req, res, next) => {
    const homeId = req.params.homeId;
    console.log(homeId);
    Favourite.findOneAndDelete({ houseId: homeId })
        .then((result) => {
            console.log("Favourite removed", result);
        })
        .catch((err) => {
            console.log("Error while removing favourite", err);
        })
        .finally(() => {
            res.redirect("/favourites");
        });
};

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId).then((home) => {
        if (!home) {
            console.log("Home not found");
            res.redirect("/homes");
        } else {
            // console.log("Home details found", home);
            res.render("store/homeDetails", {
                home: home,
                pageTitle: `${home.houseName} - ${home.location}`,
                isLoggedIn: req.isLoggedIn,
            });
        }
    });
};
