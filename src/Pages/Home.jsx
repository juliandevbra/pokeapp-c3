import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context/global.context'
// import dotor from '../assets/images/doctor.jpg'
const Home = () => {
    const {apiState} = usePokeStates()
  return (
    <div>
      {/* Ejemplo de importar imagen desde src */}
      {/* <img src={dotor} alt=''/>  */}
      {/* Ejemplo de importar imagen desde public */}
      {/* <img src='/images/doctor.jpg' alt=''/> */}
        {apiState.pokeList.map(poke => <Link to={'/poke/' + poke.name} key={poke.name}><h4>{poke.name}</h4></Link>)}
    </div>
  )
}

export default Home