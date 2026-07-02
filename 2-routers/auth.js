// In this we learn aboput route specific middleware.
const express = require("express");
const router = express.Router();

// Middleware
const auth = function (req, res, next) {
    console.log("I am in auth middleware");

    req.user = { userID: 1, role: "student" };

    if (req.user) {
        next();
    } else
        res.json({
            success: false,
            message: "Not a valid user",
        });
};

// isStudent middleware
const isStudent = function (req, res, next) {
    console.log("I am in student middleware");

    if (req.user.role === "student") {
        next();
    } else
        res.json({
            success: false,
            message: "access denied",
        });
};

// isAdmin Middleware
const isAdmin = function (req, res, next) {
    console.log("I am in admin middleware");

    if (req.user.role === "admin") {
        next();
    } else
        res.json({
            success: false,
            message: "access denied",
        });
};

router.get("/student", auth, isStudent, (req, res) => {
    console.log("Inside student route");
    res.send("Student specific page");
});

router.get("/admin", auth, isAdmin, (req, res) => {
    console.log("Inside admin route");
    res.send("Admin specific route");
});

module.exports = router;
