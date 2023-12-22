import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


const App = () => {
  return(
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Nuestra Tienda!"/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categorias"/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
