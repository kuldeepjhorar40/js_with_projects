const http = require("http");
// http.createServer().listen(4303);
 http.createServer((req,resp)=>{
    resp.write("<h1>hello</h1>")
    resp.write("normal content")

    resp.end("end");//end() function must compulory
 }).listen(4303);