import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MovieImg from "../assets/MovieImg.svg";

const Landing = (props) => {
  const { setSearchKey, onSearch } = props;
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1 className="landing__title">
        Time to get ready for an epic movie night!
      </h1>
      <img src={MovieImg} alt="" />

      <h2 className="landing__subtitle">
        Find your new favourite shows and movies here!
      </h2>

      <div className="input__wrapper">
        <input
          required
          type="text"
          placeholder="Search by title or keyword"
          onChange={(event) => setSearchKey(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              navigate("/search");
              onSearch();
            }
          }}
        />

        <Link to={"/search"}>
          <button className="search__btn" onClick={() => onSearch()}>
            Search
          </button>
          {/* <button className="landing__btn">
            Start looking for your next show!
          </button> */}
        </Link>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Landing;
