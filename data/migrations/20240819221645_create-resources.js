/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    /*
resource_id - primary key
 resource_name - required and unique
 resource_description - optional
    */
    return knex.schema.createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name')
            .unique()
            .notNullable()
        tbl.string('resource_description')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('resources')
};
