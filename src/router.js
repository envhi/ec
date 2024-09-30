const express = require('express')
const { findAllUsers } = require('./repositories/userRepository')
const { findAllProducts } = require('./repositories/productRepository')
const router = express.Router()

router.get('/', async (req, res) => {

    const data = await findAllProducts()

    res.json(data)

})

module.exports = router