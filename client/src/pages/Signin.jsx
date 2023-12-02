import React, { useState } from "react";
import img from "../assets/signin.png";
import nsbm from "../assets/nsbm.png";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../store/api/authApi";
import Swal from "sweetalert2";

function Signin() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(data);

      if (response.data && !response.data.error) {
        const token = response.data.payload;
        localStorage.setItem("token", token);
        navigate("dashboard");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      } else {
        console.log("Login Error", response);
        Swal.fire({
          title: "Oops...",
          text: "Incorrect Credentials !",
          icon: "error",
        });
      }
    } catch (error) {
      console.log("Login Error", error);
    }
  };

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
              onChange={(event) =>
                setData({ ...data, username: event.target.value })
              }
            />
            <div className="text-black text-md font-base mt-5">Password</div>
            <input
              className="rounded outline-none border border-solid border-gray-300 pl-2 text-sm h-8 mt-2"
              placeholder="Password"
              onChange={(event) =>
                setData({ ...data, password: event.target.value })
              }
            />
            <button
              onClick={handleLogin}
              className="bg-green-800 rounded text-white font-semibold h-8 mt-10 hover:bg-green-700	 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <img className="max-h-screen" src={img} alt="image" />
    </div>
  );
}

export default Signin;
