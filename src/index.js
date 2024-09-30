require('dotenv').config()
const express = require('express')
require('express-async-errors'); // precisei dessa lib pq o middleware de erro não funciona com funções async;
const router = require('./router')
const errorMiddleware = require('./middlewares/error')

const app = express()

app.use(express.json())


app.use(router)

app.use(errorMiddleware)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server running on port ${process.env.SERVER_PORT}`)
})