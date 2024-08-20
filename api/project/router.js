// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')
const {
    checkValidBody
} = require('./middleware')

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projs => {
            projs = projs.map(p => {
                p.project_completed = Boolean(p.project_completed)
                return p
            })
            res.status(200).json(projs)
        })
        .catch(next)
})

router.post('/', checkValidBody, (req, res, next) => {
    Projects.insert(req.body)
        .then(newProj => {
            res.status(201).json(newProj)
        })
        .catch(next)
})

module.exports = router