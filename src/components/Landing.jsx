import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <h1 class="landing__title">Time to get ready for an epic movie night!</h1>
      <h2 class="landing__subtitle">
        Find your new favourite shows and movies here!
      </h2>
      <div class="input__wrapper">
        <input type="text" placeholder="Search by title or keyword"></input>
        <button class="search__btn">Search</button>
      </div>
    </div>
  );
};

export default Landing;
