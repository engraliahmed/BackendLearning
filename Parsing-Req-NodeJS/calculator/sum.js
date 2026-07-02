const sumRequestHandler = (req, res) => {
    console.log("In sum req handler", req.url);

    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
        console.log(chunk); // Output: <Buffer 66 69 72 73 74 3d 33 26 73 65 63 6f 6e 64 3d 33>
    });
    req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        console.log(bodyStr); // Now the Buffer class decrypted the chunk
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
        res.setHeader("Content-Type", "text/html");
        res.write(`
        <html>
            <head><title>Practise Set</title></head>
            <body>
                <h1>Your Sum is ${result}</h1>
            </body>  
        <html>  
    `);
        return res.end();
    });
};

module.exports = sumRequestHandler;
