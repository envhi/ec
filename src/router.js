const express = require('express')
const { findAllUsers } = require('./repositories/userRepository')
const router = express.Router()

router.get('/', async (req, res) => {

    const data = await findAllUsers()

    res.json(data)

})

module.exports = router