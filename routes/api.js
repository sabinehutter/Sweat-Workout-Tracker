const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
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

router.get("/api/workouts", (req, res) => {
    Workout.find().then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req,res) => {
    Workout.find({}).limit(7).then( dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    }).catch (err => {
        res.json(err);
    })
})

router.delete("/api/workouts", ({ body}, res) => {
    Workout.findByIdAndDelete(body.id).then(() => {
        res.json(true)
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;