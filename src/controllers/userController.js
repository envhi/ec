const userService = require("../services/userService");

class UserController {

    async findAllUsers(req, res) {
        const data = await userService.findAllUsers()

        return res.json(data)
    }

}

module.exports = new UserController();

