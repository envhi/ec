const express = require('express')
const userController = require('./controllers/userController')
const productController = require('./controllers/productController')
const orderController = require('./controllers/orderController')
const createUserValidation = require('./middlewares/createUserValidation')
const createProductValidation = require('./middlewares/createProductValidation')
const authController = require('./controllers/authController')
const router = express.Router()

// login tests
router.post('/auth', authController.login)










// home testing route
router.get('/', async (req, res) => {
    res.json('home')
})

// user endpoints
router.get('/users', userController.findAllUsers)
router.post('/users', createUserValidation, userController.createUser)
router.get('/users/profile', userController.getUserInfoById) 

// products endpoints
router.get('/products', productController.findAllProducts)

// order endpoints
router.get('/orders', orderController.findAllOrders)


// products test
router.post('/products', createProductValidation, productController.createProduct)
router.get('/products/:id', productController.findProductById)



module.exports = router