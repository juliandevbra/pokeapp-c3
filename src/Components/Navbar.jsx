import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context/global.context'

const Navbar = () => {

  const {themeState, themeDispatch} = usePokeStates()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_DARK'})
    } else {
      themeDispatch({type: 'SWITCH_LIGHT'})
    }
  }

  return (
    <div>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>

        <button onClick={switchTheme}>{themeState.theme ? '🌕' : '🌞'}</button>
    </div>
  )
}

export default Navbar