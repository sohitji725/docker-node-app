const http = require("http");

const server = http.createServer((req,res) =>{
res.end("hello from dockerterized node.js app");
});

server.listen(3000, () =>{
    console.log("i am listening on 3000 port");
})