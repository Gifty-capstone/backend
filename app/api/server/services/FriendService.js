import database from '../src/models';

class FriendService {
  static async getAFriend(id) {
    try {
      const theFriend = await database.Friend.findOne({
        where: { id: Number(id) },
      });
      return theFriend;
    } catch (error) {
      throw error;
    }
  }


  static async getGifts(id) {
    // eslint-disable-next-line no-useless-catch
    try {
      const theFriend = await database.Friend.findByPk(id, {
        include: [{
          model: database.Gift,
        }],
      });
      return theFriend;
    } catch (error) {
      throw error;
    }
  }
}

export default FriendService;
