import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item.js";
import ItemCount from "./ItemCount.js";
import "./ItemList.css";
import { Link } from "react-router-dom";
import Loader from "../Item/Loader.js";
import { useCartContext } from "../../context/CartContext";

const ItemList = (props) => {
  const { onAddCart } = useCartContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL)
      .then((response) => response.json())
      .then((res) => setProducts(res));
  }, []);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, [show]);

  if (!show) return <Loader></Loader>;
  return (
    <Card.Group>
      {products.map((product) => {
        const onAdd = (qty) => onAddCart(product, qty);
        return (
          <div className="ItemContainer">
            <Link to={`/ProductDetails/${product.id}`}>
              <Item
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                stock={product.stock}
              ></Item>
            </Link>
            <ItemCount stock={product.stock} onAdd={onAdd}></ItemCount>
          </div>
        );
      })}
    </Card.Group>
  );
};

export default ItemList;
