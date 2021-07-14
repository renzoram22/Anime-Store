import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import ItemCount from "../components/Item/ItemCount";
import Item from "../components/Item/Item.js";
import { useCartContext } from "../context/CartContext";

const Category = ({ match }) => {
  const { onAddCart } = useCartContext();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL)
      .then((response) => response.json())
      .then((res) => setProduct(res));
  }, []);

  const productCategory = product.filter(
    (product) => product.idCategory == match.params.idCategory
  );

  return (
    <Card.Group>
      {productCategory.map((product) => {
        const onAdd = (qty) => onAddCart(product, qty);
        return (
          <div className="ItemContainer">
            <Link to={`/ProductDetails/${product.id}`}>
              <Item
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

export default Category;
