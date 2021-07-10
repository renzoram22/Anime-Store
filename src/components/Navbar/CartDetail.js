import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
const CartDetail = (props) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const deleteProduct = () => {
    let newarray = cartItems.filter(
      (element) => element.item.id !== props.idProduct
    );
    setCartItems(newarray);
  };
  return (
    <div>
      <div class="ui comments">
        <div class="comment">
          <a class="avatar">
            <img src={props.image} />
          </a>
          <div class="content">
            <div class="author">{props.name}</div>
            <div class="metadata">
              <div>X{props.qty}</div>
              <div>
                <i aria-hidden="true" class="dollar icon"></i>
                {props.price}
              </div>
            </div>

            <i
              aria-hidden="true"
              class="trash icon"
              onClick={deleteProduct}
            ></i>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
