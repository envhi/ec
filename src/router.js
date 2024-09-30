const express = require('express')
const { findAllUsers } = require('./repositories/userRepository')
const { findAllProducts } = require('./repositories/productRepository')
const { findAllOrders } = require('./repositories/orderRepository')
const router = express.Router()


router.get('/', async (req, res) => {

    throw new Error()
    res.json('ok')

})

module.exports = router