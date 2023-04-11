import axios from 'axios'
import {createContext, useContext, useState, useEffect, useReducer} from 'react'
import Swal from 'sweetalert2'

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

const initialApiState = {pokeList: [], pokeDetail: {}}

const apiReducer = (state, action) => {
    switch(action.type){
        case 'GET_POKES':
            return {pokeList: action.payload, pokeDetail: state.pokeDetail}
        case 'GET_POKE':
            return {pokeDetail: action.payload, pokeList: state.pokeList}
    }
}

const Context = ({children}) => {
    const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
    const [favState, favDispatch] = useReducer(favReducer, initialFavState)
    const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])

    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
        const fetchPokes = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                apiDispatch({type: 'GET_POKES', payload: data.results})
            }
            catch(err) {
                Swal.fire({
                    title: 'Ay no!',
                    text: 'Ocurrió el siguiente error: ' + err,
                    icon: 'error',
                    timer: 2000
                })
            }
        }
        fetchPokes()
    }, [])

    const getPoke = (name) => {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + name
        axios(url)
        .then(res => apiDispatch({type: 'GET_POKE', payload: res.data}))
        .catch(err => Swal.fire('Oops...', 'Ha ocurrido el siguiente error: ' + err, 'error'))
    }

    return( 
        <PokeStates.Provider value={{
            apiState, apiDispatch, 
            themeState, themeDispatch, 
            favState, favDispatch,
            getPoke
            }}>
            {children}
        </PokeStates.Provider>
    )
}

export default Context

export const usePokeStates = () => useContext(PokeStates)