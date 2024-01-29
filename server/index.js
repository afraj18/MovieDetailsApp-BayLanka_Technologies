const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const MovieModel = require("./models/MoviesModel");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://AJAY:abcd1234@cluster0.xuwp5.mongodb.net/?retryWrites=true&w=majority"
);

//API Reqests
app.post("/create", (req, res) => {
  MovieModel.create(req.body)
    .then((movies) => res.json(movies))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  MovieModel.find({})
    .then((movies) => res.json(movies))
    .catch((e) => res.json(e));
});

app.listen(3001, () => {
  console.log("Server is running");
});
