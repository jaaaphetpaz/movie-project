import React from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
  const { movies, setSearchKey, onSearch } = props;

  return (
    <>
      <div>
        <Link to={"/"}>
          <button className="back__btn">Back</button>
        </Link>
      </div>
      <div className="input__wrapper">
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
      </div>
      <div>
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
      </div>
    </>
  );
};

export default Search;
