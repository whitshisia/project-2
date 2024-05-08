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
      <h1>Foods</h1>
      <input
        type="text"
        placeholder="Search by category..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {filteredFoods.slice(startIndex, endIndex).map(food => (
        <div key={food.id}>
          <img src={food.image} alt={food.name} />
          <h2>{food.name}</h2>
          <p>{food.description}</p>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changeCurrentPage={handlePageChange}
        theme="bottom-border"
      />
    </div>
  );
};

export default Foods;
