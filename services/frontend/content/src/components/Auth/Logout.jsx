import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page
    navigate("/login");
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>You have been logged out.</h2>
      <p>Redirecting to login...</p>
    </div>
  );
}

export default Logout;
