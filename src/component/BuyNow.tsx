import React from "react";
import colorfulSharpeners from "../assets/กบเหลาหลากสี228.78x123px.png";
function BuyNow() {
  return (
    <div className=" bg-primary3 flex justify-center gap-10 text-primary4 py-20">
      <div className="  bg-primary5 bg-primary5 border-2 border-primary4 p-5 rounded-[20px] ">
        <p className=" text-center ml-[9cm] bg-red-500 w-[45px] h-[31px]flex items-center justify-center text-white">
          -50%{" "}
        </p>
        <img src={colorfulSharpeners} alt="" />
      </div>

      <div className=" w-[40%] pt-[1cm] ">
        <p> &lt; เครื่องเขียน </p>
        <p> กบเหลาดินสอ Faber-Castell</p>
        <div className="flex gap-2 pt-3">
          <p className=" line-through flex items-center justify-center">
            {" "}
            ฿ 18.00{" "}
          </p>
          <p className=" text-white bg-red-500 w-[85px] h-[37px] flex items-center justify-center">
            {" "}
            ฿ 9.00
          </p>
        </div>

        <p> COLOR </p>

        <div className="flex gap-[11px] border-b-2 border-b-primary4 pb-5 pt-3">
          <div className=" w-[42px] h-[42px] rounded-full bg-talay"> </div>
          <div className=" w-[42px] h-[42px] rounded-full bg-pueak"> </div>
          <div className=" w-[42px] h-[42px] rounded-full bg-pink"> </div>
          <div className=" w-[42px] h-[42px] rounded-full bg-sky"> </div>
        </div>

        <p className=" pt-3 pb-2">จำนวนสินค้า</p>
        <div className=" flex justify-between">
          <div className=" flex gap-2">
            <p className=" bg-primary1 w-[28px] h-[27px] flex items-center justify-center">
              +
            </p>
            <p>1</p>
            <p className="bg-primary1 w-[28px] h-[27px] flex items-center justify-center">
              -
            </p>
          </div>
          <p className=" text-center"> ฿9.00 </p>
        </div>

        <div className=" flex pt-2 pb-2 justify-between">
          <p>TOTAL (1 item)</p>
          <p> ฿ 9.00</p>
        </div>

        <div className=" flex gap-5 justify-center">
          <p className=" bg-primary5 border-2 border-primary4 p-5 rounded-[20px]">
            Add To Cart
          </p>
          <p className="bg-primary5 border-2 border-primary4 p-5 rounded-[20px]">
            Buy Now
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
