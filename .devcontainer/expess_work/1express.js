 // express is a framework used to define the structure of server side programming 
// express use:-
// 1. Listen for incoming request
// 2. Parse the data
// 3. Match response to particular routes

const express = require("express");
const app = express();
app.listen(3000,()=>{
    console.log("server is listening at port 3000");
});
app.use((req,res,next)=>{
    console.log(`Request received: ${req.method} ${req.url}`);
    // console.log("request under req of use = " , req);
    // console.log("request under res of use = " , res);
    console.log(next);
    next();
})
app.get("/",(req,res)=>{
    // console.log("request under req of get = " , req);
    // console.log("request under res of get = " , res);
    res.send("main page");
})
app.get("/contact",(req,res)=>{
    // console.log("request under req of get = " , req);
    // console.log("request under res of get = " , res);
    res.send("contant page"+"<h1>contact to abc!@gmail.com</h1>");
})
app.get("/home",(req,res)=>{
    // console.log("request under req of get = " , req);
    // console.log("request under res of get = " , res);
    res.send("<h1>Home page</h1>");
})
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

