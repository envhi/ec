const { hash } = require("bcrypt")
const { BadRequestError, NotFoundError } = require("../helpers/ApiError")
const userRepository = require("../repositories/userRepository")

class UserService {
    async findAllUsers() {
        try {
            return await userRepository.findAllUsers()
        } catch (error) {
            throw new BadRequestError('test user service find all users')
        }
    }

    async createUser(newUserData) {
        const userExists = await userRepository.findUserByEmail(Array(newUserData.email))

        if (userExists) {
            throw new BadRequestError('E-mail já cadastrado')
        }

        const passwordHash = await hash(newUserData.password, 9)
        // ordem dos valores que dao match no placeholder 
        const values = [
            newUserData.nome,
            newUserData.sobrenome,
            newUserData.email,
            newUserData.dataNascimento,
            newUserData.telefone,
            passwordHash
        ]

        return await userRepository.createUser(values)
    }

    async getUserInfoById(userId) {

        const idArray = [userId]

        const userInfo = await userRepository.getUserInfoById(idArray)

        if(!userInfo) {
            throw new NotFoundError('Usuário não existe')
        }

        return userInfo
    }
}

module.exports = new UserService()