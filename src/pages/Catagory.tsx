import CatagorySelect from "../component/catagory/CatagorySelect";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import ItemList1 from "../component/catagory/ItemList1";

function catagory() {
  return (
    <div>
      <Nav />
      <CatagorySelect />
      <ItemList1 />
      <Footer />
    </div>
  );
}

export default catagory;
