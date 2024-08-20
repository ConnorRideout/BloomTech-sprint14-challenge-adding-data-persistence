function checkValidBody(req, res, next) {
    /*
resource_name - required and unique
resource_description - optional
    */
    const { resource_name, resource_description } = req.body
    if (
        typeof resource_name !== 'string' ||
        !resource_name.trim().length
    ) {
        next({ status: 400, message: "resource_name is required, must be a string, and must be unique" })
    } else if (
        resource_description !== undefined &&
        typeof resource_description !== 'string'
    ) {
        next({ status: 400, message: "if resource_description is included it must be a string" })
    } else {
        next()
    }
}

module.exports = {
    checkValidBody
}