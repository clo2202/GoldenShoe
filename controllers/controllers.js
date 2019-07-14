const { fetchShoes } = require('../models/models')

exports.getShoes = (req, res, next) => {
    fetchShoes(req.params, req.query)
    .then((shoes) => {
        res.status(200).send({shoes})
    })
    .catch(next)
}

exports.getShoeById = (req, res, next) => {
    fetchShoes(req.params, req.query).then(shoes => {
       res.status(200).send({shoes})
    })
    .catch(next)
}