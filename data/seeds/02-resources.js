/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
    return knex('resources').insert([
        { "resource_name": "foo", "resource_description": null },
        { "resource_name": "bar", "resource_description": 'words here' }
    ])
};
