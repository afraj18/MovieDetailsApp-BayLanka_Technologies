// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateMovie() {
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const [leadActor, setLeadActor] = useState();
  const [poster, setPoster] = useState(null);

  const navigate = useNavigate();

  //Add the movie and navigate to home page
  const addMovie = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("genre", genre);
    formData.append("releaseDate", releaseDate);
    formData.append("leadActor", leadActor);
    formData.append("poster", poster);

    console.log(poster);

    axios
      .post("http://localhost:3001/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
        <form onSubmit={addMovie} encType="multipart/form-data">
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
              required
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
              required
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
              required
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
              required
              onChange={(e) => setLeadActor(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Upload Poster
            </label>
            <input
              type="file"
              className="form-control"
              id="poster"
              required
              onChange={(e) => setPoster(e.target.files[0])}
            />
          </div>

          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </div>
  );
}

export default CreateMovie;
