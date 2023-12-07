import React from "react";
import { Icon } from "@iconify/react";

function ItemCard({ img, name, price }) {
  return (
    <div className="bg-primary5 border-[3px] border-primary4 rounded-[15px] p-2 flex flex-col justify-end">
      <div>
        <img src={img} alt="" />
      </div>
      <div className=" font-kungop text-primary4 text-[24px]">
        <p>{name}</p>
        <div className="flex justify-between items-center">
          <p>฿ {price}</p>
          <div className="flex items-center">
            <Icon icon="mingcute:heart-line" width={35} color="#60405c" />
            <Icon icon="fluent:cart-20-filled" width={38} color="#60405C" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
