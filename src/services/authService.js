const { BadRequestError, UnauthorizedError } = require("../helpers/ApiError")
const userRepository = require("../repositories/userRepository")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthService {
    async login(email, password) {

        const user = await userRepository.findUserAndPasswordByEmail(email)

        if (!user) {
            throw new BadRequestError('E-mail não cadastrado')
        }

        if (!await bcrypt.compare(password, user.password_hash)) {
            throw new UnauthorizedError('Senha incorreta')
        }
        
        return jwt.sign({ userId: user.id_usuario }, process.env.JWT_SECRET, { expiresIn: '10m' })

    }
}

module.exports = new AuthService()

