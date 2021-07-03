import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import ItemCount from "../components/Item/ItemCount";
import Item from "../components/Item/Item.js";

const Category = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/06ba8cd7-8a5b-494f-a27b-93e4b80845f5")
      .then((response) => response.json())
      .then((res) => setProduct(res));
  }, []);

  const productCategory = product.filter(
    (product) => product.idCategory == match.params.idCategory
  );

  return (
    <Card.Group>
      {productCategory.map((product) => {
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
            <ItemCount stock={product.stock}></ItemCount>
          </div>
        );
      })}
    </Card.Group>
  );
};

export default Category;
