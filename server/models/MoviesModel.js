const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: String,
  genre: String,
  releaseDate: String,
  leadActor: String,
});

const MovieModel = mongoose.model("movies", MovieSchema);
module.exports = MovieModel;
