import React, { useState } from "react";
import { NavLink } from "react-router";
import style from './../../assets/styles';

function SignUpForm({ onSignUpSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }
    else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    } else {
      alert('SignUp Successful');
      onSignUpSuccess();
    }
    // onSignUpSuccess();
  }

  return (
    <div style={style.Container}>
      <h2>Sign Up</h2>
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
        <button type="submit" style={style.ButtonStyle}>Sign Up</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        if you have already Registerd?{' '} <NavLink style={style.NavLink} to='/login'>Login</NavLink>
      </p>
    </div>
  );
}

export default SignUpForm;
