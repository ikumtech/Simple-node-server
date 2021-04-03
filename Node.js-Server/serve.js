const http = require('http');

// Create a server with the HTTP variable
const server = http.createServer(function(req, res) {
    //Headers
   res.writeHead(200, { 'Content-Type': 'text/html' });
    

    //Send back some Infomation
    res.end(`
    <html>
        <body style="background:grey;">
            <h1 style="text-align: center; background: grey;"> A Simple Server Created </h1>
            <h4><u>With:</u></h4>
            <ul>
                <li>Plain Text</li>
                <li> Json Object</li>
                <li> Html Page<li>
            </ul>
        </body>
    </html>

    `)

});

// Create a port
server.listen(6410, '127.0.0.1');

console.log("Open the server!");