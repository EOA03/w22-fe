import axios from 'axios';

const BASE_URL = 'https://serene-sierra-14359-bfd563eafed9.herokuapp.com/user';

const UserService = {
  getUserProfile: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
