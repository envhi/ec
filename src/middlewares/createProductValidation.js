const createProductSchema = require('../schemas/createProductSchema');
const { BadRequestError } = require('../helpers/ApiError');

const createProductValidation = async (req, res, next) => {

    try {
        await createProductSchema.validate(req.body, { abortEarly: false })
    } catch (error) {
        console.log(error)
        throw new BadRequestError(error.errors[0])        
    }

    next()

}


module.exports = createProductValidation;