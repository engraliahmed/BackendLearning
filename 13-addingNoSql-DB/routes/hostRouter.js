// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Modules
const hostController = require("../controllers/hostController");

//REST Api Structure
hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/hostHomeList", hostController.getHostHomes);
hostRouter.get("/editHome/:homeId", hostController.getEditHome)
hostRouter.post("/editHome", hostController.postEditHome)
hostRouter.post("/deleteHome/:homeId", hostController.postDeleteHome)

module.exports = hostRouter;