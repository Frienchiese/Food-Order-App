import React from "react";
import MealsItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <MealsItemForm id={props.id} />
    </li>
  );
};

export default MealItem;
