/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    /*
task_id - primary key
 task_description - required
 task_notes - optional
 task_completed - the database defaults it to false (integer 0) if not provided
 project_id - required and points to an actual project_id in the projects table
    */
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description')
            .notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_completed')
            .defaultTo(0)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks')
};
