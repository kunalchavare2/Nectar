import React from "react";
import "./App.css"; 
import ProductCard from "./components/Molecules/ProductCard/ProductCard";
import GlobalStyles from "./styles/globalStyles";
import Theme from "./Theme/Theme";
import NavIconsPage from "./components/Molecules/NavIconsPage/NavIconsPage";
function App() {
  return (
    <>
     <Theme>
      <GlobalStyles />
      <ProductCard layout="favorurite" />
    </Theme> 
    <NavIconsPage/>
    </>
   

  );
}

export default App;
