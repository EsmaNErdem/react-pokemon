import React from 'react';
import Pokedex from './Pokedex';

const Pokegame = (props) => {
    let player1 = []
    let player2 = [...props.pokemon]

    while (player1.length < player2.length) {
        let randomIndex = Math.floor(Math.random() * player2.length)
        let randomPokemon = player2.splice(randomIndex, 1)
        player1.push(randomPokemon[0])
    }

    const totalExp1 = player1.reduce((acc, p) => acc + p.base_experience, 0)
    const totalExp2 = player2.reduce((acc, p) => acc + p.base_experience, 0)
    return (
        <>
        <Pokedex pokemons={player1} isWinner={totalExp1>totalExp2} totalExp={totalExp1}/>
        <Pokedex pokemons={player2} isWinner={totalExp2>totalExp1} totalExp={totalExp2}/>
        </>
    )
}

const pokemons = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

Pokegame.defaultProps = {
    pokemon: pokemons
};

export default Pokegame;