const http  = require('http');
const port1 = 8080;
const userData = [{
    name:'abc',
    age : 30,
    email : "abc@gmail.com"
},
{
    name:'efg',
    age : 30,
    email : "efg@gmail.com"
},
{
    name:'mno',
    age : 30,
    email : "mno@gmail.com"
}]

const server  = http.createServer((req,resp)=>{    resp.setHeader("Content-Type","text/JSON");
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(port1);
