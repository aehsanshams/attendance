import React, { useState, useEffect } from "react";
import api from "axios";

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
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h2>{content}</h2>
      <h3>Welcome to Home page</h3>
    </div>
  );
}

export default HomePage;
