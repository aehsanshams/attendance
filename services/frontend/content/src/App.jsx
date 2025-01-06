import React, {useState} from 'react';
import './App.css'
import UserLogin from './components/Auth/UserLogin';
import HomePage from './components/HomePage';
import SignUpForm from './components/Auth/SignUp';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* <Route path="login" element={<UserLogin />} /> */}
          {/* <Route path="register" element={<SignUpForm />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route index element={<HomePage />} /> */}
        </Route>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<SignUpForm />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


