import React, { useState } from "react";
import colorfulSharpeners from "../assets/กบเหลาหลากสี228.78x123px.png";
import greenSharpeners from "../assets/กบเหลาสีเขียว426x426px.png";
import pinkSharpeners from "../assets/กบเหลาสีชมพู429x429px.png";
import blueSharpeners from "../assets/กบเหลาสีฟ้า429x429px.png";
import purpleSharpeners from "../assets/กบเหลาสีม่วง429x429px.png";

function BuyNow() {
  const images = [
    colorfulSharpeners,
    greenSharpeners,
    purpleSharpeners,
    pinkSharpeners,
    blueSharpeners,
  ];

  const [image, setImage] = useState(0);

  const handleClick = (index: number) => {
    setImage(index);
  };

  return (
    <div className=" bg-primary3 flex justify-center items-center gap-10 text-primary4 py-20 font-kungop text-2xl ">
      <button
        onClick={() => handleClick(0)}
        className=" bg-primary5 border-2 border-primary4 p-5 rounded-[20px] "
      >
        <p className=" text-center bg-red-500 w-[45px] h-[31px] text-white">
          -50%
        </p>
        <img src={images[image]} alt="" width={400} />
      </button>

      <div className=" w-[40%]">
        <p> &lt; เครื่องเขียน </p>
        <p className=" text-4xl"> กบเหลาดินสอ Faber-Castell</p>
        <div className="flex gap-2 pt-3">
          <p className=" line-through flex items-center justify-center">
            ฿ 18.00
          </p>
          <p className=" text-white bg-red-500 w-[85px] h-[37px] flex items-center justify-center">
            ฿ 9.00
          </p>
        </div>

        <p> COLOR </p>

        <div className="flex gap-[11px] border-b-2 border-b-primary4 pb-5 pt-3">
          <button
            onClick={() => handleClick(1)}
            className=" w-[42px] h-[42px] rounded-full bg-talay"
          ></button>
          <button
            onClick={() => handleClick(2)}
            className=" w-[42px] h-[42px] rounded-full bg-pueak"
          ></button>
          <button
            onClick={() => handleClick(3)}
            className=" w-[42px] h-[42px] rounded-full bg-pink"
          ></button>
          <button
            onClick={() => handleClick(4)}
            className=" w-[42px] h-[42px] rounded-full bg-sky"
          ></button>
        </div>

        <div>
          <p className=" pt-3 pb-2">จำนวนสินค้า</p>
          <div className=" flex justify-between">
            <div className=" flex gap-2 items-center">
              <p className=" bg-primary1 w-[28px] h-[27px] flex items-center justify-center">
                +
              </p>
              <p>1</p>
              <p className=" bg-primary1 w-[28px] h-[27px] flex items-center justify-center">
                -
              </p>
            </div>
            <p className=" text-center"> ฿9.00 </p>
          </div>
          <div className=" flex pt-2 pb-2 justify-between">
            <p>TOTAL (1 item)</p>
            <p> ฿ 9.00</p>
          </div>
          <div className=" flex gap-10 justify-center">
            <button className=" bg-primary5 border-2 border-primary4 p-5 rounded-[20px]">
              Add To Cart
            </button>
            <button className="bg-primary5 border-2 border-primary4 p-5 rounded-[20px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
