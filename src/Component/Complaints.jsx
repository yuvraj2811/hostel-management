import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";

const Complaints = () => {
  const [comData, setComData] = useState([]);
  const [newComplaint, setNewComplaint] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("https://hostel-backend-sxtp.onrender.com/allcom");
      setComData(res.data);
    } catch (err) {
      console.error("Error fetching complaints:", err);
    }
  };

  const handleSubmit = async () => {
    if (!roomNumber || !newComplaint) {
      alert("Please fill both room number and complaint");
      return;
    }

    try {
      await axios.post("https://hostel-backend-sxtp.onrender.com/createcom", {
        id: Math.floor(Math.random() * 10000), // unique ID
        hostelname: "Saraswati Nivas", // or let user choose
        roomnumber: roomNumber,
        complaint: newComplaint,
      });
      alert("Complaint submitted!");
      setNewComplaint("");
      setRoomNumber("");
      fetchComplaints(); // refresh list
    } catch (err) {
      console.error("Error submitting complaint:", err);
      alert("Error submitting complaint");
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className="w-screen h-full">
      <div className="text-center text-blue-400 text-2xl p-6 font-bold">
        Hostel Complaints
      </div>

      {comData.map((data, index) => (
        <div
          key={index}
          className="flex justify-center items-center flex-wrap w-full mb-5 flex-col"
        >
          <div className="bg-blue-400 rounded-2xl min-w-[300px] p-6 text-white m-3 text-center shadow-md">
            <div className="text-lg mb-2">
              Room Number: <span className="font-semibold">{data.roomnumber}</span>
            </div>
            <div>
              Complaint: <span className="italic">{data.complaint}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col items-center justify-center mb-7 gap-4">
        <input
          className="border border-blue-400 min-w-[300px] h-10 rounded-2xl text-center outline-none"
          type="number"
          placeholder="Enter Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />
        <input
          className="border border-blue-400 min-w-[300px] h-10 rounded-2xl text-center outline-none"
          type="text"
          placeholder="Enter Complaint"
          value={newComplaint}
          onChange={(e) => setNewComplaint(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-400 text-white py-2 px-5 rounded-2xl hover:bg-blue-500 duration-300"
        >
          Submit Complaint
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Complaints;
