const express = require('express');

const Recipes = require('./recipes/recipe-model.js');

const server = express();

server.use(express.json());

server.get('/api/recipes', (req, res) => {
  const { id } = req.params

  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.get('/api/recipes/:id/shoppingList', (req, res) => {
  const {id} = req.params

  Recipes.getShoppingList(id)
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

server.get('/api/recipes/:id/instructions', (req, res) => {
  const { id } = req.params

  Recipes.getInstructions(id)
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

module.exports = server