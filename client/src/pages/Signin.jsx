import React from "react";
import { Button, Input } from "rsuite";
import img from "../assets/signin.png";
import nsbm from "../assets/nsbm.png";

function Signin() {
  return (
    <div className="w-screen min-h-screen	flex">
      <div className="min-h-screen w-2/3">
        <img className="" src={nsbm} alt="image" />
        <div className="flex flex-col justify-center items-center mt-36	">
          <div className="text-black text-4xl font-semibold ">
            Remote Monitoring System
          </div>
          <div className="flex flex-col justify-center items-left w-2/5	">
            <div className="text-black text-2xl font-semibold mt-10">
              Welcome back!
            </div>
            <div className="text-black text-md font-semibold mt-3">
              Enter your Credentials to access your account
            </div>
            <div className="text-black text-md font-base mt-8">
              Email address
            </div>
            <input
              className="rounded outline-none border border-solid border-gray-300 pl-2 text-sm h-8 mt-2"
              placeholder="Enter your email"
              name="email"
            />
            <div className="text-black text-md font-base mt-5">Password</div>
            <input
              className="rounded outline-none border border-solid border-gray-300 pl-2 text-sm h-8 mt-2"
              placeholder="Password"
            />
            <Button className="bg-green-800 rounded text-white font-semibold h-8 mt-10 hover:bg-green-700	 transition-all">
              Login
            </Button>
          </div>
        </div>
      </div>
      <img className="max-h-screen" src={img} alt="image" />
    </div>
  );
}

export default Signin;
