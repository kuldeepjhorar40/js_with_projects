const mongoose  = require('mongoose');
const Chat  = require("./models/chat.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

};
main()
.then((res) => {
    console.log(res ,"connection succesfull");
})
.catch((err)=>{
    console.log(err,"this error occured");
})


let all  =  Chat.insertMany([{
    from : " a",
    to: "c",
    msg : "heloo c",
    created_at : new Date(),
},
{
    from : " 23abc",
    to: "c4444435de",
    msg : "h423432eloo cde",
    created_at : new Date(),
}
,
{
    from : " sasabc",
    to: "sascde",
    msg : "sasheloo cde",
    created_at : new Date(),
}]).
then((data) =>{
    console.log(data);
})
.catch((err) => {
    console.log(err);
});