import axios from 'axios';

const BASE_URL = 'https://serene-sierra-14359-bfd563eafed9.herokuapp.com/admin';

const AdminService = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`); // Endpoint to get all users
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserTodos: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${userId}`); // Endpoint to get user's todos
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllTodos: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/todo`); // Endpoint to get all todos
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTodosByUserId: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/todo/${userId}`); // Endpoint to get todos by user id
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteTodo: async (todoId) => {
    try {
      await axios.delete(`${BASE_URL}/todo/${todoId}`); // Endpoint to delete a todo by id
    } catch (error) {
      throw error;
    }
  },
};

export default AdminService;
