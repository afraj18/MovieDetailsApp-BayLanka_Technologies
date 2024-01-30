// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ViewMovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  //   console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getmovie/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const path = movie.poster || "";
  const parts = path.split("/");
  //   console.log(parts);

  const filename = parts[parts.length - 1];

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`../../public/images/${filename}`}
            alt="Movie Poster"
            className="img-fluid rounded"
            style={{ borderRadius: "10px" }}
          />
        </div>

        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p className="card-text">
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p className="card-text">
                <strong>Release Date:</strong>{" "}
                {new Date(movie.releaseDate).toLocaleDateString()}
              </p>
              <p className="card-text">
                <strong>Lead Actor:</strong> {movie.leadActor}
              </p>
            </div>
          </div>
          <Link to="/" className="btn btn-outline-dark">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewMovieDetails;
