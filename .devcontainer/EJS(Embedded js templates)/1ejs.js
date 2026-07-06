
const express = require('express');
const app = express();
app.listen(3000,(req,res)=>{
    console.log("server is listening at port 3000");
})
app.get("/",(req,res)=>{
    res.send("<h1>hello</h1>");
})
hbfrbhf