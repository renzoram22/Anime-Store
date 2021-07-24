import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import ItemCount from "../components/Item/ItemCount";
import Item from "../components/Item/Item.js";
import { useCartContext } from "../context/CartContext";
import { db } from "../firebase";
const Category = ({ match }) => {
  const { onAddCart } = useCartContext();
  const [product, setProduct] = useState([]);
  const idCategory = match.params.idCategory;
  useEffect(() => {
    const getProducts = () => {
      const docs = [];
      db.collection("products").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        let filteredItem = docs.filter(
          (itemFiltered) => itemFiltered.idCategory === idCategory
        );
        setProduct(filteredItem);
      });
    };
    getProducts();
  }, [idCategory]);

  return (
    <Card.Group>
      {product.map((data) => {
        const onAdd = (qty) => onAddCart(data, qty);
        return (
          <div className="ItemContainer">
            <Link to={`/ProductDetails/${data.id}`}>
              <Item
                key={data.id}
                image={data.image}
                name={data.name}
                price={data.price}
                stock={data.stock}
              ></Item>
            </Link>
            <ItemCount stock={data.stock} onAdd={onAdd}></ItemCount>
          </div>
        );
      })}
    </Card.Group>
  );
};

export default Category;
