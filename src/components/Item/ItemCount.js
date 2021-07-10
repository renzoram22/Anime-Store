import React, { useState, useContext } from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import "./ItemCount.css";
import { CartContext } from "../Cart/CartContext";

const ItemCount = (props) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [numero, setNumero] = useState(1);
  const [addButtonContent, setAddButtonContent] = useState("Add to cart");
  let stock = props.stock;
  let idProduct = props.idProduct;
  let image = props.image;
  let name = props.name;
  let price = props.price;
  let isInCart = false;
  const onAdd = () => {
    cartItems.map((data) => {
      if (data.item.id === idProduct) {
        isInCart = true
      }
    })
    setAddButtonContent(
      <div>
        <i aria-hidden="true" class="spinner loading icon"></i>
      </div>
    );
    if (isInCart === true) {
      setAddButtonContent("Producto Repetido");
    }else{
      if (stock >= numero) {
        console.log(cartItems);
          setTimeout(() => {
          setAddButtonContent("Products Added");
          setCartItems([
            ...cartItems,
            {
              item: {
                id: idProduct,
                image: image,
                name: name,
                price: price,
              },
              qty: numero,
            },
          ]);
        }, 3000);
        setNumero(1);
      } else {
        setTimeout(() => {
          setAddButtonContent("Out of Stock");
        }, 3000);
      }
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
