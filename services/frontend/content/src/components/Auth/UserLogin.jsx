import React, { useState } from "react";
import { NavLink } from "react-router";
import { ButtonStyle, NavLink as NavLinkStyle, Container } from './../../assets/styles';


function LoginForm({ onLoginSuccess }) {
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
    <div style={Container}>
      <h2>Login</h2>
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
        <button type="submit" style={ButtonStyle}>Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Don't have an account?{' '}<NavLink style={NavLinkStyle} to='/register'>SignUp</NavLink>
      </p>

      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Forgot Password?{' '}<NavLink style={NavLinkStyle} to='/forgot-password'>Recover</NavLink>
      </p>
    </div>
  );
}


export default LoginForm; 
