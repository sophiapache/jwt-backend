const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// global.Lesson = require("./api/models/lessonModel");
// const lessonRoutes = require("./api/routes/lessonRoutes");

// mongoose.Promise = global.Promise;
// mongoose.connect(
//   `mongodb+srv://user:${process.env.MONGOPW}@cluster0.ygqcbht.mongodb.net/?retryWrites=true&w=majority`
// );

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// lessonRoutes(app);
// slideRoutes(app);
// quizRoutes(app);
// studentLessonRoutes(app);
// userRoutes(app);

app.listen(port);

// a 404 page not found
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port: http://localhost:${port}`);
