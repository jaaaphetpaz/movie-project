import React from "react";

const MovieCard = ({ title, year, poster }) => {
  return (
    <div class="movie__card">
      <div class="movie__wrap">
        <img class="movie__pos" src={poster} alt="Poster" />
        <h3>{title}</h3>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
