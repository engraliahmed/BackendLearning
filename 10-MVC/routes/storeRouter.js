// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);

module.exports = storeRouter;
