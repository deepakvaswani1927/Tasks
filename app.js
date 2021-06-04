const http = require('http');
const port = 8000;

const server = http.createServer(function(req , res) {
  res.write("hello world")
  res.end()
});

server.listen(port , (error) => {
    if(error)
    console.log("something went wrong" ,error);
    else 
    console.log("server is listening on " , port);
});