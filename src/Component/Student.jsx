import React, { useState } from "react";
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import Lottie from "lottie-react";
import StudentInfo from "../assets/student.json"

const Student = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [stdName, setStdName] = useState("");
  const [hostel, setHostel] = useState("");
  const [duration, setDuration] = useState("");
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");

  const studentData = [
    {
      id: 1,
      name: "Gaurav Yuvraj",
      hostel: "Cage 1",
      duration: "August 2023 to Present",
      institution: "Magadh University",
      course: "B.Ed",
    },
    {
      id: 2,
      name: "Riya Sharma",
      hostel: "Girls Block A",
      duration: "July 2022 to Present",
      institution: "Delhi University",
      course: "B.A English",
    },
    {
      id: 3,
      name: "Amit Raj",
      hostel: "Boys Hostel 3",
      duration: "September 2021 to Present",
      institution: "IIT Patna",
      course: "B.Tech CSE",
    },
    {
      id: 4,
      name: "Pooja Kumari",
      hostel: "Kaveri Hostel",
      duration: "June 2023 to Present",
      institution: "Jamia Millia Islamia",
      course: "B.Ed",
    },
    {
      id: 5,
      name: "Sanjay Verma",
      hostel: "Hostel B",
      duration: "August 2022 to Present",
      institution: "Banaras Hindu University",
      course: "B.Sc Physics",
    },
    {
      id: 6,
      name: "Sneha Rani",
      hostel: "Girls Hostel 2",
      duration: "July 2021 to Present",
      institution: "Patna Women's College",
      course: "M.Com",
    },
    {
      id: 7,
      name: "Rohan Mishra",
      hostel: "Tagore Hostel",
      duration: "August 2020 to Present",
      institution: "JNU",
      course: "M.A Political Science",
    },
    {
      id: 8,
      name: "Ankita Sinha",
      hostel: "Nalanda Hostel",
      duration: "October 2022 to Present",
      institution: "IGNOU",
      course: "BCA",
    },
    {
      id: 9,
      name: "Deepak Kumar",
      hostel: "Block C",
      duration: "June 2023 to Present",
      institution: "BIT Mesra",
      course: "M.Tech Mechanical",
    },
    {
      id: 10,
      name: "Simran Kaur",
      hostel: "Shakti Bhawan",
      duration: "May 2022 to Present",
      institution: "Punjab University",
      course: "LLB",
    },
    {
      id: 11,
      name: "Nikhil Rathi",
      hostel: "Hostel D",
      duration: "August 2021 to Present",
      institution: "IIM Indore",
      course: "MBA",
    },
    {
      id: 12,
      name: "Tanya Jha",
      hostel: "Girls Hostel 5",
      duration: "July 2023 to Present",
      institution: "LNMU Darbhanga",
      course: "B.Ed",
    },
    {
      id: 13,
      name: "Vikas Yadav",
      hostel: "Block A",
      duration: "August 2022 to Present",
      institution: "DU SOL",
      course: "B.Com",
    },
    {
      id: 14,
      name: "Pallavi Singh",
      hostel: "Meera Hostel",
      duration: "July 2021 to Present",
      institution: "Amity University",
      course: "BBA",
    },
    {
      id: 15,
      name: "Harsh Raj",
      hostel: "Raman Hostel",
      duration: "September 2022 to Present",
      institution: "NIT Warangal",
      course: "B.Tech ECE",
    },
    {
      id: 16,
      name: "Neha Kumari",
      hostel: "Girls Block C",
      duration: "June 2023 to Present",
      institution: "IGNTU",
      course: "B.Sc Mathematics",
    },
    {
      id: 17,
      name: "Arjun Singh",
      hostel: "Aryabhatta Hostel",
      duration: "August 2020 to Present",
      institution: "University of Allahabad",
      course: "M.Sc Chemistry",
    },
    {
      id: 18,
      name: "Megha Verma",
      hostel: "Kalpana Chawla Hostel",
      duration: "July 2023 to Present",
      institution: "Chandigarh University",
      course: "BCA",
    },
    {
      id: 19,
      name: "Ravi Sinha",
      hostel: "Hostel X",
      duration: "May 2022 to Present",
      institution: "Tezpur University",
      course: "M.A History",
    },
    {
      id: 20,
      name: "Shalini Kumari",
      hostel: "Girls Wing B",
      duration: "August 2021 to Present",
      institution: "IGNOU",
      course: "B.Ed",
    },
    {
      id: 21,
      name: "Aditya Prakash",
      hostel: "Patel Hostel",
      duration: "July 2023 to Present",
      institution: "IIT BHU",
      course: "B.Tech Electrical",
    },
    {
      id: 22,
      name: "Kiran Devi",
      hostel: "Women’s Hostel 1",
      duration: "September 2022 to Present",
      institution: "Nalanda Open University",
      course: "M.A Hindi",
    },
    {
      id: 23,
      name: "Manish Thakur",
      hostel: "Gandhi Hostel",
      duration: "June 2021 to Present",
      institution: "Punjab Technical University",
      course: "B.Tech IT",
    },
    {
      id: 24,
      name: "Rekha Sharma",
      hostel: "Saraswati Hostel",
      duration: "August 2020 to Present",
      institution: "Banasthali Vidyapith",
      course: "B.Sc Nursing",
    },
    {
      id: 25,
      name: "Ritesh Kumar",
      hostel: "Block E",
      duration: "July 2023 to Present",
      institution: "AIIMS Patna",
      course: "MBBS",
    },
    {
      id: 26,
      name: "Preeti Rani",
      hostel: "Durga Hostel",
      duration: "June 2022 to Present",
      institution: "Pataliputra University",
      course: "M.Com",
    },
    {
      id: 27,
      name: "Naveen Chauhan",
      hostel: "Men’s Hostel 2",
      duration: "August 2021 to Present",
      institution: "JMI",
      course: "MCA",
    },
    {
      id: 28,
      name: "Shubham Pandey",
      hostel: "Hostel 9",
      duration: "July 2022 to Present",
      institution: "Lovely Professional University",
      course: "B.Tech Civil",
    },
    {
      id: 29,
      name: "Divya Raj",
      hostel: "Block Z",
      duration: "May 2023 to Present",
      institution: "IGNOU",
      course: "B.Ed",
    },
    {
      id: 30,
      name: "Prakash Mehta",
      hostel: "Boys Block 5",
      duration: "June 2023 to Present",
      institution: "Magadh University",
      course: "M.A Economics",
    },
  ];

  const handelSearch = (e) => {
    studentData.map((data, index) => {
      if (data.name == name && data.id == id) {
        setStdName(data.name);
        setHostel(data.hostel);
        setDuration(data.duration);
        setInstitution(data.institution);
        setCourse(data.course);
      }
    });
  };

  const handelId = (e) => {
    setId(e.target.value);
  };

  const handelName = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="w-full h-full">
      <div>
        <div className="text-center flex text-3xl justify-center items-center h-25 text-blue-500 ">
          Student Info
        </div>
        <div className="flex justify-center">
          <div className="  bg-blue-300 w-128 m-10 rounded-2xl">
            <div className="m-5">
              {" "}
              <Lottie animationData={StudentInfo} className="h-50" />{" "}
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <input
                  onChange={(e) => {
                    handelId(e);
                  }}
                  type="text"
                  placeholder="Enter Roll Number"
                  className="bg-white p-2.5 outline-none rounded-2xl text-center mb-2.5"
                />
              </div>
              <div>
                <input
                  onChange={(e) => {
                    handelName(e);
                  }}
                  type="text"
                  placeholder="Enter Student Name"
                  className="bg-white p-2.5 rounded-2xl outline-none text-center"
                />{" "}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handelSearch}
                className="py-1 px-5 text-blue-400 bg-white rounded m-5 cursor-pointer hover:text-[1.2rem] duration-500 ease-in-out     "
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
          <div className="flex flex-col   w-100 bg-blue-400 text-white rounded-2xl p-15">
            <div>Name: {stdName}</div>
            <div>Hostel: {hostel}</div>
            <div>Duration: {duration}</div>
            <div>Institution:{institution}</div>
            <div>Course: {course}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Student;
