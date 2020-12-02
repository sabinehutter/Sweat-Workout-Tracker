const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, rees) => {
    Workout.create({}).then(dbWorkout => {
        resizeBy.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("api/workouts/:id", ({ body, params }, res) => {
    Workout.findByAndUpdate(
        params.id, 
        { $push: { exercise : body}},
        {new : true, runValidators: true}
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});