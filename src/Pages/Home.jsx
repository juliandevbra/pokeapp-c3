import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context/global.context'

const Home = () => {
    const {pokeList} = usePokeStates()
  return (
    <div>
        {pokeList.map(poke => <Link to={'/poke/' + poke.name} key={poke.name}><h4>{poke.name}</h4></Link>)}
    </div>
  )
}

export default Home