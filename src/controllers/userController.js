const userService = require("../services/userService");

class UserController {

    async findAllUsers(req, res) {
        const data = await userService.findAllUsers()

        return res.json(data)
    }

    async createUser(req, res) {
        const newUser = await userService.createUser(req.body)

        res.status(201).json('Usuário cadastrado com sucesso')
    }

    async getUserInfoById(req, res) {
        const userInfo = await userService.getUserInfoById(35) // test/vai vir do jwt no middleware como req.userId

        res.status(200).json(userInfo)
    }

    async updateUserProfile(req, res) {
    
        const update = await userService.updateUserProfile(req.userId, req.body)

        return res.json(update)

    }
    

}

module.exports = new UserController();

