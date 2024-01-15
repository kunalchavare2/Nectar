import React from "react";
import "./App.css"; 
import ProductCard from "./components/Molecules/ProductCard/ProductCard";
import GlobalStyles from "./styles/globalStyles";
import Theme from "./Theme/Theme";
import NavIconsPage from "./components/Molecules/NavIconsPage/NavIconsPage"; 
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
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
      <ProductDetailsPage productName="Eggs" productDetails="Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet" price="4.99" itemCategory="Poultry"/>
    </Theme> 
    {/* <NavIconsPage/>  */}
    </>
   

  );
}

export default App;
