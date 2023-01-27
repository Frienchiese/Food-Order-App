import React from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label={props.label}
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;
