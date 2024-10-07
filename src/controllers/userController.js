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

}

module.exports = new UserController();

