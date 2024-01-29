// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateMovie() {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const [leadActor, setLeadActor] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getmovie/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setGenre(res.data.genre);
        setReleaseDate(res.data.releaseDate);
        setLeadActor(res.data.leadActor);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  const updateMovie = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateMovie/" + id, {
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
        <form onSubmit={updateMovie}>
          <h2>Update Movie Details</h2>
          <div className="mb-3">
            <label htmlFor="movieTitle" className="form-label">
              Movie Title
            </label>
            <input
              type="text"
              className="form-control"
              id="movieTitle"
              aria-describedby="movieTitle"
              value={title}
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
              value={genre}
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
              value={releaseDate}
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
              value={leadActor}
              onChange={(e) => setLeadActor(e.target.value)}
            />
          </div>

          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateMovie;
