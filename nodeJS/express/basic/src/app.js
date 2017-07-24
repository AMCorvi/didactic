import * as express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("These violent delights  have violent ends");
});

app.listen(3000, () => console.log("Server started on Port :3000"));


