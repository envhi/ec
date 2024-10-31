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

    async findUserProducts(userId) {
        const query = `
        SELECT id_produto, p.nome AS nome_produto, u.nome AS cadastrado_por, u.id_usuario AS id_usuario, quantidade_estoque,  data_cadastro_produto AS adicionado_em 
        FROM produtos AS p
        JOIN usuarios AS u ON u.id_usuario = p.id_usuario
        WHERE u.id_usuario = $1
        `
        
        const userProducts = await pool.query(query, [userId])

        return userProducts.rows
    }
}

module.exports = new ProductRepository();


