import { useState } from "react";
import { Icon } from "@iconify/react";

export interface ItemCardProps {
  img: string;
  name: string;
  price: string;
  sale?: boolean;
  percent?: string;
  newPrice?: string;
}
function ItemCard({
  img,
  name,
  price,
  sale,
  percent,
  newPrice,
}: ItemCardProps) {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handlehover = () => {
    setIsHover(!isHover);
  };
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="bg-primary5 border-[3px] border-primary4 rounded-[15px] p-2 flex flex-col justify-end">
      {sale ? (
        <div className=" flex flex-col">
          <p className=" font-kungop justify-self-start self-end text-white bg-red-500 p-1">
            {percent}
          </p>{" "}
          <img src={img} alt="" />
        </div>
      ) : (
        <img src={img} alt="" />
      )}
      <div className=" font-kungop text-primary4 text-[24px]">
        <p>{name}</p>
        <div className="flex justify-between items-center">
          {sale ? (
            <p className=" text-[22px]">
              <del>฿ {price}</del>
              <span className="text-red-500 ml-3">฿ {newPrice}</span>
            </p>
          ) : (
            <p className=" text-[22px]">฿{price}</p>
          )}
          <div className="flex items-center">
            {isClick ? (
              <Icon
                onClick={handleClick}
                icon="mingcute:heart-fill"
                width={35}
                color="#F392A9"
              />
            ) : isHover ? (
              <Icon
                onMouseLeave={handlehover}
                onClick={handleClick}
                icon="mingcute:heart-line"
                width={35}
                color="#F392A9"
              />
            ) : (
              <Icon
                onMouseEnter={handlehover}
                icon="mingcute:heart-line"
                width={35}
                color="#60405c"
              />
            )}
            <Icon icon="fluent:cart-20-filled" width={38} color="#60405C" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
