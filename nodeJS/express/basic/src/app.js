import express from "express";
import bodyParser from "body-parser";
import path from "path";

//Initialze Express
const app = express();

/*
 * Plugin View Engine
 * @returns {HTML} Using Pug(Jade)
 */
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "pug");

/* Parse request body into json */
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
    res.send("This is the login page");
});

//Sign-up Page Route
app.get("/signup", (req, res) => {
    res.send("This is the sign-up page");
});


//Spin-up Server
app.listen(80, () => console.log(" Server is running @ http://localhost"));

