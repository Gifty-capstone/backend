import FriendService from '../services/FriendService';
import Util from '../utils/Utils';

const util = new Util();

class FriendController {
  static async getAFriend(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theFriend = await FriendService.getAFriend(id);

      if (!theFriend) {
        util.setError(404, `Cannot find user with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Friend', theFriend);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getGifts(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const theFriend = await FriendService.getGifts(id);
      if (!theFriend) {
        util.setError(404, `Cannot find user with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Friend', theFriend);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}
export default FriendController;
