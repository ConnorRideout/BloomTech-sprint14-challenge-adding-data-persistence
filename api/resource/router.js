// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')
const {
    checkValidBody
} = require('./middleware')

router.get('/', (req, res, next) => {
    Resources.get()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', checkValidBody, (req, res, next) => {
    Resources.insert(req.body)
        .then(newRes => {
            res.status(201).json(newRes)
        })
        .catch(err => {
            if (err.message.match(/UNIQUE constraint failed/i)) {
                next({ status: 400, message: `resource_name must be unique: '${req.body.resource_name}' is already in database` })
            }
            next(err)
        })
})

module.exports = router