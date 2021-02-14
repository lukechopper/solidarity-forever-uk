const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cookieSession = require("cookie-session");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//Create the cookie
app.use(cookieSession({
    // milliseconds of a day
    maxAge: 24*60*60*1000,
    keys:[process.env.COOKIE_KEY]
  }));
  
  //Start the passport session
  app.use(passport.initialize());
  app.use(passport.session());
  
//Create the database
mongoose.connect("mongodb://localhost:27017/SolidarityForeverDB", {useUnifiedTopology: true, useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    googleId: String,
    userEmail: String,
});

const User = mongoose.model("User", userSchema);

// Find or create the User
passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/redirect"
      },(accessToken, refreshToken, profile, done) => {
        // passport callback function
        //check if user already exists in our db with the given profile ID
        User.findOne({googleId: profile.id}).then((currentUser)=>{
          if(currentUser){
            //if we already have a record with the given profile ID
            done(null, currentUser);
          } else{
               //if not, create a new user 
              new User({
                googleId: profile.id,
                userEmail: profile.emails[0].value,
              }).save().then((newUser) =>{
                done(null, newUser);
              });
           } 
        })
      })
  );

  //Pack and unpack the identification token which is stored in the cookie.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });


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
});

//OAuth
let justLoggedOut = false;
let haveEverLogged = false;

app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt : "select_account",
  }));

  app.get("/auth/google/redirect",passport.authenticate('google'), function(req, res){
      haveEverLogged = true;
        res.redirect("/logged");
  });

  app.get("/logout", function(req, res){
      req.logout();
      req.session = null;

        justLoggedOut = true;
      res.redirect("/logged");
  });

  //Route that handles all of the login/logout displays
app.get("/logged", function(req, res){

    if(req.user){
        let main = "Hello: ";
        let sub = getUserFromEmail(req.user.userEmail);
        res.render("logged", {mainText: main, subText: sub});
    }else if(justLoggedOut && haveEverLogged){
        let main = "You have been logged out.";
        let sub = "";
        res.render("logged", {mainText: main, subText: sub});

        haveEverLogged = false;
    }else{
        let main = "You need to login.";
        let sub = "";
        res.render("logged", {mainText: main, subText: sub});
    }

    justLoggedOut = false;
})

//Function to get the username from the users email.
function getUserFromEmail(email){
    let atLocation = email.indexOf("@");
    let userName = email.substring(0, atLocation);

    return userName;
}




app.listen(process.env.PORT || 3000);