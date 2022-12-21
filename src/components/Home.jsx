import React, { useState } from "react";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";
import Recommended from "./Recommended";

const Home = (props) => {
  const { searchKey, setSearchKey, getMovies, onSearch } = props;

  return (
    <div>
      <Nav />
      <Landing
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        onSearch={onSearch}
      />
      <Recommended />
      <Footer />
    </div>
  );
};

export default Home;
