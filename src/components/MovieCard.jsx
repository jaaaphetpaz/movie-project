import React from "react";

const MovieCard = ({ title, year, poster }) => {
  return (
    <div className="movie__card">
      <div className="movie__wrap">
        <img className="movie__pos" src={poster} alt="Poster" />
        <h3>{title}</h3>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
