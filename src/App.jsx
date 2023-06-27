
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListConteiner/>}/>
            <Route path='/categoria/:idCategoria' element={<ItemListConteiner/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>

      </div>
  )
}

export default App
