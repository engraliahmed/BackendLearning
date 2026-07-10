const path = require('path')

const express = require("express");
const router = express.Router();

const rootDir = require('../utils/pathUtil')

router.get("/add-home", (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
});

router.post("/add-home", (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'))

});

module.exports = router;
