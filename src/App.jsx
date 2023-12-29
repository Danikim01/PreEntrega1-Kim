import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return(
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Nuestra Tienda!"/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categorias"/>}></Route>
          <Route path='/item/:id' element={<ItemDetail/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
