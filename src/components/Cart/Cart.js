import React from "react";
import Modal from "../Layout/Modal";

import classes from "./Cart.module.css";

const cartItems = (
  <ul className={classes["cart-items"]}>
    {[{ id: "m1", name: "Sushi", amount: 2, price: 22.99 }].map((item) => (
      <li>{item.name}</li>
    ))}
  </ul>
);

const Cart = (props) => {
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
