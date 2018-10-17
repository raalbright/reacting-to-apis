import React from "react";

const MovieCard = ( { title, description, producer, director } ) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{ title }</h5>
      <div className="row card-subtitle ml-0">
        <small className="mb-2 text-muted small mr-1">Directed by: { director }</small>
        <small className=" mb-2 text-muted small">Produced by: { producer }</small>
      </div>
      <p className="card-text">{ description }</p>
    </div>
  </div>
);

export default MovieCard;
