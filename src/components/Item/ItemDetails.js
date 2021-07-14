import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import ItemCount from "./ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetails = (props) => {
  const { onAddCart } = useCartContext();
  const onAdd = (qty) => onAddCart(props, qty);
  return (
    <Segment placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <img src={props.image} class="ui image" />
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <h2 class="ui header">
            <div class="content">{props.name}</div>
          </h2>
          <h2 class="ui header">
            <i aria-hidden="true" class="dollar icon"></i>
            <div class="content">
              {props.price}
              <div class="sub header">{props.state}</div>
            </div>
          </h2>

          <div class="ui segment">{props.description}</div>

          <ItemCount stock={props.stock} onAdd={onAdd}></ItemCount>
        </Grid.Column>
      </Grid>

      <Divider vertical></Divider>
    </Segment>
  );
};

export default ItemDetails;
