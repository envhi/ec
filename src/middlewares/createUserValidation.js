const createUserSchema = require('../schemas/createUserSchema');
const { BadRequestError } = require('../helpers/ApiError');

const createUserValidation = async (req, res, next) => {

    try {
        await createUserSchema.validate(req.body, { abortEarly: false })
    } catch (error) {
        throw new BadRequestError(error.errors[0])        
    }

    next()

}


module.exports = createUserValidation;