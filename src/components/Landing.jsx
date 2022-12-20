import React, { useState } from "react";
import MovieImg from "../assets/MovieImg.svg";

const Landing = () => {
  const [searchKey, setSearchKey] = useState([]);

  console.log(searchKey);

  return (
    <div className="landing">
      <h1 className="landing__title">
        Time to get ready for an epic movie night!
      </h1>
      <img src={MovieImg} alt="" />

      <div className="input__wrapper">
        <input
          onChange={(event) => setSearchKey(event.target.value)}
          type="text"
          placeholder="Search by title or keyword"
        ></input>
        <button className="search__btn">Search</button>
      </div>
      <h2 className="landing__subtitle">
        Find your new favourite shows and movies here!
      </h2>
      <h1 className="arrow">⬇</h1>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Landing;
