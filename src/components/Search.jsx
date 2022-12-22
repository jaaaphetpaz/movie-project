import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DrawerSearch from "./DrawerSearch";

const Search = (props) => {
  const { movies, setSearchKey, onSearch } = props;
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieImdb, setMovieImdb] = useState([]);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const getMovieInfo = async (id) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=63d0f37b`
    );
    setMovieInfo(response.data);
    console.log(response.data);
  };

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
            <div
              key={movie.imdbID}
              className="movie__card"
              onClick={() => (getMovieInfo(movie.imdbID), setOpen(true))}
            >
              <div className="movie__wrap">
                <img className="movie__pos" src={movie.Poster} alt="Poster" />
                <h3>{movie.Title}</h3>
                <h4>{movie.Year}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DrawerSearch
        movieInfo={movieInfo}
        open={open}
        setOpen={setOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Search;
