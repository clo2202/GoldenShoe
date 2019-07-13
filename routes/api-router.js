const express = require("express");
const apiRouter = express.Router();
const { shoesRouter } = require('./shoes-router')

apiRouter.use("/shoes", shoesRouter)

module.exports = { apiRouter }