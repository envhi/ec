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

    async createProduct(values) {

            const query = `
            INSERT INTO produtos (nome, categoria_produto, descricao, quantidade_estoque, codigo_barra, foto_url, peso, marca, valor, id_usuario)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING nome, marca, codigo_barra, id_usuario
            `
            const newUser = await pool.query(query, values)
    
            return newUser.rows[0]

    }
}

module.exports = new ProductRepository();


