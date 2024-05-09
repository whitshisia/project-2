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
    <section className="bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1715126400&semt=sph')]  bg-blend-multiply">

<div className="min-h-screen bg-center flex items-center justify-center">
      {!isLoggedIn ? (
        <div>
          <h2>Please Log In</h2>
          <button onClick={handleLogin}
          type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >Login
         </button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogout}
          type="button" 
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >Logout</button>
          <ParentComponent />
          <button onClick={handleMyOrders}
           type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
            My Orders</button>
        </div>
      )}
    </div>
    </section>
  );
}

export default Home;
