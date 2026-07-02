const http = require('http')
const handler = require('./handler')

const server = http.createServer(handler)

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})