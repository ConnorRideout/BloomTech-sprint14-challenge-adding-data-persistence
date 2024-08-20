/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
    return knex('projects').insert([
        { "project_name": "bar", "project_description": null, "project_completed": false },
        { "project_name": "baz", "project_description": 'hi there', "project_completed": true }
    ])
};
