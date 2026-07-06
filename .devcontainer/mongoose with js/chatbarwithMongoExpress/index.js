const express  = require('express');

const path  = require('path');
// const ejs  = require('ejs');

const mongoose  = require('mongoose');

const app = express();

const methodOverride = require('method-override');


const Chat  = require("./models/chat.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

};
main()
.then((res) => {
    console.log("connection succesfull");
})
.catch((err)=>{
    console.log("this error occured");
})


const { log } = require('console');

app.use(express.urlencoded({extended :true}));
app.use(methodOverride("_method"));

app.set("views",path.join(__dirname , "/views"));
app.set("view engine","ejs");

app.get("/" , (req, res)=>{
    res.send("this is root page1");
});

// ------Index route (get)
app.get("/chat" , async (req,res) =>{
    let chats = await  Chat.find();
    res.render("allchat.ejs" , {chats});

})

// ----- new post route
// 1(get)
app.get("/chat/new" , (req,res) =>{
    
    res.render("newchat.ejs");

});

// 2(post)
app.post("/chat" , async (req,res) =>{
    console.log("params : " , req.body);
    let {from , msg ,to} = req.body;
    let chat1 = await  new Chat({
        from ,
        to,
        msg ,
        created_at : new Date()
    })
    chat1.save().then((data)=>{
        console.log(data);
    }).catch((err) =>{
        console.log("error = " , err);
    });
    res.redirect("/chat");

});


// ----- Edit msg ----

// app.get("/chat/:id/edit" , async (req,res) =>{
//     let {id} = req.params;
//     let chat = await Chat.findById(id);
//     res.render("editchat.ejs" , {chat} );
// });

// app.post("/chat/:id/edit" , async (req,res) =>{
//     console.log("params : " , req.body);
//     let {id} = req.params;
//     let {newmsg} = req.body;
//     Chat.findByIdAndUpdate(id , {msg : newmsg}).then((res) =>{
//         console.log("updated is like :-" , res);
//     }).catch((err) =>{
//         console.log("err in edit route :- ",err);
//     })
//     res.redirect("/chat");

// });

app.get("/chat/:id/edit" , async (req,res) =>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("editchat.ejs" , {chat} );
});

app.put("/chat/:id" , async (req,res) =>{
    console.log("params : " , req.body);
    let {id} = req.params;
    let {newmsg} = req.body;
    Chat.findByIdAndUpdate(id , {msg : newmsg}).then((res) =>{
        console.log("updated is like :-" , res);
    }).catch((err) =>{
        console.log("err in edit route :- ",err);
    })
    res.redirect("/chat");
});



























































app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});