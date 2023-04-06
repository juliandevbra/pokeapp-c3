import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { usePokeStates } from './Context/global.context'
import Favs from './Pages/Favs'
import Home from './Pages/Home'
import PokeDetail from './Pages/PokeDetail'

function App() {

  const {themeState} = usePokeStates()

  return (
    <div className="App"  style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
      <h1 style={{fontSize: themeState.fontSize}}>Bienvenidos a la pokeApp</h1>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/favs' element={<Favs/>}/>
         <Route path='/poke/:name' element={<PokeDetail/>}/>
       </Routes>
    </div>
  )
}

export default App
