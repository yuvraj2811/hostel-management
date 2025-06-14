import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://hostel-backend-sxtp.onrender.com/getall");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  const handleLogin = () => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setLoggedInUser(user);
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setEmail("");
    setPassword("");
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://hostel-backend-sxtp.onrender.com/delete/${parseInt(loggedInUser.id)}`);
      alert("User deleted successfully");
      setLoggedInUser(null);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err.response?.data || err.message);
      alert("Error deleting user");
    }
  };

  const handleUpdate = async () => {
    const updatedUser = {
      name: prompt("Enter new name", loggedInUser.name),
      email: prompt("Enter new email", loggedInUser.email),
      password: prompt("Enter new password", loggedInUser.password),
      hostel: prompt("Enter new hostel", loggedInUser.hostel),
      course: prompt("Enter new course", loggedInUser.course),
      institution: prompt("Enter new institution", loggedInUser.institution),
      duration: prompt("Enter new duration", loggedInUser.duration),
    };

    if (
      !updatedUser.name ||
      !updatedUser.email ||
      !updatedUser.password ||
      !updatedUser.hostel ||
      !updatedUser.course ||
      !updatedUser.institution ||
      !updatedUser.duration
    ) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await axios.put(
        `https://hostel-backend-sxtp.onrender.com/update/${parseInt(loggedInUser.id)}`,
        updatedUser
      );
      alert("User updated successfully!");
      setLoggedInUser(res.data);
      fetchUsers();
    } catch (err) {
      console.error("Failed to update user:", err.response?.data || err.message);
      alert("Failed to update user");
    }
  };

  return (
    <div className="h-full w-full">
      <div className="text-4xl text-blue-400 underline h-34 flex items-end justify-center p-5">
        {loggedInUser ? "Welcome" : "Login"}
      </div>

      <div className="flex justify-center">
        <div className="h-auto bg-blue-400 w-4/6 rounded-2xl min-w-[375px] m-8 p-5">
          {!loggedInUser ? (
            <>
              <div className="text-white p-4 text-3xl text-center">Welcome Student</div>

              <div className="text-2xl text-white text-center mt-4">
                Email:{" "}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="text-blue-400 bg-white text-center py-2 px-4 rounded-2xl outline-none"
                />
              </div>

              <div className="text-2xl text-white text-center mt-4">
                Password:{" "}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="text-blue-400 bg-white text-center py-2 px-4 rounded-2xl outline-none"
                />
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={handleLogin}
                  className="bg-white px-5 py-3 rounded-2xl text-blue-500 font-bold hover:text-[1.3rem] duration-500"
                >
                  Log in
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-white text-2xl text-center mb-5">
                Hello, <span className="font-bold">{loggedInUser.name}</span>!
              </div>

              <div className="text-white text-lg text-center">
                <p>Email: {loggedInUser.email}</p>
                <p>Hostel: {loggedInUser.hostel}</p>
                <p>Course: {loggedInUser.course}</p>
                <p>Institution: {loggedInUser.institution}</p>
                <p>Duration: {loggedInUser.duration}</p>
              </div>

              <div className="flex justify-center gap-4 mt-10 flex-wrap">
                <button
                  onClick={handleUpdate}
                  className="bg-white px-5 py-3 rounded-2xl text-blue-500 font-bold hover:text-[1.3rem] duration-500"
                >
                  Update Info
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 px-5 py-3 rounded-2xl text-white font-bold hover:bg-red-700 duration-500"
                >
                  Delete Account
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 px-5 py-3 rounded-2xl text-blue-500 font-bold hover:text-[1.3rem] duration-500"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
