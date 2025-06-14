import React, { useState, useEffect } from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import Lottie from "lottie-react";
import StudentInfo from "../assets/student.json";

const Student = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [stdName, setStdName] = useState("");
  const [hostel, setHostel] = useState("");
  const [duration, setDuration] = useState("");
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");
  const [studentData, setStudentData] = useState([]);

  // Fetch data from API
  const fetchStudents = async () => {
    try {
      const res = await fetch("https://hostel-backend-sxtp.onrender.com/getall");
      const data = await res.json();
      console.log("Fetched data:", data); // ✅ check actual structure
      setStudentData(data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSearch = () => {
    const found = studentData.find((data) => {
      return (
        String(data.id) === id.trim() &&
        data.name.toLowerCase() === name.trim().toLowerCase()
      );
    });

    if (found) {
      setStdName(found.name);
      setHostel(found.hostel);
      setDuration(found.duration);
      setInstitution(found.institution);
      setCourse(found.course);
    } else {
      setStdName("Not Found");
      setHostel("");
      setDuration("");
      setInstitution("");
      setCourse("");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="text-center flex text-3xl justify-center items-center h-25 text-blue-500">
        Student Info
      </div>
      <div className="flex justify-center">
        <div className="bg-blue-300 w-128 m-10 rounded-2xl">
          <div className="m-5">
            <Lottie animationData={StudentInfo} className="h-50" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="Enter Roll Number"
              className="bg-white p-2.5 outline-none rounded-2xl text-center mb-2.5"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Student Name"
              className="bg-white p-2.5 rounded-2xl outline-none text-center"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              className="py-1 px-5 text-blue-400 bg-white rounded m-5 cursor-pointer hover:text-[1.2rem] duration-500 ease-in-out"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-15">
        <div className="h-2 w-60 bg-blue-400 rounded-2xl"></div>
      </div>

      <div className="flex justify-center m-15">
        <div className="flex flex-col w-100 bg-blue-400 text-white rounded-2xl p-15">
          <div>Name: {stdName}</div>
          <div>Hostel: {hostel}</div>
          <div>Duration: {duration}</div>
          <div>Institution: {institution}</div>
          <div>Course: {course}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Student;
