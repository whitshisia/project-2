import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyOrders() {
  const [myOrders, setMyOrders] = useState([]);
  const [editMode, setEditMode] = useState(null); 
  const [editedOrder, setEditedOrder] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/myOrders') 
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

  const handleEditOrder = (order) => {
    setEditMode(order.orderId);
    setEditedOrder(order);
  };

  const handleUpdateOrder = (updatedOrder) => {
    const { orderId } = updatedOrder;
    if (!orderId || !updatedOrder) {
      console.error('Invalid orderId or updatedOrder.');
      return;
    }
  
    fetch(`http://localhost:3000/myOrders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedOrder),
    })
    .then(response => {
      if (response.ok) {
        toast.success('Order successfully updated');
        setEditMode(null); 
        setEditedOrder({});
      } else {
        toast.error('Error updating order');
      }
    })
    .catch(error => {
      console.error('Error updating order:', error);
      toast.error('Error updating order');
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      {myOrders.map(myOrder => (
        <div key={myOrder.orderId}>
          {editMode === myOrder.orderId ? (
            <div>
              <input type="text" name="foodName" value={editedOrder.foodName} onChange={handleInputChange} />
              <input type="text" name="price" value={editedOrder.price} onChange={handleInputChange} />
              <input type="text" name="status" value={editedOrder.status} onChange={handleInputChange} />
              <input type="text" name="date" value={editedOrder.date} onChange={handleInputChange} />
              <button
               className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
               onClick={() => handleUpdateOrder(editedOrder)}>Update</button>
            </div>
          ) : (
            <div>
              <h2>{myOrder.foodName}</h2>
              <p>{myOrder.price}</p>
              <p>{myOrder.status}</p>
              <p>{myOrder.date}</p>
              <button 
                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              onClick={() => handleDeleteOrder(myOrder.orderId)}>Delete</button>
              <button 
               className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              onClick={() => handleEditOrder(myOrder)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyOrders;
