
exports.seed = function(knex, Promise) {

  return knex('recipes').insert([
    {id: 1, recipe: 'Scrambled Eggs'},
    {id: 2, recipe: 'Biscuits and Gravy'}
  ]);
};
