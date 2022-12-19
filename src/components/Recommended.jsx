import React from "react";
import MovieCard from "./MovieCard";

const Recommended = () => {
  return (
    <div className="movies">
      <MovieCard
        title={"The Great Gatsby"}
        year={"2013"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg"
        }
      />
      <MovieCard
        title={"The Witcher"}
        year={"2019"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        }
      />
      <MovieCard
        title={"Crazy Rich Asians"}
        year={"2018"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_SX300.jpg"
        }
      />
      <MovieCard
        title={"Lone Survivor"}
        year={"2013"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_SX300.jpg"
        }
      />
      <MovieCard
        title={"Wall Street: Money Never Sleeps"}
        year={"2010"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BMTU5MDEzMzYwMF5BMl5BanBnXkFtZTcwNTcwMjUxMw@@._V1_SX300.jpg"
        }
      />
      <MovieCard
        title={"The King"}
        year={"2019"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BMWZkNzNlMzMtMjM5ZS00MWYzLWFmMmUtMjE1ODM3NjBlODA5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        }
      />
      <MovieCard
        title={"La La Land"}
        year={"2016"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg"
        }
      />
      <MovieCard
        title={"Demon Slayer: Mugen Train"}
        year={"2020"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg"
        }
      />
      <MovieCard
        title={"Casino Royale"}
        year={"2006"}
        poster={
          "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        }
      />
    </div>
  );
};

export default Recommended;
