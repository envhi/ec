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

        const userInfo = await userRepository.getUserInfoById(userId)

        if(!userInfo) {
            throw new NotFoundError('Usuário não existe')
        }

        return userInfo
    }

    async updateUserProfile(userId, data) {
        const setClause = []
        const values = []
        const keys = []

        for(const key in data) {
            if(data.hasOwnProperty(key)) {
                if(key == 'nome' || key == 'sobrenome' || key == 'data_nascimento' || key == 'telefone'){
                    setClause.push(`${key} = $${setClause.length + 1}`)
                    values.push(data[key])
                    keys.push(key)
                }
            }
        }

        const userUpdate = await userRepository.updateUserProfile(userId, setClause, values, keys)

        return userUpdate

    }
}

module.exports = new UserService()