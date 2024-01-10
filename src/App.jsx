import "./App.css";
import ProductCard from "./components/Molecules/ProductCard/ProductCard";
import GlobalStyles from "./styles/globalStyles";
import Theme from "./Theme/Theme";
function App() {
  return (
    <Theme>
      <GlobalStyles />
      <ProductCard layout="favorurite" />
    </Theme>
  );
}

export default App;
