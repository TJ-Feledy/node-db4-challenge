
exports.seed = function(knex) {

  return knex('quantities').insert([
    {recipe_id: 1, ingredient_id: 1, quantity: 6, measurement: 'eggs'},
    {recipe_id: 1, ingredient_id: 6, quantity: 2, measurement: 'tbsp'},
    {recipe_id: 1, ingredient_id: 9, quantity: 2, measurement: 'tsp'},
    {recipe_id: 1, ingredient_id: 11, quantity: 2, measurement: 'tsp'},
    {recipe_id: 1, ingredient_id: 12, quantity: 1, measurement: 'cup'},
    {recipe_id: 2, ingredient_id: 2, quantity: 2, measurement: 'cups'},
    {recipe_id: 2, ingredient_id: 3, quantity: 1, measurement: 'tube'},
    {recipe_id: 2, ingredient_id: 4, quantity: 1, measurement: 'tube'},
    {recipe_id: 2, ingredient_id: 5, quantity: 2, measurement: 'pints'},
    {recipe_id: 2, ingredient_id: 7, quantity: .5, measurement: 'tsp'},
    {recipe_id: 2, ingredient_id: 8, quantity: .5, measurement: 'tsp'},
    {recipe_id: 2, ingredient_id: 9, quantity: 1, measurement: 'tbsp'},
    {recipe_id: 2, ingredient_id: 10, quantity: 2, measurement: 'tsp'}
  ]);
};
