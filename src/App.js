import "./App.css";
import Navbar from "./Component/Layout/Navbar";
import About from "./Component/Layout/About";
import MealsList from "./Component/Layout/MealsList";
import { MyContextProvider } from "./context/Context";
import CartModal from "./Component/Layout/CartModal";

function App() {
  return (
    <MyContextProvider>
      <Navbar></Navbar>
      <About></About>
      <MealsList></MealsList>
      <CartModal></CartModal>
    </MyContextProvider>
  );
}

export default App;
