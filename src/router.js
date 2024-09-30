const express = require('express')
const { findAllOrders } = require('./repositories/orderRepository')
const router = express.Router()

router.get('/', async (req, res) => {
    
    const data = await findAllOrders()
    
    res.json(data)
})

module.exports = router