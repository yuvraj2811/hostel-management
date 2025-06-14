import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    hostel: "",
    course: "",
    institution: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const {
      id,
      name,
      email,
      password,
      confirmPassword,
      hostel,
      course,
      institution,
      duration,
    } = formData;

    if (
      !id ||
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !hostel ||
      !course ||
      !institution ||
      !duration
    ) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("https://hostel-backend-sxtp.onrender.com/create", {
        id,
        name,
        email,
        password,
        hostel,
        course,
        institution,
        duration,
      });

      alert("User created successfully!");
      setFormData({
        id: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        hostel: "",
        course: "",
        institution: "",
        duration: "",
      });
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to create user. Try again.");
    }
  };

  return (
    <div className="h-full w-full">
      <div className="text-4xl text-blue-400 underline h-34 flex items-end justify-center p-5">
        Sign Up
      </div>
      <div className="flex justify-center">
        <div className="h-auto bg-blue-400 w-4/6 rounded-2xl min-w-[375px] m-8 p-5">
          <div className="text-white p-4 text-3xl text-center">Create Your Account</div>

          {[
            { label: "ID", name: "id", type: "number" },
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Confirm Password", name: "confirmPassword", type: "password" },
            { label: "Hostel", name: "hostel", type: "text" },
            { label: "Course", name: "course", type: "text" },
            { label: "Institution", name: "institution", type: "text" },
            { label: "Duration", name: "duration", type: "text" },
          ].map((field, idx) => (
            <div key={idx} className="text-2xl text-white text-center mt-4">
              {field.label}:{" "}
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                className="text-blue-400 bg-white text-center py-2 px-4 rounded-2xl outline-none"
              />
            </div>
          ))}

          <div className="flex justify-center mt-10">
            <button
              onClick={handleSubmit}
              className="bg-white px-5 py-3 rounded-2xl text-blue-500 font-bold hover:text-[1.3rem] duration-500"
            >
              Sign Up
            </button>
          </div>

          <div>
            <div className="text-center text-[1.2rem] mt-10 text-white mb-3.5">
              Or sign up with
            </div>
            <div className="flex justify-center border border-white rounded-xl">
              <div className="p-3.5">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook text-[1.3rem] text-white hover:text-[1.6rem] duration-500 cursor-pointer"></i>
                </a>
              </div>
              <div className="p-3.5">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram text-[1.3rem] text-white hover:text-[1.6rem] duration-500 cursor-pointer"></i>
                </a>
              </div>
              <div className="p-3.5">
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-twitter text-[1.3rem] text-white hover:text-[1.6rem] duration-500 cursor-pointer"></i>
                </a>
              </div>
              <div className="p-3.5">
                <i className="fa-brands fa-google text-[1.3rem] text-white hover:text-[1.6rem] duration-500 cursor-pointer"></i>
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
