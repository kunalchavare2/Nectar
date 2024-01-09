import "./App.css";
import GlobalStyles from "./styles/globalStyles";
import Theme from "./Theme/Theme";
import Category from "./components/Atoms/Category/Category";
import bakery from "./assets/images/categories/bakery.png";
import rice from "./assets/images/categories/rice.png";
function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
      </Theme>
      <Category
        imgSrc={bakery}
        text="bakery"
        isCard={true}
        backgroundColor ="rgba(247, 165, 147, 0.25)"
      />
      <Category
        imgSrc={rice}
        text="hello"
        isCard={false}
        backgroundColor="rgba(183, 223, 245, 0.25)"
      />
    </>
  );
}

export default App;
