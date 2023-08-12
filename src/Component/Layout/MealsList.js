import { useContext, useState } from "react";
import MyContext from "../../context/Context";
import Card from "../UI/Card";
import classes from "./MealsList.module.css";

const MealsList = () => {
  const [qty, setQty] = useState(1);
  const ctx = useContext(MyContext);

  const qtyChangeHandler = (e) => {
    setQty(e.target.value);
  };

  function addToCart(meal) {
    const exists = ctx.cart.find((item) => item.id === meal.id); //see the itme exist or not
    //if exists, Change the qty
    if (exists) {
      const updatedCart = ctx.cart.map((item) => {
        if (item.id === meal.id) {
          return { ...item, qty: +item.qty + Math.ceil(Number(qty)) };
        }
        return item;
      });
      ctx.setCart(updatedCart);
    }
    //if not exists, Add new item
    else {
      ctx.setCart((prev) => {
        return [
          ...prev,
          {
            ...meal,
            qty: Math.ceil(Number(qty)),
          },
        ];
      });
    }

    setQty(1);
    document.querySelectorAll(".qty").forEach((input) => {
      input.value = 1;
    });
  }

  return (
    <Card className={classes.card}>
      {ctx.meals.map((meal) => (
        <div
          key={meal.id}
          className={classes.meal}>
          <div style={{ width: "70%" }}>
            <h3 className={classes.name}>{meal.name}</h3>
            <p className={classes.description}>{meal.description}</p>
            <p className={classes.price}>${meal.price}</p>
          </div>
          <div>
            <span className={classes.amount}>Amount</span>
            <input
              className="qty"
              id="qty"
              onChange={qtyChangeHandler}
              min="1"
              step={1}
              defaultValue={1}
              max={10}
              type="number"
            />
            <button
              onClick={() => addToCart(meal)}
              className={classes["add-button"]}>
              + Add
            </button>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default MealsList;
