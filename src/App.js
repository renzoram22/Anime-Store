import React from 'react';
import logo from './ico.ico';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { react } from '@babel/types';

//Components
import { Button, Icon } from 'semantic-ui-react';
import Navbar from  './components/Navbar'
import ItemListContainer from './components/Container/ItemListContainer'

class App extends React.Component {

  render(){
    
    return(
    <>    
    <Navbar>      
    </Navbar>
    <ItemListContainer
    name="Renzo"
    message="Bienvenido a Anime Store"
    ></ItemListContainer>
    </>
  )
  }
}



export default App