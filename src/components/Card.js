import React from 'react';
import colorTypes from '../helpers/colorTypes.js';

const Card = ({ pokemon }) => {
    return (<>
        <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg bg-white text-center capitalize cursor-pointer">
            <img className="w-1/4 inline" src={pokemon.sprites.back_default} alt="Sunset in the mountains" />
            <img className="w-1/4 inline" src={pokemon.sprites.back_shiny} alt="Sunset in the mountains" />
            <img className="w-1/4 inline" src={pokemon.sprites.front_default} alt="Sunset in the mountains" />
            <img className="w-1/4 inline" src={pokemon.sprites.front_shiny} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{pokemon.name}</div>
                <div className="text-gray-700 text-base">
                    <p className="title">Weight : {pokemon.weight}</p>
                    <p className="title">Height : {pokemon.height}</p>
                    <p className="title">Ability : {pokemon.abilities.map((a, i) => {
                        return (
                            <span key={i} className="mr-1">{a.ability.name}</span>
                        )
                    })}
                    </p>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                {pokemon.types.map((obj, i) => {
                    return (
                        <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" style={{ backgroundColor: colorTypes[obj.type.name] }}>{obj.type.name}</span>
                    )
                })}
            </div>
        </div>
    </>
    )
}

export default Card