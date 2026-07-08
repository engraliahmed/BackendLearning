const path = require('path')

const express = require("express");
const router = express.Router();

router.get("/add-home", (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'))
});

router.post("/add-home", (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'))

});

module.exports = router;
