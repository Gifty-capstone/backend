import GiftService from '../services/GiftService';
import Util from '../utils/Utils';

const util = new Util();

class GiftController {
  static async getAllGifts(req, res) {
    try {
      const allGifts = await GiftService.getAllGifts();
      if (allGifts.length > 0) {
        util.setSuccess(200, 'Gifts retrieved', allGifts);
      } else {
        util.setSuccess(200, 'No gift found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addGift(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newGift = req.body;
    try {
      const createdGift = await GiftService.addGift(newGift);
      util.setSuccess(201, 'Gift Added!', createdGift);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedGift(req, res) {
    const alteredGift = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateGift = await GiftService.updateGift(id, alteredGift);
      if (!updateGift) {
        util.setError(404, `Cannot find gift with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Gift updated', updateGift);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAGift(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theGift = await GiftService.getAGift(id);

      if (!theGift) {
        util.setError(404, `Cannot find gift with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Gift', theGift);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteGift(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const giftToDelete = await GiftService.deleteGift(id);

      if (giftToDelete) {
        util.setSuccess(200, 'Gift deleted');
      } else {
        util.setError(404, `Gift with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default GiftController;
