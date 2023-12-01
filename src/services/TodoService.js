import axios from 'axios';

const BASE_URL = 'https://serene-sierra-14359-bfd563eafed9.herokuapp.com/todo';

const TodoService = {
  getAllTodos: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createTodo: async (todoData) => {
    try {
      await axios.post(`${BASE_URL}`, todoData);
    } catch (error) {
      throw error;
    }
  },

  updateTodo: async (todoId, todoData) => {
    try {
      await axios.put(`${BASE_URL}/${todoId}`, todoData);
    } catch (error) {
      throw error;
    }
  },

  updateTodoStatus: async (todoId, status) => {
    try {
      await axios.patch(`${BASE_URL}/${todoId}`, { status });
    } catch (error) {
      throw error;
    }
  },

  deleteTodo: async (todoId) => {
    try {
      await axios.delete(`${BASE_URL}/${todoId}`);
    } catch (error) {
      throw error;
    }
  },
};

export default TodoService;
