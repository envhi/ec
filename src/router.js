const express = require('express')
const { findAllOrders } = require('./repositories/orderRepository')
const userController = require('./controllers/userController')
const router = express.Router()

router.get('/', async (req, res) => {
    
    const data = await findAllOrders()
    
    res.json(data)
})

router.get('/users', userController.findAllUsers)

module.exports = router