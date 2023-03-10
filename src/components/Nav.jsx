import React from "react";
import { Link } from "react-router-dom";
import jpzLogo from "../assets/jpzLogo.png";
import "./style.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav__content-wrapper">
        <div className="logo">
          <img className="nav__img" src={jpzLogo} alt="" />
        </div>
        <ul className="linkz">
          <li className="link">
            Home<i className="fas fa-home"></i>
          </li>
          <li className="link">
            Movies<i className="fas fa-film"></i>
          </li>
          <li className="link">
            TV Shows<i className="fas fa-tv"></i>
          </li>
          <li className="link">
            Random<i className="fas fa-random"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
