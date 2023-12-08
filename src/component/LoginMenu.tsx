// import React from "react";
import logoLogin from "../assets/หน้าlogin 504.28x511px.png";
import { Link } from "react-router-dom";

function LoginMenu() {
  return (
    <div className="text-primary4 flex justify-center gap-20 bg-primary3 py-32 font-kungop text-xl">
      <div>
        <img src={logoLogin} alt="" width={504.28} />
      </div>
      <div className=" w-[30%] bg-primary2 rounded-lg border-2 border-primary4 p-5">
        <p className=" text-primary4 text-5xl">เข้าสู่ระบบ</p>
        <div className="p-5">
          <div>
            <label htmlFor="username">เบอร์โทรศัพท์/อีเมล</label>
            <br />
            <input
              className="bg-primary5 rounded-2xl border-[1px] border-primary4 w-full py-2"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="password">รหัสผ่าน</label>
            <br />
            <input
              className="bg-primary5 rounded-2xl border-[1px] border-primary4 w-full py-2"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="flex justify-between mt-6 mb-8">
            <div>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">บันทึกการเข้าสู่ระบบ</label>
            </div>
            <div>
              <p>ลืมรหัสผ่าน</p>
            </div>
          </div>
          <div>
            <Link to="/">
              <button className="w-full bg-primary4 text-2xl text-primary5 rounded-2xl py-3">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMenu;
