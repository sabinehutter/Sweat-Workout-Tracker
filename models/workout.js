const mongose = require("mongoose");
const Schema = mongose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [

        ]
    }
)


const Workout = mongose.model("Workout", workoutSchema)
modoule.exports = Workout