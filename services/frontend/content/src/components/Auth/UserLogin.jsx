import React, { useState } from "react";
import { NavLink } from "react-router";
import { ButtonStyle, NavLink as NavLinkStyle, Container } from './../../assets/styles';
import api from 'axios';
import { redirect, useNavigate } from "react-router";


function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const getTokenFromContent = (content) => {
    // Come again every time with this token:36202556_1736526343
    const words = content.split(':');
    const token = words[1];
    return token;

    // return content.split(':')[1];
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }
      const reqData = {
            email,
            password,
          };
          api.post('http://localhost/login.php', reqData)
          .then(function (response) {
            console.log(response);
            // alert('Login Successful');
            const data = response.data;
            console.log(data);
            const token = getTokenFromContent(data);
            console.log(token);
            localStorage.setItem('token', token);
            return navigate('/');
          })
          .catch(function (error) {
            console.log(error);
            setErrorMessage('login was not successful');
          });
  };

  return (
    <div style={Container}>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {/* <form> */}
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
        <button onClick={handleSubmit} type="submit" style={ButtonStyle}>Login</button>
      {/* </form> */}
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
