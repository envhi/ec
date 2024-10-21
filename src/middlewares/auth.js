const { UnauthorizedError } = require("../helpers/ApiError")
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {

    console.log(req.headers.authorization)
    
    const { authorization } = req.headers

    if (!authorization) {
        throw new UnauthorizedError('Token não fornecido')
    }

    const token = authorization.split(" ")[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken)
        req.userId = decodedToken.userId
    } catch (error) {
        console.log(error)
        throw new UnauthorizedError('Token inválido')
    }

    next()

}

module.exports = auth