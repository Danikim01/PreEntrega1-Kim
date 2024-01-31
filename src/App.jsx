import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import {Cart} from './components/Cart/Cart';
import ResponsiveNavigation from './components/ResponsiveNavigation/ResponsiveNavigation';

//Context Provider import
import {CartContextProvider} from './components/Context/CartContext';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return(
    <CartContextProvider>
      <Router>
        <div className="App">
          {/* <NavBar/> */}
          <ResponsiveNavigation/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/item/:id' element={<ItemDetail/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
          </Routes>
        </div>
      </Router>
    </CartContextProvider>
  )
}

export default App
