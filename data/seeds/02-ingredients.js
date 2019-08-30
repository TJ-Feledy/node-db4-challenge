
exports.seed = function(knex) {

  return knex('table_name').insert([
    {ingredient: 'eggs'},
    {ingredient: 'flour'},
    {ingredient: 'biscuits'},
    {ingredient: 'sage sausage'},
    {ingredient: 'heavy whipping cream'},
    {ingredient: 'butter'},
    {ingredient: 'baking powder'},
    {ingredient: 'baking soda'},
    {ingredient: 'black pepper'},
    {ingredient: 'red pepper flakes'},
    {ingredient: 'sage'},
    {ingredient: 'mexican cheese or cheddar'}
  ]);
};
