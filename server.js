const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/api/recipes', (req, res) => {
  db('recipes as r')
    .join('quantities as q', 'q.recipe_id', 'r.id')
    .join('ingredients as ing', 'ing.id', 'q.ingredient_id')
    // .join('instructions as ins', 'ins.recipe_id', 'r.id')
    .select('r.recipe', 'ing.ingredient', 'q.quantity', 'q.measurement')
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

module.exports = server