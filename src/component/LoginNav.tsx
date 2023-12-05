import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function LoginNav() {
  return (
    <div className=" bg-primary1 flex justify-between items-center px-5">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" width={198} />
        </Link>
      </div>
      <div>
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

export default LoginNav;
