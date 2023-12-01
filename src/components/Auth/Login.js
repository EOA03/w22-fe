import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const Login = ({ history }) => {
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
      const response = await AuthService.login(formData); // You need to implement this service
      AuthService.setToken(response.data.token);
      history.push('/user'); // Redirect to user page on successful login
    } catch (error) {
      console.error('Error during login', error);
      // Handle login error, show a message or redirect to login page
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
