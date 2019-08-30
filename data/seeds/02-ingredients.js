
exports.seed = function(knex) {

  return knex('ingredients').insert([
    {id: 1, ingredient: 'eggs'},
    {id: 2, ingredient: 'flour'},
    {id: 3, ingredient: 'biscuits'},
    {id: 4, ingredient: 'sage sausage'},
    {id: 5, ingredient: 'heavy whipping cream'},
    {id: 6, ingredient: 'butter'},
    {id: 7, ingredient: 'baking powder'},
    {id: 8, ingredient: 'baking soda'},
    {id: 9, ingredient: 'black pepper'},
    {id: 10, ingredient: 'red pepper flakes'},
    {id: 11, ingredient: 'sage'},
    {id: 12, ingredient: 'mexican cheese or cheddar'}
  ]);
};
