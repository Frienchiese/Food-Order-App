import React, { Fragment } from "react";
import HeaderCartButton from "../UI/HeaderCartButton";

import classes from "./Header.module.css";
import MealImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Food App</h2>
        <HeaderCartButton onShowCart={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImg} alt="Background image" />
      </div>
    </Fragment>
  );
};

export default Header;
