import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParentComponent from '../components/ParentComponent';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleMyOrders = () => {
    navigate('/myorders');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Please Log In</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <ParentComponent />
          <button onClick={handleMyOrders}>My Orders</button>
        </div>
      )}
    </div>
  );
}

export default Home;
