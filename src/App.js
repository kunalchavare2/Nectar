import "./App.css";
import InputType from "./components/Atoms/Input/Input";
import GlobalStyles from "./styles/globalStyles";
import Button from "./components/Atoms/Button/Button";
import  Plus  from "./assets/icons/Plus.png";
import  Minus  from "./assets/icons/Minus.png";
import { FaPlus } from "react-icons/fa6";
import { CheckoutContainer } from "./components/Atoms/Button/button.styled";
function App() {
  return (
    <>
      <GlobalStyles />
      <p>hello world</p>
      <InputType />
      <Button label="Add to Basket"  transparent  />
      <Button label="Add All to Cart" />
      <Button label="Apply Filter" transparent  />
      <Button label={<CheckoutContainer><span>Go to Checkout</span><span>{"$12.23"}</span></CheckoutContainer>} />
      <Button CartIcon={<FaPlus />} transparent />
      
      <Button label="Add all to Basket" /><br/> 
      <Button label={<CheckoutContainer><span>Go to Checkout</span><span>{"$12.23"}</span></CheckoutContainer>} />
    </>
  );
}

export default App;
