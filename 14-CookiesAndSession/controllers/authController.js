
exports.getLogin = (req, res, next) => {
    res.render("store/index", {
        registeredHomes,
        pageTitle: "airbnb Home",
    });
};

