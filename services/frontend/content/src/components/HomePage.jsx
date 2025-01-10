import React, { useState, useEffect } from 'react';


function HomePage({ onLogout }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(()=>{
    setTimeout(()=>{setLoading(false);}, 10000);
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


