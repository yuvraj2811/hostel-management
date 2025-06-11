import React from "react";
import Footer from "./Footer";

const Complaints = () => {
  const comData = [
    {
      roomNumber: 121,
      complaint: "Ceiling fan is not working.",
    },
    {
      roomNumber: 108,
      complaint: "Drinking water is not clean.",
    },
    {
      roomNumber: 203,
      complaint: "Air conditioner is not functioning properly.",
    },
    {
      roomNumber: 117,
      complaint: "Window glass is broken.",
    },
    {
      roomNumber: 132,
      complaint: "Bathroom tap is leaking continuously.",
    },
    {
      roomNumber: 115,
      complaint: "Tube light is flickering.",
    },
    {
      roomNumber: 210,
      complaint: "Room door lock is jammed.",
    },
    {
      roomNumber: 126,
      complaint: "Power socket near bed is loose.",
    },
    {
      roomNumber: 109,
      complaint: "Mosquito net on window is torn.",
    },
    {
      roomNumber: 140,
      complaint: "Ceiling is leaking during rain.",
    },
  ];

  return (
    <div className="w-screen h-full">
      <div className="text-center text-blue-400 text-2xl p-15">
        Hostel Complaints
      </div>

      {comData.map((data) => {
        return (
          <div className="flex justify-center items-center flex-wrap w-full mb-10 flex-col ">
            {" "}
            <div className="bg-blue-400 rounded-2xl min-w-90 p-12 text-white m-3">
              <div className="  m-3   text-center">
                Flat Number: {data.roomNumber}
              </div>
              <div>Complaint:{data.complaint}</div>
            </div>

           
          </div>
        );
      })}
 <div className="flex items-center justify-center mb-7 ">
              <div> <input className="border border-blue-400  min-w-90 h-50 rounded-2xl text-center outline-none" type="text" placeholder="Add Complaint" /></div>
            </div>

            <div className="flex justify-center items-center">
              <div><button className="bg-blue-400 text-white py-2 px-5 rounded-2xl mb-4 hover:bg-blue-500 duration-500 ease-in-out">Submit</button></div>
            </div>
      <Footer />
    </div>
  );
};

export default Complaints;
