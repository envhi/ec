const { pool } = require('../db/db')

class ProductRepository {

    async findAllProducts() {
        const result = await pool.query('SELECT * FROM produtos')

        const data = result.rows

        return data
    }

    async findProductById(idProduto) {

        console.log(idProduto) // [ '1' ]
        
        const query = `
        SELECT id_produto, nome, valor FROM produtos 
        WHERE id_produto = $1
        `

        const product = await pool.query(query, idProduto)

        return product.rows[0]
    }
}

module.exports = new ProductRepository();


