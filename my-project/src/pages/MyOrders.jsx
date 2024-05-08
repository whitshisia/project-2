import React ,{ useState, useEffect } from 'react'

function MyOrders() {
const [myOrders, setMyOrders] = useState([])
    
      useEffect(() => {
        fetch('http://localhost:3000/myOrders') // Assuming json-server is running on localhost:3000
          .then(response => response.json())
          .then(data => setMyOrders(data));
      }, []);
    
      return (
        <div>
          {/* <h1>Posts</h1> */}
          {myOrders.map(myOrder => (
            <div key={myOrder.orderId}>
              <h2>{myOrder.foodName}</h2>
              <p>{myOrder.price}</p>
              <p>{myOrder.status}</p>
              <p>{myOrder.date}</p>

              
            </div>
          ))}
        </div>
      );
    };
    
export default MyOrders