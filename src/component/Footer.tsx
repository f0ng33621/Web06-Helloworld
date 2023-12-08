import logoFooter from "../assets/หัวใจfooter257x236px.png";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className=" flex justify-center gap-20 bg-primary1 py-20 text-primary4 font-kungop">
      <div className="w-[257px] h-[236px] ">
        <img src={logoFooter} alt="" />
      </div>
      <div>
        <div className="">
          <p className="font-bold">CONTACT </p>
          <p>
            <a href="https://www.instagram.com/b.bxth._/">
              IG: b.bxth._ : WEB DESIGN
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/phannaphat_4711/">
              IG : phannaphat_4711 : WEB DESIGN
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/f0ng.wst/">
              IG :f0ng.wst : DEVOPS
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/nnammog/">
              IG : nnammog : FRONTEND
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/pheamawas/">
              IG : pheamawas : FRONTEND
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/isola_513i/">
              IG : isola_513i : FRONTEND
            </a>
          </p>
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
