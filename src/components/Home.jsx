import React from "react";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";

const Home = (props) => {
  const { searchKey, setSearchKey, onSearch } = props;

  return (
    <div>
      <Nav />
      <Landing
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        onSearch={onSearch}
      />
      <Footer />
    </div>
  );
};

export default Home;
