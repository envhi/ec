const createUserSchema = require('../schemas/createUserSchema');
const { BadRequestError } = require('../helpers/ApiError');
const hash = require('../helpers/hash');

const createUserValidation = async (req, res, next) => {

    try {
        await createUserSchema.validate(req.body, { abortEarly: false })
        req.body.passwordHash = await hash(req.body.passwordHash)
        req.body.cpf = await hash(req.body.cpf)
    } catch (error) {
        console.log(error)
        throw new BadRequestError(error.errors[0])        
    }

    next()

}


module.exports = createUserValidation;