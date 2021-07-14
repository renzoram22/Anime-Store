import React, { useContext } from "react";
import { useCartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";

export const CartContent = () => {
  const { cartItems, setCartItems,onAddCart,clearCart } = useCartContext();
  return (
    <div className="CartContentContainer">
      {cartItems.map((data) => {
        return (
          <CartDetail
            key={data.item.id}
            id={data.item.id}
            image={data.item.image}
            name={data.item.name}
            price={data.item.price}
            qty={data.qty}
          ></CartDetail>
        );
      })}
      {cartItems.length > 0 &&
       <button class="ui button" onClick={clearCart}>
       Vaciar Carrito
     </button>
      }

  
    </div>
  );
};
