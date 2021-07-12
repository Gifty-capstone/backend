
import database from '../src/models';

class UserService {
  static async getAUser(id) {
    try {
      const theUser = await database.User.findOne({
        where: { id: Number(id) },
      });
      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async getUserFriends(id) {
    try {
      const theUser = await database.User.findAll({
        where: { id: Number(id) }
      });

      return friend;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
