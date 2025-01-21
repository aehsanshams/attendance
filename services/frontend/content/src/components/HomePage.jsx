import React, { useState, useEffect } from "react";
import api from "axios";
import { useNavigate } from "react-router";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("http://localhost/index.php")
      .then((response) => {
        setContent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h2>{content}</h2>
      <h3>Welcome to Home page</h3>
      <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;
