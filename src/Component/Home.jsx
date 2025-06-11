import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Lottie from "lottie-react";
import Security from "../assets/security.json"
import Food from "../assets/food.json"
import Power from "../assets/power.json"
import Room from "../assets/room.json"
import Student  from "../assets/student.json";
import Wifi from "../assets/wifi.json"
import Study from "../assets/study.json"



const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="text-blue-400 text-center text-4xl p-6 font-bold">
        Welcome To
      </div>

      <div className=" flex items-center justify-around  min-w-96 flex-wrap mt-7">
        <div className="h-96 w-2/5 min-w-[375px]  bg-[url('../public/image/hostel.avif')] bg-cover rounded-2xl "></div>
        <div className=" h-120 w-1/2">
          <div className="text-2xl text-blue-400 text-center p-2 underline ">
            Saraswati Nivas
          </div>
          <div>
            Saraswati Hostel offers a safe, peaceful, and enriching environment
            for young scholars. Named after the Goddess of Knowledge, we foster
            learning and comfort.
          </div>
          <div className="text-blue-400 underline m-2">Features </div>
          <div>✅ Safe & Secure Campus</div>
          <div>🛏️ Well-Furnished Rooms</div>
          <div>🍽️ Hygienic Mess Facilities</div>
          <div>📚 Study-Friendly Environment</div>
          <div>🛜 Free Wi-Fi</div>
          <div className="flex items-center justify-center ">
            <NavLink
              to="/rooms"
              className="bg-blue-400 text-white px-6 py-3.5 rounded-2xl mt-2.5 hover:text-[1.3rem] duration-500 ease-in-out"
            >
              {" "}
              Rooms
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" flex justify-center my-5">
        <div className="bg-blue-400 h-2 w-2/6 rounded-2xl "></div>
      </div>
        
      <div className="text-2xl text-blue-400 text-center p-2.5 m-2.5 underline">Features</div>

      <div className=" flex flex-wrap justify-evenly [&>*]:m-3">
        <div className="h-72 min-w-110 bg-blue-400 rounded-2xl">
          <div className="h-9/12  bg-white border-blue-400 border-2 rounded-2xl">
            {/* <Lottie className="h-full p-1.5" animationData={security} /> */}
            <Lottie className="h-full p-1.5" animationData={Security}/>
            

            
          </div>
          <div className="max-w-110 p-2 text-white ">
            {" "}
            <p>
              Saraswati Nivas offers a safe and secure campus with 24/7
              surveillance and a supportive residential environment.
            </p>
          </div>
        </div>
        <div className="h-72 min-w-110 bg-blue-400 rounded-2xl">
          <div className="h-9/12 bg-white border-blue-400 border-2 rounded-2xl">
            <Lottie className="h-full p-1.5" animationData={Room} />
            
          </div>
          <div className="max-w-110 p-2 text-white ">
            <p>
              🛏️ Enjoy comfort and convenience in the well-furnished rooms of
              Saraswati Nivas, designed for a relaxing stay.
            </p>
          </div>
        </div>


        <div className="h-72 min-w-110 bg-blue-400 rounded-2xl">
          <div className="h-9/12 bg-white border-blue-400 border-2 rounded-2xl">
            <Lottie className="h-full p-1.5" animationData={Food} />
          </div>
          <div className="max-w-110 p-2 text-white ">
            <p>
              🍽️ Delight in hygienic, freshly prepared meals that prioritize
              your health and taste.
            </p>
          </div>
        </div>

        
        <div className="h-72 min-w-110 bg-blue-400 rounded-2xl">
          <div className="h-9/12 bg-white border-blue-400 border-2 rounded-2xl">
            <Lottie className="h-full p-1.5" animationData={Study} />
          </div>
          <div className="max-w-110 p-2 text-white ">
            <p>
            📚 The hostel offers a quiet, well-equipped study room to support focused learning and academic success.

            </p>
          </div>
        </div>


        <div className="h-72 min-w-110 bg-blue-400 rounded-2xl">
          <div className="h-9/12 bg-white border-blue-400 border-2 rounded-2xl">
            <Lottie className="h-full p-1.5" animationData={Wifi} />
          </div>
          <div className="max-w-110 p-2 text-white ">
            <p>
            🌐 Stay connected with high-speed Wi-Fi available throughout the hostel premises.

            </p>
          </div>
        </div>

        
        <div className="h-72 min-w-110 bg-blue-400 rounded-2xl">
          <div className="h-9/12 bg-white border-blue-400 border-2 rounded-2xl">
            <Lottie className="h-full p-1.5" animationData={Power} />
          </div>
          <div className="max-w-110 p-2 text-white ">
            <p>
            💡 Enjoy uninterrupted comfort with 24/7 power supply in the hostel.

            </p>
          </div>
        </div>









      </div>

      <Footer />
    </div>
  );
};

export default Home;
