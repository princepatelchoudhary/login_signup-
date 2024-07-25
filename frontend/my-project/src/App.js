
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[data, setData]=useState({});
  return (
    <div className="min-w-screen min-h-screen  flex flex-col bg-slate-700	">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setData={setData} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} setData={setData} />}
        />
         <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard data={data}/>
                </PrivateRoute>}
         />
      </Routes>
    </div>
  );
}

export default App;
