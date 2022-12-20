import React from "react";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";
import Recommended from "./Recommended";

const Home = () => {
  return (
    <div>
      <Nav />
      <Landing />
      <Recommended />
      <Footer />
    </div>
  );
};

export default Home;
