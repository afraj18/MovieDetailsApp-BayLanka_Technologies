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
    <div className="d-flex vh-100 bg-primary-subtle justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-primary">
          Add +{" "}
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Lead Actor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>
                    <input type="date" disabled value={movie.releaseDate} />
                  </td>
                  <td>{movie.leadActor}</td>
                  <td>
                    <Link
                      to={`/getmovie/${movie._id}`}
                      className="btn btn-success btn-sm ml-1"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => handleDelete(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Movie;
