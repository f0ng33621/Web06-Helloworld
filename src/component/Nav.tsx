import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" bg-primary1 flex justify-between items-center px-5">
      <div>
        <Icon icon="lucide:menu" width={50} color="#60405C" />
      </div>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" width={198} />
        </Link>
      </div>
      <div className=" flex gap-2">
        <Icon icon="mingcute:heart-fill" width={50} color="#60405C" />
        <Icon icon="fluent:cart-20-filled" width={50} color="#60405C" />
        <Link to="/login">
          <Icon
            icon="material-symbols:account-circle"
            width={50}
            color="#60405C"
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
