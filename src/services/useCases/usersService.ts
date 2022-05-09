import axios from 'axios';
import { User } from 'interfaces/teste-front';

class UsersService {
  async getUsers(): Promise<User[]> {
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
