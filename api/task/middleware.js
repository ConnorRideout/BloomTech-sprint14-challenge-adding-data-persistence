const response = (message, status = 400) => {
    return { status, message }
}

function checkValidBody(req, res, next) {
    /*
task_description - required
task_notes - optional
task_completed - the database defaults it to false (integer 0) if not provided
project_id - required and points to an actual project_id in the projects table
    */
    const { task_description, task_notes, task_completed, project_id } = req.body
    if (
        typeof task_description !== 'string' ||
        !task_description.trim().length
    ) {
        next(response("task_description is required and must be a string"))
    } else if (
        typeof project_id !== 'number' ||
        parseInt(project_id) !== project_id ||
        project_id < 1
    ) {
        next(response("project_id is required and must be a positive whole number"))
    } else if (
        task_notes !== undefined &&
        typeof task_notes !== 'string'
    ) {
        next(response("if task_notes is included it must be a string"))
    } else if (
        task_completed !== undefined &&
        (
            typeof task_completed !== 'boolean' &&
            (
                typeof task_completed === 'number' &&
                ![0, 1].includes(task_completed)
            )
        )
    ) {
        next(response("if task_completed is included it must be a boolean"))
    } else {
        next()
    }
}

module.exports = {
    checkValidBody
}