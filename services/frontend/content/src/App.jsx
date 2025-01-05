import React, {useState} from 'react';
import './App.css'
import UserLogin from './components/UserLogin';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage onLogout={handleLogout} />
      ) : (
        <UserLogin onLoginSuccess={handleLogin} />
      )}
    </div>
  );
}

export default App;


