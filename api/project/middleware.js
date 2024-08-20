function checkValidBody(req, res, next) {
    /*
 project_name - required
 project_description - optional
 project_completed - the database defaults it to false (integer 0) if not provided
    */
    const { project_name, project_description, project_completed } = req.body
    if (
        typeof project_name !== 'string' ||
        !project_name.trim().length
    ) {
        next({ status: 400, message: "project_name is required and must be a string" })
    } else if (
        project_description !== undefined &&
        typeof project_description !== 'string'
    ) {
        next({ status: 400, message: "if project_description is included it must be a string" })
    } else if (
        project_completed !== undefined &&
        (
            typeof project_completed !== 'boolean' &&
            (
                typeof project_completed === 'number' &&
                ![0, 1].includes(project_completed)
            )
        )
    ) {
        next({ status: 400, message: "if project_completed is included it must be a boolean" })
    } else {
        next()
    }
}

module.exports = {
    checkValidBody
}