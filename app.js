const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user.route")
require("./config/db")

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api/users",userRouter)



//api/users : GET
//api/users/:id : GET
//api/users : POST
//api/users/:id : PATCH
//api/users/:id : DELETE


app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/./views/index.html")
})


//route not found error
app.use((req,res,next) =>{
    res.status(404).json({
        message : "route not found",
    });
});


//server error
app.use((error,req,res,next)=>{
    res.send(500).json({
        message:"something broke",
    })
})

module.exports = app;
