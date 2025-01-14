import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/landing';
import Compete from './pages/compete';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/landing" element={<Landing/>} />
         <Route path="/compete" element={<Compete/>} />

        {/* <Route path="/slider" element={<Slider/>} /> */}
      </Routes>
    </Router>
  );
}
