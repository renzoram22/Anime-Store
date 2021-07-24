import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartItems, clearCart } = useCartContext();
  const sumaPrecios = cartItems.reduce(
    (prev, next) => prev + next.item.price,
    0
  );
    
  return (
    <div className="ui container">
      <div className="CartContainer">
        <h2 class="ui icon header  center aligned">
          <i aria-hidden="true" class="cart icon"></i>Your Cart
          <div class="sub header">Verify all your products before continue</div>
        </h2>
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
          <>
            <div class="ui Huge label mt-4">Total Price: {sumaPrecios}</div>
            <br></br>
            <div className="CartButtonsContainer">
              <button class="ui button" onClick={clearCart}>
                Vaciar Carrito
              </button>
              <button class="ui button">Finish Order</button>
            </div>
          </>
        ) : (
          <div class="ui negative message text-center">
            <div class="header">
              Empty Cart.<br></br> Add products to continue
            </div>
            <Link to="/">
              <button class="ui button mt-2">Return to store</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
