import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase";
const OrderForm = ({ finishOrder }) => {
  const { cartItems } = useCartContext();
  const UserData = {
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
  };
  const [data, SetData] = useState(UserData);

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    SetData((prevState) => ({
      buyer: {
        ...prevState.buyer,
        [name]: value,
      },
    }));
  };

  const HandleSubmit = () => {
    let finalCart = [];
    let finalPrice = 0;

    cartItems.forEach((data) => {
      finalPrice += data.item.price;
      finalCart.push({
        id: data.item.id,
        title: data.item.title,
        price: data.item.price,
      });
    });

    SetData((prevState) => ({
      buyer: {
        ...prevState.buyer,
      },
      items: finalCart,
      date: Date().toLocaleString(),
      total: finalPrice,
    }));

    const orders = db.collection("orders");
    orders.add(data).then(({ id }) => {
      finishOrder(id);
    });
  };

  return (
    <>
      <Form className="mt-4" onSubmit={HandleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Name"
            name="name"
            onChange={HandleOnChange}
            value={data.name}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            placeholder="Phone"
            name="phone"
            onChange={HandleOnChange}
            value={data.phone}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            name="email"
            onChange={HandleOnChange}
            value={data.email}
          />
        </Form.Field>
        <Button type="submit">Finish Order</Button>
      </Form>
    </>
  );
};

export default OrderForm;
