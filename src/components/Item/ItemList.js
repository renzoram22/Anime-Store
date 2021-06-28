import React, { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import Item from './Item.js'
import ItemCount from './ItemCount.js';
import './ItemList.css';




const ItemList = (props) => {

    return(
<Card.Group>
{props.data.map((item) => 
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
