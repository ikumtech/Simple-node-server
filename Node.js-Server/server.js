const http = require('http');


// Create a server with the HTTP variable
const server = http.createServer(function(req, res) {
    //Headers
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.writeHead(200, { 'Content-Type': 'application/json' });
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //Send back some Infomation
   // res.end("Welcome to Abideen's World");
  // res.end(`
//    {
//        "name": "Abideen",
//        "University": " Brandon University",
//        "Occupation": "Software Developer"
 //   }
 //  `);
 res.end(`
    <html>
        <body style="background: grey; text-align: center; color: black;">
            <h1>Welcome to this class</h1>
            <p>How are you all doing?</p>
        </body>
    </html>
 `)
});

// Create a port
server.listen(4000, '127.0.0.1');

console.log("Yes, You have created a server!");