import { createContext } from "react";
import React, { useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState();

  const meals = [
    {
      id: 1,
      name: "Grilled Chicken Salad",
      description:
        "A fresh and healthy salad with grilled chicken, mixed greens, cherry tomatoes, cucumber, and a light vinaigrette dressing.",
      price: 12.99,
    },
    {
      id: 2,
      name: "Spaghetti Bolognese",
      description:
        "A classic Italian dish with spaghetti pasta, topped with a rich and hearty Bolognese sauce made from ground beef, tomatoes, onions, and garlic.",
      price: 14.5,
    },
    {
      id: 3,
      name: "Shrimp Tacos",
      description:
        "Three soft corn tortillas filled with seasoned grilled shrimp, tangy coleslaw, avocado, and a zesty lime crema.",
      price: 13.75,
    },
    {
      id: 4,
      name: "Margherita Pizza",
      description:
        "A traditional Italian pizza with a thin and crispy crust, topped with tomato sauce, fresh mozzarella cheese, basil, and a drizzle of olive oil.",
      price: 11.99,
    },
    {
      id: 5,
      name: "Beef Burger",
      description:
        "A juicy and flavorful beef patty served on a toasted bun with lettuce, tomato, onion, pickle, and your choice of cheese.",
      price: 10.5,
    },
    {
      id: 6,
      name: "Veggie Stir-fry",
      description:
        "A colorful and nutritious mix of seasonal vegetables stir-fried in a savory sauce, served over steamed jasmine rice.",
      price: 9.99,
    },
    {
      id: 7,
      name: "Salmon Teriyaki",
      description:
        "Pan-seared salmon fillet glazed with a sweet and tangy teriyaki sauce, served with steamed vegetables and rice.",
      price: 16.95,
    },
    {
      id: 8,
      name: "Chicken Alfredo",
      description:
        "Fettuccine pasta tossed in a creamy Alfredo sauce with tender pieces of grilled chicken, topped with Parmesan cheese and parsley.",
      price: 13.5,
    },
    {
      id: 9,
      name: "Vegetable Curry",
      description:
        "A flavorful and mildly spiced curry with a mix of vegetables, simmered in a tomato and coconut milk-based sauce, served with basmati rice.",
      price: 12.0,
    },
    {
      id: 10,
      name: "BBQ Pork Ribs",
      description:
        "Tender, slow-cooked pork ribs smothered in a tangy BBQ sauce, served with coleslaw and your choice of side.",
      price: 17.25,
    },
  ];

  return (
    <MyContext.Provider
      value={{ cart, setCart, meals, cartIsOpen, setCartIsOpen }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
