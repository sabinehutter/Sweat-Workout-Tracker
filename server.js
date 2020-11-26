const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path")

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.send(index.html);
});

app.get("/exercise", (req, res) => {
    // res.send(exercise.html);
    res.sendFile(path.join(__dirname, "public/exercise.html"))
});

// Routes
// GET api/workouts
// GET /exercise


app.listen(3000, () => {
    console.log("App running on port 3000!");
});