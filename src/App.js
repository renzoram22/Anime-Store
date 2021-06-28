import React, { useState, useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

//Components
import Navbar from  './components/Navbar'
import ItemListContainer from './components/Container/ItemListContainer'

export default function App() {

  return (
    <>    
    <Navbar></Navbar>
    <ItemListContainer></ItemListContainer>
    </>
  );
}




