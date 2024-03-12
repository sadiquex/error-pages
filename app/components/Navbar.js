import { PiPatreonLogoFill } from "react-icons/pi";
import { RiMenu4Line } from "react-icons/ri";

export default function Navbar({ textColor }) {
  return (
    <nav className="w-full flex justify-between items-center pt-3">
      <div className={`flex-1 text-${textColor}`}>
        <PiPatreonLogoFill size={36} />
      </div>
      {/* only show on desktop */}
      <ul
        className={`flex-1 hidden md:flex justify-end gap-4 font-semibold cursor-pointer whitespace-nowrap text-${textColor}`}
      >
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
        <li>Contact Us</li>
      </ul>
      {/* only show on mobile */}
      <div className={`flex-1 flex justify-end md:hidden text-${textColor}`}>
        <RiMenu4Line size={36} />
      </div>
    </nav>
  );
}
