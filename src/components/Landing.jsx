import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieImg from "../assets/MovieImg.svg";

const Landing = (props) => {
  const { clic, setSearchKey } = props;

  return (
    <div className="landing">
      <h1 className="landing__title">
        Time to get ready for an epic movie night!
      </h1>
      <img src={MovieImg} alt="" />

      <div className="input__wrapper">
        <Link to={"/search"}>
          <button className="landing__btn">
            Start looking for your next show!
          </button>
        </Link>
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
