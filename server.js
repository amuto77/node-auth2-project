const express = require('express')
const helmet = require('helmet')
const cors = require("cors")
const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

const port = 5000

server.listen(PORT, ()=>{
    console.log(`Server is listing on ${port}`)
})

module.exports = server