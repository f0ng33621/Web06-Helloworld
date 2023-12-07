import React from "react";

function CatagorySelect() {
  return (
    <div className=" bg-primary3 font-kungop text-[32px] text-primary4 text-center py-4">
      <div className="bg-primary5 w-[1118px] m-auto border-[3px] border-primary4 rounded-[20px] flex justify-center gap-[60px] py-3">
        <div className="w-[211px] border-[3px] border-primary4 rounded-[15px] bg-primary2">
          เครื่องเขียน
        </div>
        <div className="w-[211px] border-[3px] border-primary4 rounded-[15px] bg-primary3">
          เครื่องแต่งกาย
        </div>
        <div className="w-[211px] border-[3px] border-primary4 rounded-[15px] bg-primary3">
          หนังสือ
        </div>
        <div className="w-[211px] border-[3px] border-primary4 rounded-[15px] bg-primary3">
          อุปกรณ์กีฬา
        </div>
      </div>
    </div>
  );
}

export default CatagorySelect;
