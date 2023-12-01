import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faGlobe,
  faGrip,
  faLandMineOn,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import TemperatureChart from "../components/TemperatureChart";
import HumidityChart from "../components/HumidityChart";

function Dashboard() {
  return (
    <div className="flex w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex pt-16 w-screen ">
        <div className="flex flex-col w-1/4 pt-10">
          <div className="flex w-full items-center justify-center">
            <div className="rounded-full bg-purple-600 w-10 h-10 flex items-center justify-center text-xl text-white mr-3">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <div className="flex-col">
              <div className="text-black text-lg font-semibold">
                Monitoring System
              </div>
              <div className="text-gray-500 text-md ">Parent Company</div>
            </div>
          </div>
          <div className="flex items-center justify-left m-5 mt-10 pl-3 rounded-md text-purple-500 bg-slate-100">
            <div className=" w-10 h-10 flex items-center justify-center text-xl">
              <FontAwesomeIcon icon={faGrip} />
            </div>
            <div className="flex-col">
              <div className=" text-md font-semibold">Dashboard</div>
            </div>
          </div>
          <hr className=" mt-0 m-5 border-b-2" />
          <div className="h-full flex flex-col justify-end">
            <div className="flex items-center justify-center cursor-pointer m-5 mt-10 rounded-md text-black bg-slate-200 hover:bg-slate-300 transition-all">
              <div className=" w-10 h-10 flex items-center justify-center text-xl">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
              <div className="flex-col">
                <div className=" text-md font-semibold">Log Out</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col w-full bg-gray-100">
          <div className="w-full text-black text-2xl font-semibold m-10">
            Temperatures and Humidity
          </div>
          <div className="flex">
            <div className="flex w-full items-center justify-left pl-10 bg-white m-10 mt-0 h-24 rounded-xl">
              <div className="rounded-full bg-purple-600 w-10 h-10 flex items-center justify-center text-xl text-white mr-5">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div className="flex-col">
                <div className="text-black text-lg font-semibold">12,365</div>
                <div className="text-gray-500 text-md ">Locations</div>
              </div>
            </div>
            <div className="flex w-full items-center justify-left pl-10 bg-white m-10 mt-0 h-24 rounded-xl">
              <div className="rounded-full bg-purple-600 w-10 h-10 flex items-center justify-center text-xl text-white mr-5">
                <FontAwesomeIcon icon={faLandMineOn} />
              </div>
              <div className="flex-col">
                <div className="text-black text-lg font-semibold">231</div>
                <div className="text-gray-500 text-md ">Sensors Available</div>
              </div>
            </div>
          </div>
          <TemperatureChart/>
          <HumidityChart/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
