const { pool } = require('../db/db')

class UserRepository {

    async findAllUsers() {
        const result = await pool.query('SELECT * FROM usuarios')

        const data = result.rows

        return data
    }

    async findUserByEmail(email) {
        const query = `  
        SELECT id_usuario 
        FROM usuarios
        WHERE email = $1
        `

        const user = await pool.query(query, email)

        return user.rowCount
    }

    async findUserAndPasswordByEmail(email) {
        const query = `  
        SELECT id_usuario, email, password_hash
        FROM usuarios
        WHERE email = $1
        `

        const user = await pool.query(query, [email])     // alternativa pra nao precisar instanciar um array no service

        return user.rows[0]
    }

    async createUser(values) {
        const query = `
        INSERT INTO usuarios (nome, sobrenome, email, data_nascimento, telefone, password_hash)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING nome, email
        `
        const newUser = await pool.query(query, values)

        return newUser.rows[0]
    }

    async getUserInfoById(userId) {

        const query = `
        SELECT nome, sobrenome, email, data_nascimento, telefone
        FROM usuarios
        WHERE id_usuario = $1
        `

        const userInfo = await pool.query(query, [userId])

        return userInfo.rows[0]
    }
}

module.exports = new UserRepository()