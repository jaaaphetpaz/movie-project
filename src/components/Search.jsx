import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DrawerSearch from "./DrawerSearch";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";

const Search = (props) => {
  const { movies, setSearchKey, onSearch, updatedKey } = props;
  const [movieInfo, setMovieInfo] = useState([]);
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
      <Nav />
      <div>
        <Link to={"/"}>
          <button className="back__btn">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </button>
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
        <h2 style={{ marginLeft: "80px" }}>
          Search results for:
          <span style={{ fontWeight: "normal" }}> "{updatedKey}"</span>
        </h2>
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
      <Footer />
    </>
  );
};

export default Search;
