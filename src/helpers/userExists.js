const { getUserInfoById } = require("../repositories/userRepository")

const userExists = async (userId) => {
    return await getUserInfoById(userId)

}

module.exports = userExists