import React, { useState, useEffect } from "react";
import ItemDetails from "../components/Item/ItemDetails";
import "./ProductDetails.css";
import { db } from "../firebase";

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState([]);
  const idProduct = match.params.id;

  useEffect(() => {
    const getProducts = () => {
      const docs = [];
      db.collection("products").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
          let filteredItem = docs.filter(
            (itemFiltered) => itemFiltered.id === idProduct
          );
          setProduct(filteredItem);
        });
      });
    };
    getProducts();
  }, [idProduct]);

  return (
    <div>
      {product.map((product) => {
        return (
          <div className="ui container">
            <ItemDetails
              id={product.id}
              image={product.image}
              name={product.title}
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
