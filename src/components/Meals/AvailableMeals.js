import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState, useEffect } from "react";

const BASE_URL =
  "https://food-order-app-6bbf8-default-rtdb.europe-west1.firebasedatabase.app/meals";

const AvailableMeals = () => {
  const [recievedData, setRecievedData] = useState([]);
  const [isDataRecieved, setIsDataRecieved] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(BASE_URL);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          key: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setRecievedData(loadedMeals);
      setIsDataRecieved(true);
    };

    fetchMeals().catch((error) => {
      setIsDataRecieved(true);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = recievedData.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (!isDataRecieved) {
    return (
      <section className={classes.mealsLoading}>
        <p>Page is loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
