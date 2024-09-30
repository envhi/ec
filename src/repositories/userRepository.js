const { pool } = require('../db/db')

class UserRepository {

    async findAllUsers() {
        const result = await pool.query('SELECT * FROM usuarios')

        const data = result.rows

        return data
    }
}

module.exports = new UserRepository();