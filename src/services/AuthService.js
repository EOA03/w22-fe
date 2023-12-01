import axios from 'axios';

const BASE_URL = 'https://serene-sierra-14359-bfd563eafed9.herokuapp.com/auth';

const AuthService = {
  register: async (userData) => {
    try {
      await axios.post(`${BASE_URL}/registration`, userData);
      // You might want to handle success (e.g., redirect to login) or return some data
    } catch (error) {
      throw error;
    }
  },

  login: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, userData);
      return response.data.token;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
