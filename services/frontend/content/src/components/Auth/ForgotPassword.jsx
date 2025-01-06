import React, { useState } from "react";
import { NavLink } from "react-router";


function ForgotPassword({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }else {
      alert('Login Successful');
      onLoginSuccess();
    }


    // Mock authentication logic
    // if (email === 'user@example.com' && password === 'password123') {
    //   alert('Login successful!');
    //   onLoginSuccess();
    // } else {
    //   setErrorMessage('Invalid email or password.');
    // }
  };

  const SignUpStyle = {
    
      background: 'none',
      border: 'none',
      color: '#007BFF',
      textDecoration: 'underline',
      cursor: 'pointer',
    
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
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
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>Retrive Password</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Back to Login{' '}<NavLink style={SignUpStyle} to='/login'>Login</NavLink>
      </p>
    </div>
  );
}


export default ForgotPassword; 
