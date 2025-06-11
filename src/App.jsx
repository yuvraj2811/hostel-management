import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState } from "react";

import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Student from "../src/Component/Student"
import Rooms from "./component/Rooms";
import Complaints from "./component/Complaints";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

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
