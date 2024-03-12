import Navbar from "./Navbar";
import Image from "next/image";
import { LuBadgeHelp } from "react-icons/lu";
import Astronaut from "./../../public/images/astronaut.png";
export default function Space404() {
  return (
    <div className="bg-mediumGreen h-screen p-4 md:p-12 flex items-center justify-center">
      {/* content wrapper */}
      <div className="bg-darkAsh flex flex-col gap-8 items-center w-full h-full px-6 py-2 pb-0">
        {/* navbar */}
        <Navbar textColor="white" />

        {/* content */}
        <div className="flex-1 w-full flex flex-col md:flex-row justify-around items-center gap-1  ">
          {/* text */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-4xl text-white font-semibold">
              Page Not Found
            </h2>
            <h3 className="text-xl text-white text-center md:text-left">
              Something gone missing... <br /> Contact our help center or
              refresh the page
            </h3>

            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <button className="w-full flex-1 px-8 py-4 bg-[#313131] text-white rounded-sm shadow-lg whitespace-nowrap">
                Refresh Page
              </button>
              <button className="w-full flex-1 px-8 py-4 bg-mediumGreen text-white rounded-sm shadow-lg flex justify-center items-center gap-1">
                Help
                <span>
                  <LuBadgeHelp />
                </span>
              </button>
            </div>
          </div>

          {/* image */}
          <div className="relative">
            <h2 className="text-[150px] md:text-[170px] text-mediumGreen font-daysOne">
              404
            </h2>
            <Image
              src={Astronaut}
              alt="Astronaut"
              width={230}
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
