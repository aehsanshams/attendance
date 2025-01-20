import React, {useState} from 'react';
import './App.css'
import UserLogin from './components/Auth/UserLogin';
import HomePage from './components/HomePage';
import SignUpForm from './components/Auth/SignUp';
import ForgotPassword from './components/Auth/ForgotPassword';
import { BrowserRouter, Routes, Route } from "react-router";
import Protected from './components/Auth/Protected';
import Public from './components/Auth/Public';
import Logout from './components/Auth/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected Component={HomePage}/>}>
          {/* <Route path="login" element={<UserLogin />} /> */}
          {/* <Route path="register" element={<SignUpForm />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route index element={<HomePage />} /> */}
        </Route>
        <Route path="/login" element={<Public Component={UserLogin}/>} />
        <Route path="/register" element={<Public Component={SignUpForm}/>} />
        <Route path="/forgot-password" element={<Public Component={ForgotPassword}/>} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


