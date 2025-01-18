import React, { useState, useEffect } from 'react';
import { ButtonStyle1, NavLink as NavLinkStyle, Container } from './../assets/styles';
import api from 'axios';


function HomePage({ onLogout }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    api.get('http://localhost/index.php')
      .then(function (response) {
        setContent(response.data);
        setLoading(false);

      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      {content}
      <button onClick={onLogout} style={ButtonStyle1}>Logout</button>
    </div>
  );
}

export default HomePage;


