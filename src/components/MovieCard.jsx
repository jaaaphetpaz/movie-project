import React from "react";

const MovieCard = () => {
  return (
    <div class="movie__card">
      <div class="movie__wrap">
        <img
          class="movie__pos"
          src="https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg"
          alt="Poster"
        />
        <h3>The Great Gatsby</h3>
        <h4>2013</h4>
      </div>
    </div>
  );
};

export default MovieCard;
