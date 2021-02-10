const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/important-people", function(req, res){
    res.render("ImportantPeople")
})

app.get("/videos", function(req, res){
    res.render("videos")
})

app.get("/important-information", function(req, res){
    res.render("ImportantInformation")
})

app.listen(process.env.PORT || 3000);