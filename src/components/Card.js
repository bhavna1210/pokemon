import React from 'react';
import colorTypes from '../helpers/colorTypes.js';
const Card = ({ pokemon }) => {
    return (<>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img class="w-half" src={pokemon.sprites.back_default} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{pokemon.name}</div>
                <p class="text-gray-700 text-base">
                    <p className="title">Weight : {pokemon.weight}</p>
                    <p className="title">Height : {pokemon.height}</p>
                    <p className="title">Ability : {pokemon.abilities[0].ability.name}</p>
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {pokemon.types.map(obj => {
                    return (
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" style={{ backgroundColor: colorTypes[obj.type.name] }}>{obj.type.name}</span>
                    )
                })}
            </div>
        </div>
        <br />
    </>
    )
}

export default Card