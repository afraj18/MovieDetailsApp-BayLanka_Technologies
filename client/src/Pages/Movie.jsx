/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Link } from "react-router-dom";
function Movie() {
  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Leo",
      genre: "Action",
      releaseDate: "23/12/2023",
      leadActor: "Vijay",
    },
  ]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
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
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Delete</button>
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
