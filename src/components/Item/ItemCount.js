import React, { useState } from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import "./ItemCount.css";

const ItemCount = (props) => {
  const [numero, setNumero] = useState(1);
  const [addButtonContent, setAddButtonContent] = useState("Add to cart");
  let stock = props.stock;

  const onAdd = () => {
    setAddButtonContent(
      <div>
        <i aria-hidden="true" class="spinner loading icon"></i>
      </div>
    );
    if (stock >= numero) {
      setTimeout(() => {
        setAddButtonContent("Products Added");
      }, 3000);
    } else {
      setTimeout(() => {
        setAddButtonContent("Out of Stock");
      }, 3000);
    }
  };
  const handleIncrement = () => {
    setNumero(numero + 1);
  };

  const handleDecrement = () => {
    if (numero === 1) {
    } else {
      setNumero(numero - 1);
    }
  };

  return (
    <div className="ItemCountContainer">
      <button class="ui  button" onClick={handleDecrement}>
        <div class="visible content">-</div>
      </button>
      <div class="ui input">
        <input value={numero} type="number" />
      </div>
      <button class="ui button" onClick={handleIncrement}>
        <div class="visible content">+</div>
      </button>
      <button class="ui button addButton" onClick={onAdd}>
        {addButtonContent}
      </button>
    </div>
  );
};

export default ItemCount;
