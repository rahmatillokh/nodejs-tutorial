const http = require("http")
const server = http.createServer((req, res)=>{
    // req => so'rov
    // res => javobi
    console.log(req.url);
    res.write()
    res.end("<h1>Hello World 2</h1>")
})

server.listen(3000, ()=>{
    console.log("Server has been started on port 3000");
})