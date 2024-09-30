const express = require('express')
const pool = require('./db/db')
const router = express.Router()

router.get('/', async (req, res) => {

    const result = await pool.query('SELECT * FROM usuarios')

    const data = result.rows

    res.json(data)

})

module.exports = router