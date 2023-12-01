import React, { useEffect, useState } from 'react';
import AdminService from '../services/AdminService'; // You need to implement this service

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await AdminService.getAllUsers(); // You need to implement this service
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            User ID: {user.user_id}, Username: {user.username}
            {/* Add more user details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
