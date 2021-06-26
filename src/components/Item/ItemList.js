import React, { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import Item from './Item.js'
import {itemsData} from './ItemsData.js'
import ItemCount from './ItemCount.js';
import './ItemList.css';
import Loader from './Loader.js'



const ItemList = () => {
    const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3000)
  }, [show])

  if (!show) return (
    <Loader></Loader>
  )

    return(
<Card.Group>
{itemsData.map((item) => 
<div className='ItemContainer'>
<Item
image={item.image}
name={item.name}
price={item.price}
stock={item.stock}
></Item>
<ItemCount
stock={item.stock}
></ItemCount>
</div>
)}
 </Card.Group>
    )
}



export default ItemList
