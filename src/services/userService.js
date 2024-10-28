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
        // console.log('id', userId)
        // console.log('data', data)
        const setClause = []
        const values = []
        const keys = []

        for(const key in data) {
            if(data.hasOwnProperty(key)) {
                if(key == 'nome' || key == 'sobrenome' || key == 'data_nascimento' || key == 'telefone'){
                    setClause.push(`${key} = $${setClause.length + 1}`)
                    values.push(data[key])
                    keys.push(key)

                    // setClauseArray.push({ field: `${key}`, value: `${data[key]}`})       
                }
            }

        }
        
        // console.log(setClause)
        // console.log(setClause.join(', '))
        // console.log(values)


        const userUpdate = await userRepository.updateUserProfile(userId, setClause, values, keys)

        return userUpdate
        // pegar no banco o usuario que o controller manda o id
        // const user = await userRepository.getUserInfoById(userId)
        // console.log(user)
        // fazer um if pra cada campo que pode ser alterado, se tiver preenchido da um push pro array de update pra mandar pro repository
        // fazer algumas verificacoes

        // dados que podem ser alterados
        // nome VARCHAR(50) not null,
        // sobrenome VARCHAR(50) not null,
        // data_nascimento DATE,
        // telefone VARCHAR(20) not null,
    }
}

module.exports = new UserService()