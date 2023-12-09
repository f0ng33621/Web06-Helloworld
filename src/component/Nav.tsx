import { useState } from "react";
import logo from "../assets/logo 198_108.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSignIn = () => {
    setIsOpenSignIn(!isOpenSignIn);
  };
  return (
    <>
      <div className=" bg-primary1 flex justify-between items-center px-5">
        <div>
          <button onClick={toggleMenu}>
            <Icon icon="lucide:menu" width={50} color="#60405C" />
          </button>
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" width={198} />
          </Link>
        </div>
        <div className=" flex gap-2">
          <Link to="/fav">
            <Icon icon="mingcute:heart-fill" width={50} color="#60405C" />
          </Link>
          <Icon icon="fluent:cart-20-filled" width={50} color="#60405C" />
          <button onClick={toggleSignIn}>
            <Icon
              icon="material-symbols:account-circle"
              width={50}
              color="#60405C"
            />
          </button>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className=" flex flex-col w-[10%] bg-primary3 font-kungop text-primary4 text-center text-2xl absolute ml-5 -mt-8">
            <Link to="/catagory">
              <div className=" hover:bg-primary2">หมวดเครื่องเขียน</div>
            </Link>
            <div className=" hover:bg-primary2">หมวดเครื่องแต่งกาย</div>
            <div className=" hover:bg-primary2">หมวดหนังสือ</div>
            <div className=" hover:bg-primary2">หมวดอุปกรณ์กีฬา</div>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        {isOpenSignIn && (
          <div className=" flex flex-col w-[10%] bg-primary3 font-kungop text-primary4 text-center text-2xl absolute -ml-5 -mt-8">
            <Link to="/login">
              <div className=" hover:bg-primary2">Sign In</div>
            </Link>
            <div className=" hover:bg-primary2">Sign Out</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
