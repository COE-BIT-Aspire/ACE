const mongoose = require("mongoose")

const Question = new mongoose.Schema({
    question:String,
    askedBy:String,
    questionDate :{
        type:Number,
    },
    answers:[
        {
            id:String,
            like:Number,
            answeredBy :String,
            answerDate : {
                type:Number,
            },
            answer:String
        }
    ]
})



module.exports = mongoose.model("Question",Question)