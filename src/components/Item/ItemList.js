import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item.js";
import ItemCount from "./ItemCount.js";
import "./ItemList.css";
import { Link } from "react-router-dom";
import Loader from "../Item/Loader.js";
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase";

const ItemList = (props) => {
  const { onAddCart } = useCartContext();
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const docs = [];
    db.collection("products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
    });
    setProducts(docs);
  };
  useEffect(() => {
    getProducts();
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
                sendKey={product.id}
                image={product.image}
                name={product.title}
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
