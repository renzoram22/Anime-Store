import React, { useState, useEffect } from "react";
import { Message } from "semantic-ui-react";
import "./ItemListContainer.css";
import ItemList from "../Item/ItemList";
import Loader from "../Item/Loader.js";

const MessageExampleMessageProps = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, [show]);

  if (!show) return <Loader></Loader>;
  return <ItemList></ItemList>;
};

export default MessageExampleMessageProps;
