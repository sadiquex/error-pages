import Image from "next/image";
import Puppy1 from "./../../public/images/puppy-1.png";
import Navbar from "./Navbar";

export default function Dog404() {
  return (
    <div className="bg-darkBrown h-screen p-4 md:p-12 flex items-center justify-center">
      {/* content wrapper */}
      <div className="bg-lightBrown flex flex-col gap-8 items-center w-full h-full px-6 py-2 pb-0">
        {/* Navbar */}
        <Navbar textColor="mediumBrown" />

        {/* content */}
        <div className="flex-1 w-full flex justify-center md:justify-start items-center flex-col gap-1 overflow-hidden relative">
          <h2 className="text-[30px] text-mediumBrown font-semibold">
            Page Not Found
          </h2>
          <h2 className="text-[120px] text-darkBrown font-daysOne">404</h2>

          <Image
            src={Puppy1}
            alt="Puppy"
            width={240}
            height={100}
            priority
            className="md:absolute md:bottom-0 object-cover"
          />
          <button className="absolute md:left-[60%] bottom-[20%] whitespace-nowrap bg-darkBrown text-white px-4 py-3 rounded-sm">
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
