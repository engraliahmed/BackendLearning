// const fs = require("fs");

// fs.writeFile("hey.txt", "Hello! this is a new file", function(err){
//     if(err) console.err(err)
//         else console.log("done")
// })

// fs.appendFile("hey.txt", "Now I'm appending in it", function(err){
//     if(err) console.error(err)
//         else console.log("done");
// })

// fs.rename("hey.txt", "hello.txt", (err)=>{
//     if(err) console.error(err)
//         else console.log("data");
// })

// fs.copyFile("hello.txt", "./copyFile/copy.txt", (err)=>{
//     if(err) console.error(err.message)
//         else console.log("done");
// })

// fs.unlink("hello.txt", (err)=>{
//     if(err) console.error(err)
//         else console.log("removed");
// })

// fs.rm("./copyFile", {recursive: true},(err)=>{
//     if(err) console.error(err)
//         else console.log("Directory removed");
// })

// fs.mkdir("./copyFile3/new.txt", {recursive:true} ,(err)=>{
//     if(err) console.error(err.message)
//         else console.log("directory created");
// })

// fs.readFile("./copyFile/new.txt","utf-8", (err, data)=>{
//     if(err) console.error(err)
//         else console.log(data);
// })

//! HTTP Protocol..

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello Dunia");
// });
// server.listen(3000)

//! Express setup
// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//     res.send("Hello World");
// });

// app.get("/profile", function (req, res) {
//     res.send("Profile Page");
// });

// app.get("/projects", function (req, res) {
//     res.send("Projects Page");
// });

// app.get("/contact", function (req, res) {
//     res.send("Contact Page");
// });

// app.listen(3000);

//! Request Response

// const express = require("express");
// const app = express();
// const port = 3000;

// const item = require("./routers/items");

// app.use("/api", item);

// app.listen(port, () => {
//     console.log(`Server is running on localhost:${port}`);
// });

//! Middleware
// const express = require("express");
// const app = express();

// app.use(express.json());

// const loggingMiddleware = function (req, res, next) {
//     console.log("Logging in");
//     next();
// };
// app.use(loggingMiddleware);

// const authMiddleware = function (req, res, next) {
//     console.log("Authentication");
//     next();
// };
// app.use(authMiddleware);

// app.get("/", function (req, res) {
//     res.send("Hello World");
// });

// app.get("/profile", function (req, res) {
//     res.send("Profile Page");
// });

// app.put("/items/:id", (req, res) => {
//     res.send("Got a put request");
// });

// app.get("/projects", function (req, res) {
//     res.send("Projects Page");
// });

// app.get("/contact", function (req, res) {
//     res.send("Contact Page");
// });

// app.listen(3000, () => {
//     console.log("App is running on port 3000");
// });

//! Route based Middleware

const express = require("express");
const app = express();
const port = 3000;

const auth = require("./auth");

app.use("/api", auth);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
