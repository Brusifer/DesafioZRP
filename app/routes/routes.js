const express = require('express');

const router = express.Router();

const { getPokemonAbilities } = require('../controllers');


router.get('/api/pokemons/:pokemon', getPokemonAbilities);

module.exports = router