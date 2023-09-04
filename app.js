const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/./views/index.html")
})


module.exports = app;
