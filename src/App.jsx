import React from "react";
import "./App.css";
import ProductCard from "./components/Molecules/ProductCard/ProductCard";
import GlobalStyles from "./styles/globalStyles";
import Theme from "./Theme/Theme";  
import ProductListPage from "./pages/ProductListPage/ProductListPage";
function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <ProductCard
          layout="favorurite"
          style={{ width: "300px" }}
          quantityHandler={(v) => {
            console.log(v);
          }}
        />
        <ProductListPage/>
      </Theme> 
   
    </>
  );
}

export default App;
