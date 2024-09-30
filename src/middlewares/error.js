const errorMiddleware = (error, req, res, next) => {
    const statusCode = error.statusCode ?? 500
    const message = error.message ? error.message : 'Internal Server Error'
    res.status(statusCode).json(message)
}

module.exports = errorMiddleware