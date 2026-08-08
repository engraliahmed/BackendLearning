const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
    Home.find().then((registeredHomes) => {
        res.render("store/index", {
            registeredHomes,
            pageTitle: "airbnb Home",
        });
    });
};

exports.getHomes = (req, res, next) => {
    Home.find().then((registeredHomes) => {
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
    Favourite.find().then((favouriteIds) => {
        favouriteIds = favouriteIds.map((fav) => fav.houseId.toString());
        Home.find().then((registeredHomes) => {
            const favouriteHomes = registeredHomes.filter((home) =>
                favouriteIds.includes(home._id.toString()),
            );

            res.render("store/favourites", {
                favourites: favouriteHomes,
                pageTitle: "Favourites",
            });
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
    Favourite.findOneAndDelete({houseId: homeId})
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
            });
        }
    });
};
