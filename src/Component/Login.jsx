import React from "react";
import Footer from "./Footer";

const Login = () => {
  return (
    <div className="h-full w-full">
      <div className=" text-4xl text-blue-400 underline h-34 flex items-end justify-center p-5">
        Login
      </div>
      <div className="flex justify-center">
        <div className="h-120 bg-blue-400 w-4/6 rounded-2xl min-w-[375px] m-8">
          <div className="text-white p-4 text-3xl text-center ">
            Welcome Student
          </div>

          <div>
            <div className=" text-2xl text-white text-center mt-3.5 min-w-[375px]">
              Email:{" "}
              <input
                type="text"
                name="username"
                placeholder="Enter your email"
                className="text-blue-400 bg-white text-center py-2  rounded-2xl"
              />
            </div>

            <div className=" text-2xl text-white text-center mt-3.5 min-w-[375px]">
              Password:{" "}
              <input
                type="text"
                name="username"
                placeholder="Enter password"
                className="text-blue-400 bg-white text-center py-2  rounded-2xl"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10 ">
            <button className="bg-white px-5 py-3 rounded-2xl text-blue-500 font-bold hover:text-[1.3rem] duration-500 ease-in-out">
              Log in
            </button>
          </div>

          <div>
            <div className="text-center text-[1.2rem] mt-20 text-white mb-3.5">Log in with</div>
            <div className="flex justify-center  border border-white ">
              {" "}
              <div className="p-3.5">
                <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook text-[1.3rem] text-white hover:text-[1.6rem] duration-500 ease-in-out cursor"></i></a>
              </div>
              <div className="p-3.5">
               <a href="https://www.instagram.com/?hl=en" target="_blank"> <i class="fa-brands fa-instagram  text-[1.3rem] text-white hover:text-[1.6rem] duration-500 ease-in-out cursor"></i></a>
              </div>
              <div className="p-3.5">
               <a href="https://x.com/" target="_blanl"> <i class="fa-brands fa-twitter  text-[1.3rem] text-white hover:text-[1.6rem] duration-500 ease-in-out cursor"></i></a>
              </div>
              <div className="p-3.5">
                <i class="fa-brands fa-google  text-[1.3rem] text-white hover:text-[1.6rem] duration-500 ease-in-out cursor"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
