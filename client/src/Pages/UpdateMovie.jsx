// eslint-disable-next-line no-unused-vars
import React from "react";

function UpdateMovie() {
  return (
    <div className="d-flex vh-100 bg-primary-subtle justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input type="text" className="form-control" id="genre" />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Release Date
            </label>
            <input type="date" className="form-control" id="releaseDate" />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Lead Actor
            </label>
            <input type="text" className="form-control" id="leadActor" />
          </div>

          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateMovie;
