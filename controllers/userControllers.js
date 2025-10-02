const UserModel = require('../models/userModel');

const UserController = {
  async list(req, res) {
    const users = await UserModel.getAllUsers();
    res.json(users);
  },

  async create(req, res) {
    const { name, email } = req.body;
    const user = await UserModel.createUser(name, email);
    res.json(user);
  }
};

module.exports = UserController;


