const express = require('express');
const server = express();

server.get("/", (req, res) => {
    
    res.send("Hello world");
});



server.listen(7000, (err) => {
    if (err)
        console.log("there was a problem ", err);
    else
        console.log("listening on port 7000");
})