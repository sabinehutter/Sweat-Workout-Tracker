const mongose = require("mongoose");
const Schema = mongose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
                {
                    type: {
                        type: String,
                        trim: true, 
                        required: "Please enter an exercise type"
                    },
                    name : {
                        type:  String,
                        trim: true,
                        required:  "Please enter an exercise name"
                    },
                    duration: {
                        type: Number,
                        required : "Please enter an exercise duration (in minutes)"
                    },
                    weight: {
                        type: Number
                    },
                    reps : {
                        type: Number
                    },
                    sets : {
                        type: Number
                    },
                    distance : {
                        type: Number
                    }
                }
        ]
    },
    {
        toJSON: {
            virtuals : true
        }
    }
)


const Workout = mongose.model("Workout", workoutSchema)
modoule.exports = Workout