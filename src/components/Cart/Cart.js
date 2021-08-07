import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import OrderForm from "./OrderForm";

export const Cart = () => {
  const { cartItems, clearCart } = useCartContext();
  const [orderId, setOrderId] = useState(0);
  const finishOrder = (id) => {
    setOrderId(id);
    clearCart();
  };

  const sumaPrecios = cartItems.reduce(
    (prev, next) => prev + next.item.price,
    0
  );

  return (
    <div className="ui container">
      <div className="CartContainer">
        {orderId.length > 0 ? (
          <div class="ui icon message">
            <i aria-hidden="true" class="check circle icon"></i>
            <div class="content">
              <div class="header">
                Your Order ID is <b>{orderId}</b>. Thanks for buying
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 class="ui icon header  center aligned">
              <i aria-hidden="true" class="cart icon"></i>Your Cart
              <div class="sub header">
                Verify all your products before continue
              </div>
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
                </div>
                <OrderForm finishOrder={finishOrder}></OrderForm>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
