const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path")

const app = express();

const PORT = 3000;

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true , useFindAndModify : false});

// Routes
app.use(require("./routes/api"))
app.use(require("./routes/view"))


app.listen(4000, () => {
    console.log("App running on port 4000!");
});