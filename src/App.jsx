import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Favs from './Pages/Favs'
import Home from './Pages/Home'
import PokeDetail from './Pages/PokeDetail'

function App() {

  return (
    <div className="App">
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
