import React from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css"

// list of pokemon cards
const Pokedex = ({pokemons, isWinner, totalExp}) => {
    let winner = null
    if (isWinner) {
        winner = <p className='Pokedex-winner'>This hand wins!</p>
    }
    return (
        <div className='Pokedex'>
            <h1 className='Pokedex-title'>Pokedex</h1>
            <div className='Pokedex-cards'>
                {pokemons.map(p => <Pokecard
                pokemon={p}
                />)} 
            </div>
            <p>{totalExp}</p>
            {winner}
        </div>
    )
}

export default Pokedex;