import React from "react";
import colorfulSharpeners from "../assets/กบเหลาหลากสี228.78x123px.png";
function BuyNow() {
  return (
    <div className=" bg-primary3 flex justify-center gap-10 text-primary4">
      <div className="  bg-primary5 bg-primary5 border-2 border-primary4 p-5 rounded-[20px] ">
        <img src={colorfulSharpeners} alt="" />
      </div>

      <div className=" w-[30%] ">
        <p> &lt; เครื่องเขียน </p>
        <p> กบเหลาดินสอ Faber-Castell</p>
        <div className="flex gap-2 pt-3">
          <p className=" line-through "> ฿ 18.00 </p>
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

        <p>จำนวนสินค้า</p>
        <p>1</p>
        <p>TOTAL (1 item)</p>
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
