import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";


//Initialze Express
const app = express();


mongoose.connect("mongodb://localhost/expressBasic");

let db = mongoose.connection;
db.on("error", err => console.error.bind(console, err));
db.once("open", () => console.log("Server made successful connection to the database. "));

// Bring in database models
import User from "./models/UserModel.js";


/*
 * Plugin View Engine
 * @returns {HTML} Using Pug(Jade)
 */
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "pug");

/* Parse request body to json and URL encoded data*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Link views to static assests
app.use(express.static(path.join(__dirname, "..", "client")));

//Base Route
app.get("/", (req, res) => {
    res.render("index", {
        title: "Everything is Awesome"
      , headingMainText: "Oochie Wally wally Oochie Bang Bang"
    });
});

//Login Page Route
app.get("/login", (req, res) => {
    res.render("login");
});

//Sign-up Page Route
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Post Submition from sign-in
app.post("/signup", (req, res) => {
    const user = new User();

    user.email = req.body.email;
    user.password = req.body.password;
    console.log(user.password);

    user.save((err) => {
        if(err){
            console.error(err);
            return res.redirect("/signup");
        }

        delete user.password;
        res.render("success", {
            message: `${user.email} SignUp was successful`
        });
    });

});

//Spin-up Server
app.listen(80, () => console.log("\n\nServer is running @ http://localhost"));

