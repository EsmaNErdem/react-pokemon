import React from 'react';
import "./Pokecard.css"
// indivual card
const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = ({pokemon}) => {
    const imgUrl = `${POKE_API}${pokemon.id}.png`
    return (
        <div className='Pokecard'>
            <h4 className='Pokecard-name'>{pokemon.name}</h4>
            <img className='Pokecard-img' src={imgUrl} alt='Pokemon'/>
            <p className='Pokecard-type'>TYPE: {pokemon.type}</p>
            <p className='Pokecard-exp'>EXP: {pokemon.base_experience}</p>
        </div>
    )
}

export default Pokecard