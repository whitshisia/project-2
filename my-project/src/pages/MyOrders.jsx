import React, { useState, useEffect } from 'react';

function MyOrders() {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/myOrders') // Assuming json-server is running on localhost:3000
      .then(response => response.json())
      .then(data => setMyOrders(data));
  }, []);

  const handleDeleteOrder = (orderId) => {
    fetch(`http://localhost:3000/myOrders/${orderId}`, {
      method: 'DELETE'
    })
    .then(() => {
      setMyOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
    })
    .catch(error => console.error('Error deleting order:', error));
  };

  const handleUpdateOrder = (orderId, updatedOrder) => {
    fetch(`http://localhost:3000/myOrders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedOrder),
    })
    .then(response => response.json())
    .then(data => console.log('Order updated:', data))
    .catch(error => console.error('Error updating order:', error));
  };

  return (
    <div>
      {myOrders.map(myOrder => (
        <div key={myOrder.orderId}>
          <h2>{myOrder.foodName}</h2>
          <p>{myOrder.price}</p>
          <p>{myOrder.status}</p>
          <p>{myOrder.date}</p>
          <button onClick={() => handleDeleteOrder(myOrder.orderId)}>Delete</button>
          <button onClick={() => handleUpdateOrder(myOrder.orderId, { ...myOrder, status: 'Updated' })}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
