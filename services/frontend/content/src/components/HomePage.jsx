import React, { useState, useEffect } from 'react';


function HomePage({ onLogout }) {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{setLoading(false);}, 10000);
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h2>Welcome to the Home Page!</h2>
      <p>You are logged in.</p>
      <button
        onClick={onLogout}
        style={{ padding: '10px', backgroundColor: '#FF5733', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Logout
      </button>
    </div>
  );
}

export default HomePage;


