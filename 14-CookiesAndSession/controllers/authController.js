const Home = require("../models/home");

exports.getLogin = (req, res, next) => {
    res.render("auth/login", {
        pageTitle: "Login",
        isLoggedIn: false,
    });
};

exports.postLogin = (req, res, next) => {
    res.cookie("isLoggedIn", true);
    // req.isLoggedIn = true;
    res.redirect("/");
};

exports.postLogout = (req, res, next) => {
    // res.cookie('isLoggedIn', false)
    res.clearCookie("isLoggedIn"); //we can use clearcookie method as well
    res.redirect("/");
};
