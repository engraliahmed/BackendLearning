const sumRequestHandler = (req, res) => {
    console.log("In sum req handler", req.url);

    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk)
    });
    req.on('end', ()=>{
        const bodyStr = Buffer.concat().toString()
        const params = new URLSearchParams(bodyStr)
        const bodyObj = Object.fromEntries(params);
        const result = bodyObj.first + bodyObj.second
        
    })
};

module.exports = sumRequestHandler;
