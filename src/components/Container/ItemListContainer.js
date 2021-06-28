import React from 'react'
import { Message } from 'semantic-ui-react'
import './ItemListContainer.css';
import ItemList from '../Item/ItemList';
import Loader from '../Item/Loader.js'
import {itemsData} from '../Item/ItemsData.js'

const MessageExampleMessageProps = () => {

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
    
  <ItemList
  data={itemsData}
  >
  </ItemList>
  )
}

export default MessageExampleMessageProps
