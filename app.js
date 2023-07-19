const express=require("express");
const mongoose=require("mongoose")
const path=require('path')
const bodyParser=require('body-parser')

const app=express();//creating express app

//connection to mongodb
mongoose.connect('mongodb://0.0.0.0:27017/iit_node', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


//server configuration
app.listen(3000,()=>{
    console.log("server started listening on port:3000")

})