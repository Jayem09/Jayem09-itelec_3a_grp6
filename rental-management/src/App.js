import React from 'react';
import Login from './loginForm/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signupForm/Signup';
import Dashboard from './Dashboard/dashboard';
import home from './pages/Dashboard/home';
import error from './pages/Dashboard/error';
import rooms from './pages/Dashboard/rooms';
import roomSingleHome from './pages/Dashboard/roomSingle';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup/> } /> 
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Login>' element={<Login/>} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
