import colorfulSharpeners from "../../assets/กบเหลาหลากสี228.78x123px.png";
import Collean from "../../assets/สีคอลลีน 48 194x181.82px.png";
import PenOHHO from "../../assets/ปากกาลูกลื่นลายohho212.14x195px.png";
import Ruler12 from "../../assets/ไม้บรรทัดอะลูมิเนียม 12 นิ้ว214.77x192px.png";
import Gsoft from "../../assets/ปากกาลูกลื่นgsoft 171.23x193 px.png";
import Book from "../../assets/หนังสือ171x171px.jpg";
import Pen5 from "../../assets/limited jouice231x194.63px.png";
import MasterArt from "../../assets/สี masterart187x187 px.png";
import CorrectionTape7 from "../../assets/เทปลบคำผิด7มม166x232px.png";
import Volley from "../../assets/ลูกวอลเล่182.68x189px.png";
import Pingpong from "../../assets/ลูกปิงปอง142.23x212px.png";
import Bad from "../../assets/ไม้แบต FBT143x221px.png";
import { Link } from "react-router-dom";
import LikedItemCard from "./LikedItemCard";
function LikeList() {
  return (
    <div className="bg-primary3">
      <div className="py-6 w-[1209px] m-auto grid grid-cols-4 gap-[55px]">
        <Link to="/buy">
          <LikedItemCard
            img={colorfulSharpeners}
            name={"LIMITED JUICE SANRIO ชุดปากกาเจล 0.5"}
            price={"18.00"}
            sale={true}
            percent={"-50%"}
            newPrice={"9.00"}
          />
        </Link>
        <LikedItemCard
          img={Collean}
          name={"สีไม้ COLLEAN 48 สี"}
          price={"240.00"}
          sale={true}
          percent={"-30%"}
          newPrice={"168.00"}
        />
        <LikedItemCard
          img={PenOHHO}
          name={"ปากกาลูกลื่น ลาย OHHO (1 แพ็ค 2 แท่ง)"}
          price={"25.00"}
        />
        <LikedItemCard
          img={Ruler12}
          name={"ไม้บรรทัดอะลูมิเนียม 12 นิ้ว"}
          price={"29.00"}
        />
        <LikedItemCard
          img={Gsoft}
          name={"ปากกาลูกลื่น g'soft"}
          price={"10.00"}
          sale={true}
          percent={"-10.00%"}
          newPrice={"9.00"}
        />
        <LikedItemCard
          img={Book}
          name={"หนังสือ ถ้าหนูมีหมึกยักษ์"}
          price={"229.00"}
          sale={true}
          percent={"-20%"}
          newPrice={"183.00"}
        />
        <LikedItemCard
          img={Pen5}
          name={"LIMITED JUICE SANRIO ชุดปากกาเจล 0.5"}
          price={"359.00"}
        />
        <LikedItemCard
          img={MasterArt}
          name={"Master Art สีไม้ดินสอสีไม้ 2 หัว"}
          price={"138.00"}
        />
        <LikedItemCard
          img={CorrectionTape7}
          name={"เทปลบคำผิด KIOKU 7 มม."}
          price={"49.00"}
        />
        <LikedItemCard
          img={Volley}
          name={"ลูกวอลลเลย์บอล Molten"}
          price={"450.00"}
        />
        <LikedItemCard
          img={Pingpong}
          name={"BUTTERFLY THREE STAR BALL R40 + (3 PCS.)"}
          price={"169.00"}
        />
        <LikedItemCard
          img={Bad}
          name={"ไม้แบดมินตัน FBT"}
          price={"160.00"}
          sale={true}
          percent={"-30%"}
          newPrice={"112.00"}
        />
      </div>
    </div>
  );
}

export default LikeList;
