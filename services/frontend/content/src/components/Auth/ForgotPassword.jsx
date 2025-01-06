import React, { useState } from "react";
import { NavLink } from "react-router";
import { ButtonStyle, NavLinks, DivS } from './../../assets/styles';


function ForgotPassword({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    } else {
      alert('Login Successful');
      onLoginSuccess();
    }
  };
  return (
    <div style={DivS}>
      <h2>Forgot Password</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit" style={ButtonStyle}>Retrive Password</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Back to Login{' '}<NavLink style={NavLinks} to='/login'>Login</NavLink>
      </p>
    </div>
  );
}


export default ForgotPassword; 
