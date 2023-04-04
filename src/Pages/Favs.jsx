import React from 'react'

const Favs = () => {
    let favs = localStorage.getItem('favs')
    let parsedFavs = JSON.parse(favs)
  return (
    <div>
        {parsedFavs.map(poke => (
            <div>
                <h3>{poke.name}</h3>
                <img src={poke.sprites.front_default} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Favs