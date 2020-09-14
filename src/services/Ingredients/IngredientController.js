import knex from '../../database/connection';

class IngredientController {
  async index(req, res, next) {
    try {
      const result = await knex('ingredients');

      res.status(200).json({ success: true, content: result });
    } catch (error) {
      res.status(400).json({ success: false, content: error });
    }
  }

  async create(req, res, next) {
    const data = req.body;
    try {
      res.status(200).json({ success: true, content: data });
    } catch (error) {
      res.status(400).json({ success: false, content: error });
    }
  }
}

export default new IngredientController();
