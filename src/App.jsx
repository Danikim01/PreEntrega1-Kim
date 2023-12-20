import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'


import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a Bordo!"/>

        <ItemDetailContainer/>


      </div>
    )
  }
}

export default App
