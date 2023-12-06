import React from "react";
import Nav from "./component/Nav";
import "../dist/output.css";
import SearchBar from "./component/SearchBar";
import HeroSection from "./component/HeroSection";
import Container from "./component/Container";
import ShopSectionBox from "./component/ShopSectionBox";

function App() {
  return (
    <>
      <Nav/>
      <SearchBar/>
      <HeroSection/>
      <Container/>
      
      
    </>
  );
}

export default App;
