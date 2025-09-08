const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(() =>{
    console.log("connrction sucessfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};
let allChat = [
    {
        from : "karan" ,
        to : "vinod" ,
        msg : "hii , how are you " ,
        created_at : new Date() ,
    },
        {
        from : "Mohan",
        to : "rohan" ,
        msg : "hii" ,
        created_at : new Date() ,
    },
        {
        from : "tyagi" ,
        to : "monu" ,
        msg : "how are you " ,
        created_at : new Date() ,
    },
        {
        from : "Sam" ,
        to : "sohit",
        msg : "What are you doing " ,
        created_at : new Date() ,
    },
        {
        from : "rice" ,
        to : "chawal" ,
        msg : "What are you eating" ,
        created_at : new Date() ,
    },
] ;
Chat.insertMany(allChat);