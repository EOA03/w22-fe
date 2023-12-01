import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const Registration = ({ history }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await AuthService.register(formData); // You need to implement this service
      history.push('/login'); // Redirect to login page on successful registration
    } catch (error) {
      console.error('Error during registration', error);
      // Handle registration error, show a message or redirect to registration page
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
