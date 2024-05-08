import React, { useState, useEffect } from 'react';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/foods') // Assuming json-server is running on localhost:3000
      .then(response => response.json())
      .then(data => setFoods(data));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOrderNow = (food) => {
    // Assuming orderId is generated automatically, and other fields are taken from food object
    const newOrder = {
      orderId: Math.random().toString(36).substr(2, 9), // Generate unique ID
      foodName: food.name,
      price: food.price,
      status: 'Pending', // Set initial status
      date: new Date().toLocaleDateString() // Current date
    };
    fetch('http://localhost:3000/myOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })
    .then(response => response.json())
    .then(data => console.log('Order added:', data));
  };

  // Calculate pagination bounds
  const itemsPerPage = 4;
  const filteredFoods = foods.filter(food =>
    food.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredFoods.length);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Foods</h1>
      <input
        type="text"
        placeholder="Search by category..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded p-2 mb-4"
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredFoods.slice(startIndex, endIndex).map(food => (
          <div key={food.id} className="border border-gray-300 rounded p-4">
            <img src={food.image} alt={food.name} className="w-full mb-2" />
            <h2 className="text-xl font-bold">{food.name}</h2>
            <p>{food.description}</p>
            <button onClick={() => handleOrderNow(food)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Order Now</button>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changeCurrentPage={handlePageChange}
        theme="bottom-border"
        className="mt-4"
      />
    </div>
  );
};

export default Foods;
