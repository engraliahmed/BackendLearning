//! Node js basic server res and req
// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);

//     if (req.url === "/") {
//         res.setHeader('Content-Type', 'text/html')
//         res.write("<html>");
//         res.write("<head><title> Backend Series </title></head>");
//         res.write("<body><h1> Learning Node.js </h1></body>");
//         return res.end();
//     } else if (req.url === "/products") {
//         res.setHeader('Content-Type', 'text/html')
//         res.write("<html>");
//         res.write("<head><title> Backend Series </title></head>");
//         res.write("<body><h1> Product Page </h1></body>");
//         return res.end();
//     }
//     else{
//         res.end("Error 200")
//     }
// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

//! Routing request

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>')
//     res.write('<head><title> Backend Learning </title></head>')

//     if(req.url === '/'){
//         res.write('<body><h1> Welcome to homepage </h1></body>')
//         return res.end()
//     }
//     else if(req.url.toLowerCase() === '/products'){
//         res.write('<body><h1> Welcome to Products page </h1></body>')
//         return res.end()
//     }

//     res.write('<body><h1> Backend Learning </h1></body>')
//     res.write('</html>')
//     return res.end()
// })

// server.listen(3000, ()=>{
//     console.log('server is running on port 3000');
// })

//! Form Handling

const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Backend Learning </title></head>");
    res.write("<h1>Welcome to HomePage</h1>");

    res.write('<form action="/submit-details" method = "POST" >')

    res.write('<input type="text" id = "name" name = "name" placeholder = "Enter your name" ><br><br>')
    
    res.write('</form>')

    res.write("</html>");
});
