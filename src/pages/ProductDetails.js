import React, { useState, useEffect } from "react";
import ItemDetails from "../components/Item/ItemDetails";
import "./ProductDetails.css";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL)
      .then((response) => response.json())
      .then((res) => setProduct(res));
  }, []);

  const productInfo = product.filter(
    (product) => product.id == match.params.id
  );

  return (
    <div>
      {productInfo.map((product) => {
        return (
          <div className="ui container">
            <ItemDetails
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              state={product.state}
              stock={product.stock}
            ></ItemDetails>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
