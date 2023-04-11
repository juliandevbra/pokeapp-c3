import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { usePokeStates } from '../Context/global.context'

const PokeDetail = () => {

    const {name} = useParams()
    const {favDispatch, apiState, apiDispatch, getPoke} = usePokeStates()

    useEffect(() => {
        getPoke(name)
    }, [name])
    
    const addFav = () => {
        favDispatch({type: 'ADD_FAV', payload: apiState.pokeDetail})
        toast('⭐ Se ha añadido a favoritos!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
    }

  return (
    <div>
      <ComponenteInexistente></ComponenteInexistente>
        <h2>{apiState.pokeDetail.name}</h2>
        <img src={apiState.pokeDetail.sprites?.front_default} alt="" />
        <br />
        <button onClick={addFav}>⭐</button>
    </div>
  )
}

export default PokeDetail