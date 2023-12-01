import React, { useEffect, useState } from 'react';
import AuthService from '../services/AuthService';

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await AuthService.getUserProfile(); // You need to implement this service
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userData && (
        <div>
          <p>User ID: {userData.user_id}</p>
          <p>Username: {userData.username}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default UserPage;
