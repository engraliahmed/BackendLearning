// External module
const express = require("express");
const app = express();


app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.send(
        `
        <h1>Welcome to airbnb</h1>
        <a href='/add-home'>Add Home<a/>
        `,
    );
});


app.get("/add-home", (req, res) => {
    res.send(
        `
        <h1>Registeres your home</h1>
        <form action='/add-home' method='POST'>
            <input type='text' name='houseName' placeholder='Enter house name'/>
            <input type='submit'/>
        </form>
        `,
    );
});

app.post("/add-home", (req, res) => {
    console.log(req.body);
    res.send(
        `
        <h1>Home registered successfully</h1>
        <a href='/'>Go to Home<a/>
        `,
    );
});


const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
