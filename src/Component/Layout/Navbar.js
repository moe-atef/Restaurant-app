import { useContext, useEffect } from "react";
import mealsImage from "../../assets/images/meals.jpg";
import MyContext from "../../context/Context";
import classes from "./Navbar.module.css";
import Searchbar from "./Searchar";

const Navbar = () => {
  const ctx = useContext(MyContext);

  const openCart = () => {
    ctx.setCartIsOpen(1);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.querySelector("#overlay").style.opacity = "1";
      document.querySelector("#cart-modal").classList.add("open");
    }, 10);
  };

  useEffect(() => {
    document.querySelector("#cart").style.transform = "scale(1.1)";
    setTimeout(() => {
      document.querySelector("#cart").style.transform = "scale(1)";
    }, 150);
  }, [ctx.cart]);

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>Flavor Fusion</div>
        <Searchbar></Searchbar>
        <button
          id="cart"
          onClick={openCart}
          className={classes.cart}>
          <i className="fas fa-shopping-cart"></i>
          <p>Your Cart</p>
          <p className={classes.count}>{ctx.cart.length}</p>
        </button>
      </nav>
      <div className={classes["main-image"]}>
        <img
          alt="restaurant"
          src={mealsImage}></img>
      </div>
    </>
  );
};

export default Navbar;
