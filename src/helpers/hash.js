const bcrypt = require('bcrypt')

const hashPassword = async (plainText) => {
    const saltRounds = 10;
    return await bcrypt.hash(plainText, saltRounds);
}

module.exports = hashPassword