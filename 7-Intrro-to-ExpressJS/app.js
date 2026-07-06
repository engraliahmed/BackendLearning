// External module
const express = require("express");

const app = express();

const homePage = (req, res, next) => {
    console.log("In a Homepage middleware");
    res.send("I got homepage middleware");
};

const loggingMiddleware = (req, res, next) => {
    console.log("In a logging middleware");
    res.send("I got Logging middleware");
};

const paymentMiddleware = (req, res, next) => {
    console.log("In a payment middleware");
    res.send("I got Payment middleware");
};

app.get("/", homePage);
app.get("/login", loggingMiddleware);
app.get("/payment", paymentMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
