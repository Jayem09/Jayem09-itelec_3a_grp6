import React from "react";
import Login from "./pages/loginForm/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signupForm/Signup";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Dashboard/home";
import Error from "./pages/Dashboard/Error";
import Rooms from "./pages/Dashboard/rooms";
import RoomSingle from "./pages/Dashboard/roomSingle";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/signup' element={<Signup />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} />  */}
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/RoomSingle/:single" element={<RoomSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
