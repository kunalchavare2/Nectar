import "./App.css";
import ProductCard from "./components/Molecules/ProductCard/ProductCard";
import GlobalStyles from "./styles/globalStyles";
import Theme from "./Theme/Theme";
import Searchbar from "./components/Atoms/Search/Search";
function App() {
  return (
    <Theme>
      <GlobalStyles />
      <ProductCard layout="favorurite" />
      <Searchbar placeholderValue="Search store"/>
    </Theme>
  );
}

export default App;
