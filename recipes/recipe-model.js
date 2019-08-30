db = require('../data/db-config.js')

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
  if (recipe_id) {
    return db('quantities as q')
      .join('recipes as r', 'r.id', 'q.recipe_id')
      .join('ingredients as ing', 'ing.id', 'ingredient_id')
      .select('r.recipe', 'ing.ingredient', 'q.quantity', 'q.measurement')
      .where(recipe_id = 'q.recipe_id')
  }else {
    return null
  }
}

function getInstructions(recipe_id) {

}