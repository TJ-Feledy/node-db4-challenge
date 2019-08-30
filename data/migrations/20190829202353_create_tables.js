
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments()
    tbl.string('recipe', 128).notNullable().unique()
  })
  .createTable('ingredients', tbl => {
    tbl.increments()
    tbl.string('ingredient', 128).notNullable().unique()
  })
  .createTable('instructions', tbl => {
    tbl.increments()
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
    tbl.string('instruction').notNullable()
  })
  .createTable('quantities', tbl => {
    tbl.increments()
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
    tbl.float('quantity').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('quantities')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
