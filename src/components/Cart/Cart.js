import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CartOrderForm from "./CartOrderForm";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${Math.abs(cartCtx.totalAmount.toFixed(2))}`;
  const [isOrderChecked, setIsOrderchecked] = useState(false);

  const addItemToCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          price={item.price}
          amount={item.amount}
          name={item.name}
          onAdd={addItemToCartHandler.bind(null, item)}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );

  const displayCheckout = () => {
    setIsOrderchecked(!isOrderChecked);
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {!isOrderChecked && (
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        )}
        {hasItems && !isOrderChecked && (
          <button className={classes.button} onClick={displayCheckout}>
            Order
          </button>
        )}
      </div>
      {isOrderChecked && <CartOrderForm onCancel={props.onClose} />}
    </Modal>
  );
};

export default Cart;
