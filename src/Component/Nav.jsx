import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <div className="h-full w-16 bg-blue-400  pt-7 ">
      <NavLink to="/" className="text-3xl block text-center text-white p-2.5 ">
        <i class="fa-solid fa-house-user"></i>{" "}
        <div className="text-white text-[0.9rem]">home</div>
      </NavLink>

      <NavLink to="/student" className="text-3xl block text-center text-white p-2.5 ">
        <i class="fa-solid fa-graduation-cap"></i>{" "}
        <div className="text-white text-[0.9rem]"> Student</div>
      </NavLink>
      
      <NavLink to="/rooms" className="text-3xl block text-center text-white p-2.5 ">
      <i class="fa-solid fa-bed"></i> <div className="text-white text-[0.9rem]"> Rooms</div>
      </NavLink> 

      <NavLink to="/complaints" className="text-3xl block text-center text-white p-2.5 ">
      <i class="fa-solid fa-message"></i> <div className="text-white text-[0.6rem]"> Complaints</div>
      </NavLink> 

      
      <NavLink to="/login" className="text-3xl block text-center text-white p-2.5 ">
      <i class="fa-solid fa-circle-user"></i> <div className="text-white text-[0.9rem]">Log in</div>
      </NavLink> 

      <NavLink to="/signup" className="text-3xl block text-center text-white p-2.5 ">
      <i class="fa-solid fa-circle-user"></i> <div className="text-white text-[0.8rem]">Sign up</div>
      </NavLink> 

    </div>
  );
};

export default Nav;
