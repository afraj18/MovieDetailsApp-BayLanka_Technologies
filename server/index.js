const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const MovieModel = require("./models/MoviesModel");

const app = express();
app.use(cors());
app.use(express.json());

const connectionString = process.env.DB_CONNECTION_STRING;

mongoose.connect(connectionString);

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

app.get("/getmovie/:id", (req, res) => {
  const id = req.params.id;
  MovieModel.findById({ _id: id })
    .then((movie) => res.json(movie))
    .catch((e) => res.json(e));
});

app.put("/updateMovie/:id", (req, res) => {
  const id = req.params.id;
  MovieModel.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      genre: req.body.genre,
      releaseDate: req.body.releaseDate,
      leadActor: req.body.leadActor,
    }
  )
    .then((movie) => res.json(movie))
    .catch((e) => res.json(e));
});

app.delete("/deletemovie/:id", (req, res) => {
  const id = req.params.id;
  MovieModel.findByIdAndDelete({ _id: id })
    .then((movie) => res.json(movie))
    .catch((e) => res.json(e));
});

app.listen(3001, () => {
  console.log("Server is running");
});
