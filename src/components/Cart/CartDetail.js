import React from "react";
import { useCartContext } from "../../context/CartContext";
const CartDetail = (props) => {
  const { deleteItem } = useCartContext();
  const deleteThis = () => {
    deleteItem(props.id);
  };
  return (
    <div className="cartDetailContainer">
      <div class="ui comments">
        <div class="comment">
          <div class="avatar">
            <img src={props.image} alt={props.name} />
          </div>
          <div class="content">
            <div class="author">{props.name}</div>
            <div class="metadata">
              <div>X{props.qty}</div>
              <div>
                <i aria-hidden="true" class="dollar icon"></i>
                {props.price}
              </div>
            </div>

            <i aria-hidden="true" class="trash icon" onClick={deleteThis}></i>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
