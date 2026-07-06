const mongoose = require('mongoose');

let chatSchema = mongoose.Schema({
    // _id :{
    //     type:String,
    //     required:true 
    // },
    from : {
        type:String,
        required:true,
    },
    to : {
        type:String,
        required:true,
    }
    ,msg: {
        type: String,
        maxLength :50,
        }
    ,created_at:{
        type:Date,
        required:true,
    }
});
let Chat  = mongoose.model("Chat" , chatSchema);

module.exports = Chat;