import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeDetail = () => {
    const [poke, setPoke] = useState({})
    
    const {name} = useParams()
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name
    
    let favs = localStorage.getItem('favs')

    console.log(JSON.parse(favs))
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPoke(data))
    }, [])

    const addFav = () => {
        if(favs){
            let parsedFavs = JSON.parse(favs)
            favs = [...parsedFavs, poke]
        } else {
            favs = [poke]
        }
        localStorage.setItem('favs', JSON.stringify(favs))
    }

  return (
    <div>
        <h2>{poke.name}</h2>
        <img src={poke.sprites?.front_default} alt="" />
        <br />
        <button onClick={addFav}>⭐</button>
    </div>
  )
}

export default PokeDetail