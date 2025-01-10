import React, { useState, useEffect } from 'react';
import api from 'axios';


function HomePage({ onLogout }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(()=>{
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
    </div>
  );
}

export default HomePage;


