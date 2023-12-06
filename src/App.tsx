import React from "react";
import Nav from "./component/Nav";
import "../dist/output.css";
import SearchBar from "./component/SearchBar";
import HeroSection from "./component/HeroSection";
import Container from "./component/Container";
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
