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


  static async getFriends(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const theUser = await database.User.findByPk(id, {
        include: [{
          model: database.Friend,
        }],
      });
      return theUser;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
