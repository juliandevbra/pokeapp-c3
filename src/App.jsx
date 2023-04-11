import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar'
import { usePokeStates } from './Context/global.context'
import Favs from './Pages/Favs'
import Home from './Pages/Home'
import PokeDetail from './Pages/PokeDetail'
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './Clase 26/ErrorBoundary'

function App() {

  const {themeState} = usePokeStates()

  return (
    <div className="App"  style={{backgroundColor: themeState.bgColor, color: themeState.color}}>
      <h1 style={{fontSize: themeState.fontSize}}>Bienvenidos a la pokeApp</h1>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/favs' element={<Favs/>}/>
         <Route path='/poke/:name' element={<ErrorBoundary><PokeDetail/></ErrorBoundary>}/>
       </Routes>
       <ToastContainer/>
    </div>
  )
}

export default App
