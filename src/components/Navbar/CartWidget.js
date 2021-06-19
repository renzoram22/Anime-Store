import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './CartWidget.css'
const ButtonExampleAnimated = () => (
  <div className="CartContainer"> 
    <Button animated='vertical'>
      <Button.Content hidden>Cart</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
  </div>
)

export default ButtonExampleAnimated