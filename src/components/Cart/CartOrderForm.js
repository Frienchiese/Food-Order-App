import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./CartOrderForm.module.css";

const CartOrderForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [isFormValid, setIsFormValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const isEmpty = (input) => {
    return input.trim().length > 0 ? true : false;
  };

  const isFiveDigit = (input) => {
    return input.trim().length === 5 && !isNaN(+input) ? true : false;
  };

  const formSubmitHandler = (formData) => {
    fetch(
      "https://food-order-app-6bbf8-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: formData,
          orderedItems: cartCtx.items,
        }),
      }
    ).then((res) => console.log(res.status, res.ok));
  };

  const formValidationHandler = (event) => {
    event.preventDefault();
    const enteredName = event.target[0].value;
    const enteredStreet = event.target[1].value;
    const enteredPostal = event.target[2].value;
    const enteredCity = event.target[3].value;

    const isEnteredNameValid = isEmpty(enteredName);
    const isEnteredStreetValid = isEmpty(enteredStreet);
    const isEnteredPostalValid = isFiveDigit(enteredPostal);
    const isEnteredCityValid = isEmpty(enteredCity);

    setIsFormValid({
      name: isEnteredNameValid,
      street: isEnteredStreetValid,
      postal: isEnteredPostalValid,
      city: isEnteredCityValid,
    });

    if (
      isFormValid.name &&
      isFormValid.street &&
      isFormValid.postal &&
      isFormValid.city
    ) {
      const formData = {
        name: enteredName,
        street: enteredStreet,
        postal: enteredPostal,
        city: enteredCity,
      };
      formSubmitHandler(formData);
    }
  };

  return (
    <form className={classes.form} onSubmit={formValidationHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name :</label>
        <input id="name" type="text" />
      </div>
      {!isFormValid.name && <p>Please enter valid name</p>}
      <div className={classes.control}>
        <label htmlFor="street">Street :</label>
        <input id="street" type="text" />
      </div>
      {!isFormValid.street && <p>Please enter valid street</p>}
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code :</label>
        <input id="postal" type="text" />
      </div>
      {!isFormValid.postal && <p>Please enter valid postal</p>}
      <div className={classes.control}>
        <label htmlFor="city">City :</label>
        <input id="city" type="text" />
      </div>
      {!isFormValid.city && <p>Please enter valid city</p>}
      <button className={classes.button} onClick={props.onCancel}>
        Cancel
      </button>
      <button className={classes.button}>Confirm</button>
    </form>
  );
};

export default CartOrderForm;
