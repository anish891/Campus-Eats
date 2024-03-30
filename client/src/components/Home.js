import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Adjust the API endpoint as per your backend routes
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome to Mess Food Menu App</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          <p>Data fetched from API: {data}</p>
          {/* Display other fetched data */}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Home;
