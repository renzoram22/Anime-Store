import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import "./CartContent.css";
export const CartContent = () => {
  const { cartItems, clearCart } = useCartContext();
  return (
    <div className="CartContentContainer">
      {cartItems.map((data) => {
        return (
          <CartDetail
            key={data.item.id}
            id={data.item.id}
            image={data.item.image}
            name={data.item.title}
            price={data.item.price}
            qty={data.qty}
          ></CartDetail>
        );
      })}
      {cartItems.length > 0 ? (
        <div className="CartButtonsContainer">
          <button class="ui button" onClick={clearCart}>
            Vaciar Carrito
          </button>
          <Link to="/cart">
            <button class="ui button">Ir al carrito</button>
          </Link>
        </div>
      ) : (
        <div class="ui negative message text-center">
          <div class="header">
            Empty Cart.<br></br> Add products to continue
          </div>
        </div>
      )}
    </div>
  );
};
