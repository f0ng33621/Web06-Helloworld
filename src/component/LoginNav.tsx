import { useState } from "react";
import logo from "../assets/logo 198_108.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function LoginNav() {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);

  const toggleSignIn = () => {
    setIsOpenSignIn(!isOpenSignIn);
  };
  return (
    <>
      <div className=" bg-primary1 flex justify-between items-center px-5">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" width={198} />
          </Link>
        </div>
        <div>
          <button onClick={toggleSignIn}>
            <Icon
              icon="material-symbols:account-circle"
              width={50}
              color="#60405C"
            />
          </button>
        </div>
      </div>
      <div className=" flex justify-end">
        {isOpenSignIn && (
          <div className=" w-[10%] bg-primary3 font-kungop text-primary4 text-center text-2xl absolute mr-5 -mt-8 z-2">
            <Link to="/login">
              <div className=" hover:bg-primary2">Sign In</div>
            </Link>
            <Link to="/">
              <div className=" hover:bg-primary2">Sign Out</div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default LoginNav;
