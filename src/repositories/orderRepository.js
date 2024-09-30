const pool = require('../db/db')

class OrderRepository {

    async findAllOrders() {
        const result = await pool.query('SELECT * FROM pedidos')

        const data = result.rows

        return data
    }
}

module.exports = new OrderRepository();