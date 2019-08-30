
exports.seed = function(knex, Promise) {

  return knex('recipes').insert([
    {recipe: 'Scrambled Eggs'},
    {recipe: 'Biscuits and Gravy'},
    {recipe: 'Salad'},
  ]);
};
