// External module
const express = require("express");
const path = require('path')

// Local Module
const userRouter = require("./routes/userRoute");
const hostRouter = require("./routes/hostRoute");
const rootDir = require('./utils/pathUtil')

const app = express();

app.use(express.urlencoded());

app.use(userRouter); 
app.use("/host",hostRouter);  


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404Page.html'))
})

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});