import React from 'react'
import { usePokeStates } from '../Context/global.context'

const Favs = () => {


    const {favState} = usePokeStates()
  return (
    <div>
        {favState.map(poke => (
            <div>
                <h3>{poke.name}</h3>
                <img src={poke.sprites.front_default} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Favs