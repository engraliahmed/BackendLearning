// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getHomes);
storeRouter.get("/index", storeController.getIndex);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavouriteList);

module.exports = storeRouter;
