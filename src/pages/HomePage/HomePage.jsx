import React from "react";

// local components
import Greeting from "./components/Greeting";

// global components
import NavBar from "../../components/NavBar";
import SearchBox from "./components/SearchBox";
import CategoryList from "./components/CategoryList";

const HomePage = () => {
  return (
    <>
      <NavBar isHome="true" />
      <Greeting />
      <SearchBox />
      <CategoryList />
    </>
  );
};

export default HomePage;
