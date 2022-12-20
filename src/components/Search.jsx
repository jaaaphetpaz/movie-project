import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = (props) => {
  const {} = props;
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState([]);

  const getMovies = async (key) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=63d0f37b&s=${key}`
    );
    setMovies(response.data.Search);
  };

  const onSearch = () => {
    getMovies(searchKey);
  };

  useEffect(() => {
    getMovies("fast");
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search by title or keyword"
        onChange={(event) => setSearchKey(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
      />
      <button className="search__btn" onClick={() => onSearch()}>
        Search
      </button>

      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.imdbId} className="movie__card">
            <div className="movie__wrap">
              <img className="movie__pos" src={movie.Poster} alt="Poster" />
              <h3>{movie.Title}</h3>
              <h4>{movie.Year}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
