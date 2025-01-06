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
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Don't have an account?{' '}<NavLink style={SignUpStyle} to='/register'>SignUp</NavLink>
      </p>
    </div>
  );
}


export default ForgotPassword; 
