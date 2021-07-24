import React from "react";
import { Card, Image } from "semantic-ui-react";

const Item = (props) => (
  <Card key={props.sendKey}>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className="date">${props.price}</span>
      </Card.Meta>
    </Card.Content>
  </Card>
);

export default Item;
