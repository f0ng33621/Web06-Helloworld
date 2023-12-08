import ShopSectionBox from "./ShopSectionBox";

function Container() {
  return (
    <div className="bg-primary3 h-full w-screen">
      <div className="flex justify-between px-4">
        <a href="">
          <img
            src="/src/assets/menuเครื่องเขียน 343.44x425 px.png"
            width="343.44"
            height="425"
            alt="menu-เครื่องเขียน"
          />
        </a>
        <a href="">
          <img
            src="/src/assets/menuแต่งกาย 343.44x425 px.png"
            width="343.44"
            height="425"
            alt="menu-แต่งกาย"
          />
        </a>
        <a href="">
          <img
            src="/src/assets/menuหนังสือ343.44x425px.png"
            width="343.44"
            height="425"
            alt="menu-หนังสือ"
          />
        </a>
        <a href="">
          <img
            src="/src/assets/menuกีฬา 343.44x425 px.png"
            width="343.44"
            height="425"
            alt="menu-กีฬา"
          />
        </a>
      </div>

      <div className="flex justify-center mb-30">
        <ShopSectionBox />
      </div>

      <div className="flex justify-center mb-30">
        <ShopSectionBox />
      </div>
    </div>
  );
}

export default Container;
