import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [search, setSearch] = useState([]);

  async function swagAF() {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=63d0f37b&s=red`
    );
    setSearch(response.data.Search);
    console.log(response.data.Search);
  }

  useEffect(() => {
    swagAF();
  }, []);

  return (
    <div className="movies">
      {search.map((movie) => (
        <div key={movie.imdbId} className="movie__card">
          <div className="movie__wrap">
            <img className="movie__pos" src={movie.Poster} alt="Poster" />
            <h3>{movie.Title}</h3>
            <h4>{movie.Year}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
