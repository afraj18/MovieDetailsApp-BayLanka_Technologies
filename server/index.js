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

app.listen(3001, () => {
  console.log("Server is running");
});
