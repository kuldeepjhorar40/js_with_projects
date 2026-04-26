const { log } = require('console');
const http  = require('http');
const port  = 8080;
const server = http.createServer((req,resp)=>{
    // console.log(req.address().port);
    resp.end("hello");
})
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
