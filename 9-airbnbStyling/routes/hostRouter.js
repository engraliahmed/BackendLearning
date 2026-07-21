// Core Module
const path = require("path");

// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "addHome.html"));
    res.render('addHome', {pageTitle: 'add home'})
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log(
        "Home registration successful for: ",
        req.body,
        req.body.houseName,
    );
    registeredHomes.push({ houseName: req.body.houseName });
    console.log(registeredHomes);
    // res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
    res.render('homeAdded', {pageTitle: 'Success'})
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
