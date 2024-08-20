const db = require('../../data/dbConfig')

function get() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
}

function getById(task_id) {
    return db('tasks')
        .where({ task_id })
        .first()
}

function insert(task) {
    return db('tasks')
        .insert(task)
        .then(id => {
            return getById(id)
                .then(tsk => {
                    tsk.task_completed = Boolean(tsk.task_completed)
                    return tsk
                })
        })
}

module.exports = {
    get,
    getById,
    insert,
}