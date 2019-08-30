const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/api/recipes', (req, res) => {
  db('recipes')
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `${err}` })
    })
})

module.exports = server