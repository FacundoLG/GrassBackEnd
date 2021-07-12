const express = require('express')
const notes = require('../components/notes/network')

const routes = function (server){
    server.use('/api',notes)
}

module.exports= routes