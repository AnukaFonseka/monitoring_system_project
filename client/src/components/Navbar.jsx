import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faGear,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white fixed z-50 pl-12 pr-12 border-b-2	w-full flex h-16 items-center justify-between ">
      <div className="flex items-center space-x-4 cursor-pointer">
        <div className="rounded bg-purple-600 w-5 h-5 flex items-center justify-center text-sm text-white">
          <FontAwesomeIcon icon={faTree} />
        </div>
        <div className="text-black text-2xl font-semibold">
          Monitoring System
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-black cursor-pointer text-xl mr-2 hover:text-purple-600 transition-all">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="text-black cursor-pointer text-xl pr-2 hover:text-purple-600 transition-all">
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="text-black cursor-pointer text-xl hover:text-purple-600 transition-all">
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
