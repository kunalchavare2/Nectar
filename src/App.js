import "./App.css";
import InputType from "./components/Atoms/Input/Input";
import GlobalStyles from "./styles/globalStyles";
import Button from "./components/Atoms/Button/Button"; 
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6"; 
function App() {
  return (
    <>
      <GlobalStyles />
      <p>hello world</p>
      <InputType />
      <Button label="go to checkout" price={'$123.45'}/>
      <Button label="Add to Basket"  transparent  />
      <Button label="Add All to Cart" />
      <Button label="Apply Filter" transparent  />
      <Button label="go to checkout" price={'$12356.45'}/>
      <Button CartIcon={<FaPlus />} transparent />
      <Button CartIcon={<FaMinus />} disabled transparent />
      <Button CartIcon={<FaPlus />} />
      <Button CartIcon={<FaPlus />} transparent/>
      <Button CartIcon={<FaMinus />}disabled  transparent />
       </>
  );
}

export default App;
