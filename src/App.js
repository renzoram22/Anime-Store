import React, { useState, useEffect } from 'react';
import logo from './ico.ico';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { react } from '@babel/types';

//Components
import { Button, Icon } from 'semantic-ui-react';
import Navbar from  './components/Navbar'
import ItemListContainer from './components/Container/ItemListContainer'
import {itemsData} from './components/Item/ItemsData'

export default function App() {

  const [items, setItems] = useState([]);
  const itemsList = itemsData.map((item, indice) => `${item.name} ${indice}`)



  useEffect(() => {
    setTimeout(() => {
        setItems(itemsData)
        console.log(itemsList)
    }, 2000);
  });


  return (
    <>    
    <Navbar>      
    </Navbar>
    <ItemListContainer>
    </ItemListContainer>
    </>
  );
}




