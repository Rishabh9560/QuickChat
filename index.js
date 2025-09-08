const express = require("express") ;
const app = express() ;
const port = 1010 ;
const methodOverride = require("method-override");
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
app.use(express.static(path.join(__dirname ,"public")));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"))

main()
.then(() =>{
    console.log("connection sucessfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

// ---------INDEXROUTE-------------//
app.get("/chats" , async (req ,res) =>{
   let chats =  await Chat.find() ;
   console.log(chats) ;
   res.render("index.ejs" , {chats}) ;

}) 
//-----------NEW ROUTE------------//
app.get("/chats/new" , (req , res)=>{
    res.render("new.ejs") ;
})
//----------------CREATE ROUTE-----//
app.post("/chats" , (req , res) =>{
    let{from , msg , to } =  req.body ;
    let newChat = new Chat({
        from : from ,
        to : to ,
        msg : msg ,
        created_at : new Date() ,
    })
    newChat.save().then((res) => {
        console.log(res) ; 
    }).catch((err) => {
        console.log(err) ;
    })
    res.redirect("/chats");
})
//--------------EDIT Route--------//
app.get("/chats/:id/edit" , async (req,res)=>{
    let {id} = req.params ; 
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , {chat});
})
//--------------UPDATE ROUTE----------//
app.put("/chats/:id" , async (req ,res) => {
    let {id} = req.params ;
    let {newMsg} = req.body ;
    let updateChat = await Chat.findByIdAndUpdate(id , {msg:newMsg} , {runValidators : true , new : true});
    console.log(updateChat) ;
    res.redirect("/chats");
})

//-----------DESTROY ROUTE-------------//
app.delete("/chats/:id" , async (req,res)=>{
    let {id} = req.params ;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat) ;
    res.redirect("/chats")
})

app.get("/" ,(req ,res) =>{
    res.send("listninig");

})
app.listen((port) , () =>{
    console.log("Listining") ;
}) ;    