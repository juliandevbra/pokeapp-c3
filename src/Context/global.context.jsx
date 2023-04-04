import {createContext, useContext, useState, useEffect} from 'react'

export const PokeStates = createContext()

const Context = ({children}) => {
    const [pokeList, setPokeList] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

    useEffect(() => {
        const fetchPokes = async () => {
            let res = await fetch(url)
            let data = await res.json()
            setPokeList(data.results)
        }
        fetchPokes()
    }, [])

    return( 
        <PokeStates.Provider value={{pokeList, setPokeList}}>
            {children}
        </PokeStates.Provider>
    )
}

export default Context

export const usePokeStates = () => useContext(PokeStates)