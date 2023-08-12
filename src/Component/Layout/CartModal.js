import classNames from "classnames";
import { useContext } from "react";
import noCart from "../../assets/images/no-cart.png";
import MyContext from "../../context/Context";
import Card from "../UI/Card";
import classes from "./CartModal.module.css";

const CartModal = () => {
  const ctx = useContext(MyContext);

  const closeCart = () => {
    document.querySelector("#overlay").style.opacity = "0";
    document.querySelector("#cart-modal").classList.remove("open");
    setTimeout(() => {
      ctx.setCartIsOpen();
    }, 200);

    document.body.style.overflow = "auto";
  };

  const plusQty = (meal) => {
    const updatedCart = ctx.cart.map((item) => {
      if (item.id === meal.id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    ctx.setCart(updatedCart);
  };

  const minusQty = (meal) => {
    let updatedCart;

    if (meal.qty === 1) {
      updatedCart = ctx.cart.filter((item) => item.id !== meal.id);
    } else {
      updatedCart = ctx.cart.map((item) => {
        if (meal.id === item.id) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
    }

    ctx.setCart(updatedCart);
  };

  return (
    ctx.cartIsOpen && (
      <>
        <Card
          id="cart-modal"
          className={classNames(classes.card)}>
          {ctx.cart.length === 0 && (
            <div className={classes.nocart}>
              <img
                className={classes.noCart}
                alt="no cart"
                src={noCart}></img>
              <h3 className={classes.noCardDescription}>There is no items in your cart</h3>
            </div>
          )}
          {ctx.cart.map((meal) => (
            <div
              key={meal.id}
              className={classes.meal}>
              <div>
                <h3 className={classes.name}>{meal.name}</h3>
                <div className={classes["meal-details"]}>
                  <p className={classes.price}>${meal.price}</p>
                  <p className={classes.amount}>x {meal.qty}</p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    minusQty(meal);
                  }}
                  className={classes.button}>
                  -
                </button>
                <button
                  onClick={() => {
                    plusQty(meal);
                  }}
                  className={classes.button}>
                  +
                </button>
              </div>
            </div>
          ))}
        </Card>
        <div
          id="overlay"
          onClick={closeCart}
          className={classNames(classes.overlay)}></div>
      </>
    )
  );
};

export default CartModal;
