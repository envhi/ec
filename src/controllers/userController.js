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
        const userInfo = await userService.getUserInfoById(4) // test/vai vir do jwt no middleware como req.userId

        res.status(200).json(userInfo)
    }
    

}

module.exports = new UserController();

