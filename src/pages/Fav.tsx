import Nav from "../component/Nav";
import Footer from "../component/Footer";
import LikeSelect from "../component/catagory/LikeSelect";
import LikeList from "../component/catagory/LikeList";

function Fav() {
  return (
    <>
      <Nav />
      <LikeSelect />
      <LikeList />
      <Footer />
    </>
  );
}

export default Fav;
