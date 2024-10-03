const express = require('express')
const userController = require('./controllers/userController')
const productController = require('./controllers/productController')
const orderController = require('./controllers/orderController')
const router = express.Router()

// home testing route
router.get('/', async (req, res) => {
    res.json('home')
})

// user endpoints
router.get('/users', userController.findAllUsers)

// products endpoints
router.get('/products', productController.findAllProducts)

// order endpoints
router.get('/orders', orderController.findAllOrders)

module.exports = router