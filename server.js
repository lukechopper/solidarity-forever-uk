const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/SolidarityForeverDB", {useUnifiedTopology: true, useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    googleId: String,
});

const User = mongoose.model("User", userSchema);


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/important-people", function (req, res) {
    res.render("ImportantPeople")
})

app.get("/videos", function (req, res) {
    res.render("videos")
})

app.get("/important-information", function (req, res) {
    res.render("ImportantInformation")
})

app.listen(process.env.PORT || 3000);