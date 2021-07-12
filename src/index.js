const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./network/routes')
const NODE_ENV = process.env.NODE_ENV || 'development'

require('dotenv').config({
    path: `.env.${NODE_ENV}`
})

const app = express()
const main = async () => {
    await app.listen(3001)
    console.log('Server on port 3001')
}

main()

const dboptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD,
    database: 'grass'
}
//middlewares--------------------------------
app.use(myconn(mysql,dboptions,'single'))
app.use(express.json())
app.use(cors())
routes(app)
