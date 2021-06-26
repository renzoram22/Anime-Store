import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import Loader from './Loader.js'


const CardExampleCard = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>${props.price}</span>
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default CardExampleCard
