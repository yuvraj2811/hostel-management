import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState } from "react";

import Nav from "../src/Component/Nav";
import Home from "../src/Component/Home";
import Student from "../src/Component/Student"
import Rooms from "../src/Component/Rooms";
import Complaints from "../src/Component/Complaints";
import Login from "../src/Component/Login";
import SignUp from "../src/Component/SignUp";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex">
          <div>
            <Nav />
          </div>
          <div>
            <Home />
          </div>
        </div>
      ),
    },
    {
      path: "/student",
      element: (
        <div className=" flex">
          <div>
            {" "}
            <Nav />
          </div>
          <div>
            {" "}
            <Student />
          </div>
        </div>
      ),
    },
    {
      path: "/rooms",
      element: (
        <div className="flex">
          <div>
            <Nav />
          </div>
          <div>
            <Rooms />
          </div>
        </div>
      ),
    },
    {
      path: "/complaints",
      element: (
        <div className="flex">
          <div>
            {" "}
            <Nav />
          </div>
          <div>
            <Complaints />
          </div>
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div className="flex">
          <div>
            <Nav />
          </div>
          <div>
            <Login />
          </div>
        </div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div className="flex">
          <div>
            <Nav />
          </div>
          <div>
            <SignUp />
          </div>
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
