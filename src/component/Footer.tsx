import React from "react";
import logoFooter from "../assets/หัวใจfooter257x236px.png";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className=" flex justify-center gap-20 bg-primary1 py-20 text-primary4">
      <div className="w-[257px] h-[236px] ">
        <img src={logoFooter} alt="" />
      </div>
      <div>
        <div className="">
          <p className="font-bold">CONTACT </p>
          <p>IG: b.bxth._ : WEB DESIGN </p>
          <p> IG : phannaphat_4711 : WEB DESIGN </p>
          <p>IG :f0ng.wst : DEVOPS</p>
          <p>IG : nnammog : FRONTEND </p>
          <p>IG : pheamawas : FRONTEND</p>
          <p>IG : isola_513i : FRONTEND</p>
        </div>
      </div>

      <div>
        <p className="font-bold">INFORMATION </p>
        <p>หมวดเครื่องเขียน </p>
        <p>หมวดเครื่องแต่งกาย </p>
        <p>หมวดหนังสือ</p>
        <p>หมวดอุปกรณ์กีฬา</p>
      </div>

      <div>
        <p className="font-bold">FOLLOW</p>
        <div className="flex gap-1 pt-1">
          <Icon icon="mingcute:facebook-fill" color="#60405c" width={24} />
          <Icon icon="uil:instagram-alt" color="#60405c" width={24} />
          <Icon icon="fa6-brands:square-twitter" color="#60405c" width={20} />
          <Icon icon="mingcute:youtube-fill" color="#60405c" width={26} />
        </div>
        <div className="pt-6">
          <p className="font-bold">CREDIT PICTURE</p>
          <p>B2S</p>
          <p>MOSHI MOSHI</p>
          <p>MOLTEN </p>
          <p>CARSON THAILAND</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
