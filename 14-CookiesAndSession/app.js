// Core Module
const path = require("path");

// External Module
require("dotenv").config();
const express = require("express");
const session = require("express-session");

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());



//Cookie Middleware
app.use((req, res, next) => {
    req.isLoggedIn = req.get("Cookie")
        ? req.get("Cookie").split("=")[1] === 'true'
        : false;

    next();
});

app.use(authRouter);
app.use(storeRouter);

//isLoggedIn middleware
app.use("/host", (req, res, next) => {
    if (req.isLoggedIn) {
        next();
    } else {
        res.redirect("/login");
    }
});

app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.get404);

const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connected to MongoDB");
            console.log(`Server running on address http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error while connecting to MongoDB", err);
    });
