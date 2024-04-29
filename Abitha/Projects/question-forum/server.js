const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path")
const Question = require("./Modal");

mongoose.set("strictQuery", false);

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());


app.use(express.static("./client/build"))


app.get("/data", async (req, res) => {
  const questions = await Question.find().sort({ _id: -1 });
  res.json(questions);
});

app.post("/question", async (req, res) => {
  req.body.questionDate = Date.now()
  const newQuestion = new Question(req.body);
  try {
    await newQuestion.save();
    res.json(await Question.find().sort({ _id: -1 }));
  } catch (error) {
    res.status(403).send("Something went wrong");
  }
});

app.post("/answer/:id", async (req, res) => {
  const obj = await Question.findById(req.params.id);
  obj.answers.push({ ...req.body, like: 0,answerDate:Date.now() });
  try {
    await obj.save();
    res.json(await Question.find().sort({ _id: -1 }));
  } catch (error) {
    res.status(403).send("Something went wrong");
  }
});

app.post("/like", async (req, res) => {
  const obj = await Question.findById({ _id: req.body.questionId });

  const ansObj = obj.answers.find((prev) => prev._id == req.body.answerId);
  ansObj.like = ansObj.like + req.body.count;
  try {
    await obj.save();
    res.json({message:"ok"})
  } catch (error) {
    res.status(403).send("Something went wrong");
  }
});




app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname,"client","build","index.html"))
})

mongoose.connect("mongodb://0.0.0.0/question-forum").then(() => {
  console.log("Connected to DB");
})
.catch(err=>{
  console.log(err);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started %d.....", PORT);
});

// const data = [
//   {
//     id: "-42343vas",
//     question: "How to learn Web Development?",
//     askedBy: "Sample Name",
//     questionDate: Date.now(),
//     answers: [
//       {
//         id: "vasdvs45csc",
//         like: 0,
//         answeredBy: "Sundar Pichai",
//         answerDate: Date.now(),
//         answer: "Anyway, I this,   Plabon Dutta Sep 22, 2020 at 17:03",
//       },
//     ],
//   }
// ];
