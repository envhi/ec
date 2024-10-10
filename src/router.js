const express = require('express')
const userController = require('./controllers/userController')
const productController = require('./controllers/productController')
const orderController = require('./controllers/orderController')
const createUserValidation = require('./middlewares/createUserValidation')
const createProductValidation = require('./middlewares/createProductValidation')
const router = express.Router()

// home testing route
router.get('/', async (req, res) => {
    res.json('home')
})

// user endpoints
router.get('/users', userController.findAllUsers)
router.post('/users', createUserValidation, userController.createUser)

// products endpoints
router.get('/products', productController.findAllProducts)

// order endpoints
router.get('/orders', orderController.findAllOrders)





// products test
router.post('/products', createProductValidation, productController.createProduct)



module.exports = router