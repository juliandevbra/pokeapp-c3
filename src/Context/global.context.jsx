import {createContext, useContext, useState, useEffect, useReducer} from 'react'

export const PokeStates = createContext()

const themes = {
    dark: {
        theme: false,
        bgColor: '#12121296',
        color: 'white',
        fontSize: '3rem'
    },
    light: {
        theme: true,
        bgColor: 'white',
        color: 'black',
        fontSize: '2.5rem'
    }
}

const initialThemeState = themes.light

const themeReducer = (state, action) => {
    switch(action.type){
        case 'SWITCH_DARK':
            return themes.dark
        case 'SWITCH_LIGHT':
            return themes.light
        default: 
            throw new Error
    }
}
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const favReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
        default:
            throw new Error
    }
}

const Context = ({children}) => {
    const [pokeList, setPokeList] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
    const [favState, favDispatch] = useReducer(favReducer, initialFavState)

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])

    useEffect(() => {
        const fetchPokes = async () => {
            let res = await fetch(url)
            let data = await res.json()
            setPokeList(data.results)
        }
        fetchPokes()
    }, [])

    return( 
        <PokeStates.Provider value={{pokeList, setPokeList, themeState, themeDispatch, favState, favDispatch}}>
            {children}
        </PokeStates.Provider>
    )
}

export default Context

export const usePokeStates = () => useContext(PokeStates)