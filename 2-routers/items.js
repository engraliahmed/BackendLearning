// By doing this we can actually make our code more modularize by definingall routes here and calls at easy in script or index or any other file

const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Hello World");
});

router.get("/profile", function (req, res) {
    res.send("Profile Page");
});

router.post("/items", (req, res) => {
    res.json({ x: 1, y: 2, z: 3 });
});

router.put("/items/:id", (req, res) => {
    res.send("Got a put request");
});

module.exports = router;
