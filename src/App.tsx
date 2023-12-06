import React from "react";
import Nav from "./component/Nav";
import "../dist/output.c
import SearchBar from "./component/SearchBar";
import HeroSection from "./component/HeroSection";
import Container from "./component/Container";
import ShopSectionBox from "./component/ShopSectionBox";
import HeroSection from "./component/HeroSection";  
import Footer from "./component/Footer.tsx";

function App() {
  return (
    <>
      <Nav/>
      <SearchBar/>
      <HeroSection/>
      <Container/>
      <Footer />
    </>
  );
}

export default App;
