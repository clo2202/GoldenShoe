const express = require('express')
const shoesRouter = express.Router()
const { getShoes, getShoeById } = require('../controllers/controllers')


shoesRouter.get('/', getShoes)
shoesRouter.get('/:shoe_id', getShoeById)

module.exports = { shoesRouter }