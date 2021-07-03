import React, { useState, useEffect } from "react";
import ItemDetails from "../components/Item/ItemDetails";
import "./ProductDetails.css";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/06ba8cd7-8a5b-494f-a27b-93e4b80845f5")
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
