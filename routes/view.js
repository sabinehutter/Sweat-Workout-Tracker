const router = require("express").Router();
const Workout = require("../models/workout");

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"))
  });
  
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"))
  });
  

module.exports = router;

