const express = require('express')
const userController = require('./controllers/userController')
const productController = require('./controllers/productController')
const orderController = require('./controllers/orderController')
const createUserValidation = require('./middlewares/createUserValidation')
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

// test validation route
router.post('/users', createUserValidation, async (req, res) => {
    res.json(req.body)
})
module.exports = router