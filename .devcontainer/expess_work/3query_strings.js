const express = require("express");
const app = express();
app.listen(3000,(res,req)=>{
    console.log("server is listening at port 3000");
})


// app.get("/:username",(req,res)=>{
//     res.send(`hello ${req.params.username}`);
// })
app.get("/search",(req,res)=>{
    console.log(req.query);
    let str = JSON.stringify(req.query);
    res.send(`search request : ${str}`);
})

app.use((req,res)=>{
    res.status(404).send(`404 - page not found`);
})

