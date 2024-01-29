/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

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
                <tr key={movie.id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>
                    <input type="date" disabled value={movie.releaseDate} />
                  </td>
                  <td>{movie.leadActor}</td>
                  <td>
                    <Link to="/update" className="btn btn-success btn-sm ml-1">
                      Edit
                    </Link>
                    <button className="btn btn-danger btn-sm">Delete</button>
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
