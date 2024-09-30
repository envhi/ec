const express = require('express')
const { findAllUsers } = require('./repositories/userRepository')
const { findAllProducts } = require('./repositories/productRepository')
const { findAllOrders } = require('./repositories/ordersRepository')
const router = express.Router()

router.get('/', async (req, res) => {

    const data = await findAllOrders()

    res.json(data)

})

module.exports = router