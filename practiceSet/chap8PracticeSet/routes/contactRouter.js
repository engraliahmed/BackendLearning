// Core module
const path = require("path");
// External module
const express = require("express");
// Local Module
const rootDir = require('../utils/pathUtil')

const contactRouter = express.Router();

contactRouter.get("/contact", (req, res, next) => {
    console.log("Handling /contact for GET", req.url, req.method);
    res.sendFile(path.join(rootDir, "views", "contact.html"));
});

contactRouter.post("/contact", (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, "views", "contactSuccess.html"));
});

module.exports = contactRouter;
