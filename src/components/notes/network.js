const express = require('express')
const routes = express.Router()
const response = require('../../network/response')
const controler = require('./controler')

routes.get("/", (req,res) => {
    controler.getNotes(req,res)
})

routes.post("/", (req,res) => {
    controler.addNote(req,res)
})

routes.delete("/", (req,res) => {
   controler.deleteNote(req,res)
})

module.exports = routes