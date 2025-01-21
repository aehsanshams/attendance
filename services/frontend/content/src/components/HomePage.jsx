import React, { useState, useEffect } from "react";
import api from "axios";
// import { NavLink } from 'react-router';
// import Navbar from "./Navbar";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ Width: "100%", margin: "150px", padding: "20px", textAlign: "center" }}>
        <h1>Welcome to Home page</h1>
        <h2>below is server content:</h2>
        {content}
      </div>
    </>
  );
}

export default HomePage;
