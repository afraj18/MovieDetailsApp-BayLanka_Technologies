/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Movie() {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deletemovie/" + id)
      .then((res) => {
        console.log("deleted");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex  bg-primary-subtle justify-content-center align-items-center">
      <div className="w-75 bg-white rounded m-3 p-3">
        <Link to="/create" className="btn btn-primary mb-3">
          Add +
        </Link>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {movies.map((movie) => {
            const path = movie.poster;

            // 1. Split the path using the forward slash
            const parts = path.split("/");

            // 2. Get the last element (assumed to be the filename)
            const filename = parts[parts.length - 1];

            return (
              <div key={movie._id} className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <Link
                    to={`/getmovie/${movie._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={`../../public/images/${filename}`}
                      className="card-img-top rounded-top"
                      alt="Movie Poster"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
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
                  </Link>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <Link
                      to={`/viewmoviedetails/${movie._id}`}
                      className="btn btn-outline-info"
                      style={{ width: "120px" }}
                    >
                      View
                    </Link>
                    <Link
                      to={`/getmovie/${movie._id}`}
                      className="btn btn-outline-success "
                      style={{ width: "60px" }}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(movie._id)}
                      style={{ width: "75px" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movie;
