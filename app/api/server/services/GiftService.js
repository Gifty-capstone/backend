import database from '../src/models';

class GiftService {
  static async getAllGifts() {
    try {
      return await database.Gift.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addGift(newGift) {
    try {
      return await database.Gift.create(newGift);
    } catch (error) {
      throw error;
    }
  }

  static async updateGift(id, updateGift) {
    try {
      const giftToUpdate = await database.Gift.findOne({
        where: { id: Number(id) }
      });

      if (giftToUpdate) {
        await database.Gift.update(updateGift, { where: { id: Number(id) } });

        return updateGift;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAGift(id) {
    try {
      const theGift = await database.Gift.findOne({
        where: { id: Number(id) }
      });

      return theGift;
    } catch (error) {
      throw error;
    }
  }

  static async deleteGift(id) {
    try {
      const giftToDelete = await database.Gift.findOne({ where: { id: Number(id) } });

      if (giftToDelete) {
        const deletedGift = await database.Gift.destroy({
          where: { id: Number(id) }
        });
        return deletedGift;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default GiftService;
