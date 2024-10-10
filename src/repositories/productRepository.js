const { pool } = require('../db/db')

class ProductRepository {

    async findAllProducts() {
        const result = await pool.query('SELECT * FROM produtos')

        const data = result.rows

        return data
    }
}

module.exports = new ProductRepository();


