import React, { createContext, useContext, useState } from "react";
export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const clearCart = () => setCartItems([]);
  const deleteItem = (id) => {
    const newCartDelete = cartItems.filter(function (car) {
      return car.item.id !== id;
    });
    setCartItems(newCartDelete);
  };
  let agregarCart = false;
  const isInCart = (id) => {
    cartItems.map((data) => {
      let idProduct = data.item.id;
      if (idProduct === id) {
        agregarCart = true;
      } else {
        agregarCart = false;
      }
    });
  };

  const onAddCart = (item, qty) => {
    isInCart(item.id);
    if (agregarCart === true) {
      const newCart = cartItems.map((cartElement) => {
        if (cartElement.item.id === item.id) {
          return { ...cartElement, qty: cartElement.qty + qty };
        } else {
          return cartElement;
        }
      });

      console.log(cartItems);
      console.log(newCart);

      setCartItems(newCart);
      agregarCart = false;
    } else {

      setCartItems((prev) => [...prev, { item, qty }]);
      console.log(cartItems);

    }
  };
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, clearCart, onAddCart, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
