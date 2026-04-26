const http = require("http");
// http.createServer().listen(4303);
 http.createServer((req,resp)=>{
   resp.setHeader("Content-Type","text/html");
    resp.write("<h1>hello</h1>");
    resp.write("<h2>hello</h2>");
    resp.write("<p>gergr</p>");
    resp.write("normal content")

    resp.end("end");//end() function must compulory
    process.exit();// exit whole process of sserveer
 }).listen(4303);