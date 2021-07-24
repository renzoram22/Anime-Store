import React, { useState } from "react";
import { Accordion, Icon, Button } from "semantic-ui-react";
import "./CartWidget.css";
import { CartContent } from "./CartContent";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cartItems } = useCartContext();
  const [state, setState] = useState(0);

  const handleClick = (e, titleProps) => {
    if (state === 0) {
      setState(1);
    } else {
      setState(0);
    }
  };

  return (
    <div className="NavBarCartContainer">
      <Accordion>
        <Accordion.Title active={state === 1} index={1} onClick={handleClick}>
          <Button animated="vertical">
            <Button.Content hidden>Cart </Button.Content>
            <Button.Content visible>
              {cartItems.length}
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Accordion.Title>
        <Accordion.Content active={state === 1}>
          <CartContent></CartContent>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};
export default CartWidget;
