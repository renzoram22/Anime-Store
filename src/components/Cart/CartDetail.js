import React, { useContext } from "react";
import { useCartContext } from "../../context/CartContext";
const CartDetail = (props) => {
  const { deleteItem } = useCartContext();
  const deleteThis = () =>{
    deleteItem(props.id)
  }
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
              onClick={deleteThis}
            ></i>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
