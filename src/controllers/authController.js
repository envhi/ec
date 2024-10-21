const authService = require("../services/authService");

class AuthController {
    async login(req, res) {
        const { email, password } = req.body

        const token = await authService.login(email, password)
        
        res.status(200).json(token)
    }

    async test(req, res) {
        res.json('req userId: ' + req.userId)
    }

}

module.exports = new AuthController();

