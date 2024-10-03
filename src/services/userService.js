const { BadRequestError } = require("../helpers/ApiError")
const userRepository = require("../repositories/userRepository")

class UserService {

    async findAllUsers() {
        try {
            return await userRepository.findAllUsers()
        } catch (error) {
            throw new BadRequestError('test user service find all users')
        }
    }
}

module.exports = new UserService()