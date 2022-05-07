import axios from 'axios';

class UsersService {
  async getUsers() {
    try {
      const { data } = await axios.get(
        'https://private-9d65b3-tinnova.apiary-mock.com/users'
      );
      return data;
    } catch {
      throw new Error('Error getting users');
    }
  }
}

export const usersService = new UsersService();
