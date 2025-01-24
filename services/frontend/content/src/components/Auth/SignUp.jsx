import React, { useState } from "react";
import { NavLink } from "react-router";
import style from './../../assets/styles.js';
import api from 'axios';
import { redirect, useNavigate } from "react-router";


function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const reqData = {
      name,
      email,
      password,
    };
    api.post('http://localhost/register.php', reqData)
    .then(function (response) {
      console.log(response);
      alert(response.data);
      return navigate('/login');
    })
    .catch(function (error) {
      console.log(error);
      setErrorMessage('Registration was not successful');
    });
  }

  return (
    <div style={style.Container}>
      <h2>Sign Up</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form>
      <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
          <input
            type="Name"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <button onClick={handleSubmit} type="submit" style={style.ButtonStyle}>Sign Up</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        if you have already Registerd?{' '} <NavLink style={style.NavLink} to='/login'>Login</NavLink>
      </p>
    </div>
  );
}

export default SignUpForm;
