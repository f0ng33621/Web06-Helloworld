import ItemCard from "./ItemCard";

import Pen5 from "../../assets/limited jouice231x194.63px.png";
import PenOHHO from "../../assets/ปากกาลูกลื่นลายohho212.14x195px.png";
import CorrectionTape7 from "../../assets/เทปลบคำผิด7มม166x232px.png";
import Pen1 from "../../assets/ปากกาลูกลื่น1.0 160.17x171.8px.png";
import MasterArt from "../../assets/สี masterart187x187 px.png";
import PentelBlue from "../../assets/ปากกาหมึกเจล นง 0.5 180x180px.png";
import Sharpie from "../../assets/ปากกามาร์คเกอร์sharpie180x177.35px.png";
import CorrectionTape5 from "../../assets/เทปลบคำผิด5มม.x12ม. 99x182pxpng.png";
import GreenHighlight from "../../assets/ปากกาเน้นข้อความเขียว180x180.png";
import RemoveableMarker from "../../assets/ปากกามาร์คเกอร์ลบได้233x63px.png";
import Eraser from "../../assets/ยางลบpentel224x117px.png";
import Ruler from "../../assets/ไม้บรรทัด 30 cm211x165.66px.png";
import Collean24 from "../../assets/สีไม้คอลลีน 2 หัว129x193.5px.png";
import PentelRed from "../../assets/ปากกาหมึกเจล แดง 0.5 180x180px.png";
import Pencil from "../../assets/ดินสอ123x191px.png";

function AllList() {
  return (
    <div className="bg-primary3">
      <div className="py-6 w-[1209px] m-auto grid grid-cols-4 gap-[55px]">
        <ItemCard
          img={Pen5}
          name={"LIMITED JUICE SANRIO ชุดปากกาเจล 0.5"}
          price={"359.00"}
        />
        <ItemCard
          img={PenOHHO}
          name={"ปากกาลูกลื่น ลาย OHHO (1 แพ็ค 2 แท่ง)"}
          price={"25.00"}
        />
        <ItemCard
          img={CorrectionTape7}
          name={"เทปลบคำผิด KIOKU 7 มม."}
          price={"49.00"}
        />
        <ItemCard
          img={Pen1}
          name={"ปากกาลูกลื่นหมึกสีน้ำเงิน 1.0 มม."}
          price={"15.00"}
        />
        <ItemCard
          img={MasterArt}
          name={"Master Art สีไม้ดินสอสีไม้ 2 หัว"}
          price={"138.00"}
        />
        <ItemCard
          img={PentelBlue}
          name={"ปากกาหมึกเจล PENTEL หมึกน้ำเงิน 0.5 มม."}
          price={"43.00"}
        />
        <ItemCard
          img={Sharpie}
          name={"ปากกามาร์กเกอร์ Sharpie หมึกดำ 0.5 มม."}
          price={"39.00"}
        />
        <ItemCard
          img={CorrectionTape5}
          name={"เทปลบคำผิด 5 มม. x 12 ม."}
          price={"39.00"}
        />
        <ItemCard
          img={RemoveableMarker}
          name={"ปากกามาร์กเกอร์ลบได้ สีม่วง PURPLE"}
          price={"45.00"}
        />
        <ItemCard
          img={GreenHighlight}
          name={"ปากกาเน้นข้อความ เขียว Faber-Castell"}
          price={"30.00"}
        />
        <ItemCard
          img={Eraser}
          name={"ยางลบดินสอ Pentel ขนาดเล็ก"}
          price={"18.00"}
        />
        <ItemCard
          img={Ruler}
          name={"ไม้บรรทัด isomars ขนาด 30 ซม."}
          price={"19.00"}
        />
        <ItemCard
          img={Collean24}
          name={"สีไม้ COLLEAN 2 หัว มมี 12 แท่ง 24 สี"}
          price={"69.00"}
        />
        <ItemCard
          img={PentelRed}
          name={"ปากกาหหมึกเจล PENTEL หมึกแดง 0.5 มม."}
          price={"43.00"}
        />
        <ItemCard
          img={Pencil}
          name={"ดินสอ HB Quantum 1 กล่อง 12 แท่ง"}
          price={"45.00"}
        />
      </div>
    </div>
  );
}

export default AllList;
