// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')
const {
    checkValidBody
} = require('./middleware')

router.get('/', (req, res, next) => {
    Tasks.get()
        .then(tasks => {
            tasks = tasks.map(t => {
                t.task_completed = Boolean(t.task_completed)
                return t
            })
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.insert(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next)
})

module.exports = router