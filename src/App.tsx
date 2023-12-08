import Nav from "./component/Nav";
import "./output.css";
import SearchBar from "./component/SearchBar";
import HeroSection from "./component/HeroSection";
import Footer from "./component/Footer.tsx";
import Container from "./component/Container.tsx";

function App() {
  return (
    <>
      <Nav />
      <SearchBar />
      <HeroSection />
      <Container />
      <Footer />
    </>
  );
}

export default App;
