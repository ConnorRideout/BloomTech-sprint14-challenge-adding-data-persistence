const db = require('../../data/dbConfig')

function get() {
    return db('projects')
}

function getById(project_id) {
    return db('projects')
        .where({ project_id })
        .first()
}

function insert(project) {
    return db('projects')
        .insert(project)
        .then(id => {
            return getById(id)
                .then(proj => {
                    proj.project_completed = Boolean(proj.project_completed)
                    return proj
                })
        })
}

module.exports = {
    get,
    getById,
    insert,
}