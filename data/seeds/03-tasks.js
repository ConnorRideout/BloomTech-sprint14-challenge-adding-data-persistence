/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    return knex('tasks').insert([
        { "task_description": "fizz", "task_notes": null, "task_completed": false, "project_id": 1 },
        { "task_description": "buzz", "task_notes": 'do stuff', "task_completed": true, "project_id": 2 }
    ])
};
