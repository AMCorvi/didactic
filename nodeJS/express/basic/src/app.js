import express from "express";
import path from "path";


//Initialze Express
const app = express();


/**
 * Plugin View Engine
 * @returns {HTML Template} Using Pug(Jade)
 */
app.set("views", path.join(__dirname, "..", "views"));

app.set("view engine", "pug");



//Base Route
app.get("/", (req, res) => {
    res.render("index");
});


//Spin-up Server
app.listen(8000, () => console.log("Server started on Port :8000"));


