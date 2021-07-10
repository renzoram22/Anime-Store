import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import CartDetail from "./CartDetail";

export const CartContent = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <div className="CartContentContainer">
      {cartItems.map((data, index) => {
        return (
          <CartDetail
            key={index}
            idProduct={data.item.id}
            image={data.item.image}
            name={data.item.name}
            price={data.item.price}
            qty={data.qty}
          ></CartDetail>
        );
      })}
      <button class="ui button" onClick={clearCart}>
        Vaciar Carrito
      </button>
    </div>
  );
};
