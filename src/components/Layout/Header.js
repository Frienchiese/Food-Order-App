import React, { Fragment } from "react";

import classes from "./Header.module.css";
import MealImg from "../../assets/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Food App</h2>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImg} alt="Background image" />
      </div>
    </Fragment>
  );
};

export default Header;
