// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateMovie() {
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const [leadActor, setLeadActor] = useState();

  const navigate = useNavigate();

  const addMovie = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", {
        title,
        genre,
        releaseDate,
        leadActor,
      })
      .then((result) => {
        navigate("/");
        console.log(result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary-subtle justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={addMovie}>
          <h2>Add New Movies</h2>
          <div className="mb-3">
            <label htmlFor="movieTitle" className="form-label">
              Movie Title
            </label>
            <input
              type="text"
              className="form-control"
              id="movieTitle"
              aria-describedby="movieTitle"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input
              type="text"
              className="form-control"
              id="genre"
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Release Date
            </label>
            <input
              type="date"
              className="form-control"
              id="releaseDate"
              onChange={(e) => setReleaseDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Lead Actor
            </label>
            <input
              type="text"
              className="form-control"
              id="leadActor"
              onChange={(e) => setLeadActor(e.target.value)}
            />
          </div>

          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </div>
  );
}

export default CreateMovie;
