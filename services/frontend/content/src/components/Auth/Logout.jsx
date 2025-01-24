import React from 'react';
import { redirect, useNavigate } from "react-router";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirect to login page
    return navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
