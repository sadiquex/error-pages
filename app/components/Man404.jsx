import React from "react";
import Navbar from "./Navbar";
import { LuBadgeHelp } from "react-icons/lu";
import Image from "next/image";

export default function Man404() {
  return (
    <div className="bg-orangeYellow h-screen p-4 md:p-12 flex items-center justify-center">
      {/* content wrapper */}
      <div className="bg-white rounded-2xl flex flex-col gap-8 items-center w-full h-full px-6 py-2 pb-0">
        {/* navbar */}
        <Navbar textColor="black" />

        {/* content */}
        <div className="flex-1 w-full flex flex-col md:flex-row justify-around items-center gap-1">
          {/* text */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-[80px] text-darkAsh font-semibold">Oops!</h2>
            <h3 className="text-3xl text-darkAsh text-center md:text-left">
              Something went <br />
              <p className="text-4xl text-darkAsh font-semibold">WRONG</p>
            </h3>

            <button className="px-6 py-2 bg-mediumGreen w-full rounded-lg text-white text-xl shadow-lg flex justify-center items-center gap-1">
              Help
              <span>
                <LuBadgeHelp />
              </span>
            </button>
          </div>

          {/* image */}
          <div className="relative">
            <h2 className="text-[150px] md:text-[170px] text-orangeYellow font-daysOne">
              404
            </h2>
            <Image
              src="/images/landscape-photographer.svg"
              alt="Photographer"
              width={430}
              height={300}
              priority
              className="absolute -top-[70%] left-0 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
