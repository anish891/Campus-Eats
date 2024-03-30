import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Define a function to fetch menu items from the backend server
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('/api/menu'); // Adjust the API endpoint as per your backend routes
        setMenuItems(response.data); // Update state with fetched menu items
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    // Call the fetchMenuItems function when the component mounts
    fetchMenuItems();

    // Clean up function to cancel the request when the component unmounts
    return () => {
      // Cancel the request if component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once when component mounts

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item._id}>
            {item.name}: {item.description} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
