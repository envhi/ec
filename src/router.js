const express = require('express')
const userController = require('./controllers/userController')
const productController = require('./controllers/productController')
const orderController = require('./controllers/orderController')
const createUserValidation = require('./middlewares/createUserValidation')
const createProductValidation = require('./middlewares/createProductValidation')
const authController = require('./controllers/authController')
const auth = require('./middlewares/auth')
const router = express.Router()

// get products cadastrados pelo usuario[vendedor]
router.get('/users/products', auth, productController.findUserProducts)

// test user update
router.patch('/users/profile', auth, userController.updateUserProfile)

// login tests
router.post('/auth', authController.login)

// test auth midl
router.get('/auth/test', auth, authController.test )


// home testing route
router.get('/', async (req, res) => {
    res.json('home')
})

// user endpoints
router.get('/users', userController.findAllUsers)
router.post('/users', createUserValidation, userController.createUser)
router.get('/users/profile', auth, userController.getUserInfoById) 

// products endpoints
router.get('/products', productController.findAllProducts)

// order endpoints
router.get('/orders', orderController.findAllOrders)


// products test
router.post('/products', createProductValidation, auth, productController.createProduct)
router.get('/products/:id', productController.findProductById)



module.exports = router