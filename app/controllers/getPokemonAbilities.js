const axios = require('axios').default;

const getPokemonAbilities = (req,res) => {
    const { pokemon } = req.params;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {

        const abilities = response.data.abilities.map(item => ({name: item.ability.name, isHidden: item.is_hidden}));

        const orderedAbilities = abilities.sort((a, b)=> a.name.localeCompare(b.name));

        res.send({name: response.data.name, abilitties: orderedAbilities});

    }).catch(error => {
        res.status(404);
        res.send('ERROR: pokemon not found');
    })
}

module.exports = getPokemonAbilities;