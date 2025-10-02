const pool = require('../config');

const UserModel = {
  async getAllUsers() {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  },

  async createUser(name, email) {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return result.rows[0];
  }
};

module.exports = UserModel;

