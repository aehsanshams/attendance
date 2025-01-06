import React, { useState } from 'react';

function HomePage({ onLogout }) {
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


