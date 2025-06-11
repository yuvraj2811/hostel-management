import React from "react";
import Footer from "./Footer";

const SignUp = () => {
  return (
    <div className="h-full w-full">
      <div className="text-4xl text-blue-400 underline h-34 flex items-end justify-center p-5">
        Sign Up
      </div>
      <div className="flex justify-center">
        <div className="h-auto bg-blue-400 w-4/6 rounded-2xl min-w-[375px] m-8">
          <div className="text-white p-4 text-3xl text-center">
            Create Your Account
          </div>

          <div className="text-2xl text-white text-center mt-4 min-w-[375px]">
            Name:{" "}
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="text-blue-400 bg-white text-center py-2 rounded-2xl"
            />
          </div>

          <div className="text-2xl text-white text-center mt-4 min-w-[375px]">
            Email:{" "}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="text-blue-400 bg-white text-center py-2 rounded-2xl"
            />
          </div>

          <div className="text-2xl text-white text-center mt-4 min-w-[375px]">
            Password:{" "}
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="text-blue-400 bg-white text-center py-2 rounded-2xl"
            />
          </div>

          <div className="text-2xl text-white text-center mt-4 min-w-[375px]">
            Confirm Password:{" "}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="text-blue-400 bg-white text-center py-2 rounded-2xl"
            />
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-white px-5 py-3 rounded-2xl text-blue-500 font-bold hover:text-[1.3rem] duration-500 ease-in-out">
              Sign Up
            </button>
          </div>

          <div>
            <div className="text-center text-[1.2rem] mt-10 text-white mb-3.5">
              Or sign up with
            </div>
            <div className="flex justify-center border border-white">
              <div className="p-3.5">
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-facebook text-[1.3rem] text-white hover:text-[1.6rem] duration-500 ease-in-out cursor-pointer"></i>
                </a>
              </div>
              <div className="p-3.5">
                <a href="https://www.instagram.com/?hl=en" target="_blank">
                  <i className="fa-brands fa-instagram text-[1.3rem] text-white hover:text-[1.6rem] duration-500 ease-in-out cursor-pointer"></i>
                </a>
              </div>
              <div className="p-3.5">
                <a href="https://x.com/" target="_blank">
                  <i className="fa-brands fa-twitter text-[1.3rem] text-white hover:text-[1.6rem] duration-500 ease-in-out cursor-pointer"></i>
                </a>
              </div>
              <div className="p-3.5">
                <i className="fa-brands fa-google text-[1.3rem] text-white hover:text-[1.6rem] duration-500 ease-in-out cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
