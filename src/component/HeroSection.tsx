import React from "react";

function HeroSection() {
  return (
    <div className="bg-primary5 wh-hero w-screen flex justify-center items-center">
      <div className="bg-primary3 wh-local border-4 border-primary4 flex justify-start relative">
        <div className="text-size64px font-regular text-uppercase p-4 overflow-hidden">
          <p>Local</p>
          <p>Marketplace</p>
          <p className="text-size96px">For student</p>
        </div>
        <div className="bg-primary1 wh-shop border-4 border-primary4 absolute bottom-shop items-center flex justify-center text-uppercase px-4 ">
          <p>Shop now</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
