import React from 'react';
import Login from './loginForm/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signupForm/Signup';


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup/> } /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
