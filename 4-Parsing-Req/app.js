const http = require('http')
const RequestHandler = require('./user')

const server = http.createServer(RequestHandler)

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})