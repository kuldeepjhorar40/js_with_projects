const express = require("express");
const app = express();
app.listen(3000,(res,req)=>{
    console.log("server is listening at port 3000");
})
app.get("/",(req,res)=>{
    res.send("home page");
})
app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    let username1  = req.params.username;
    res.send(`hello @${username1}`);
})
app.use((req,res)=>{
    res.status(404).send("404-page not found");
})