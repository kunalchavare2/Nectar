import { useEffect } from "react";
import "./App.styled.js";
import ProductCard from "./components/Molecules/ProductCard/ProductCard";
import GlobalStyles from "./styles/globalStyles";
import Theme from "./Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/Slice/ProductSlice/ProductSlice";
import styled from "styled-components";
import { addToCart } from "./store/Slice/UserSlice/UserSlice";
import { Link, Navigate } from "react-router-dom";
import { createQueryString } from "./utils/utility";
import AppStyle from "./App.styled.js";
import Filters from './components/Organisams/filter/filter.jsx';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(134px, 1fr));
  gap: 1rem;
  padding: 1rem;
  // margin-left: 20%;
`;

function App() {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.user.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product.products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const addToCartHandler = (ev, id) => {
    console.log(id);
    dispatch(addToCart({ id: id, quantity: 1 }));
    console.log(cart);
  };

  return (
    <>
      <div>{cart.cartCount}</div>

      {!product.loading && (
        <Link to={`cart${createQueryString(product.products[10])}`}>
          Open Cart
        </Link>
      )}

      {product.loading ? <div>loading{console.log(product)}</div> : null}
      {!product.loading && product.error ? <div>{product.error}</div> : null}
      {!product.loading && product.products.length && (
        <Grid>
          {product.products.map((prod) => {
            return (
              <ProductCard
                layout="card"
                key={prod.id}
                style={{ width: "auto" }}
                productItem={prod}
                addCartHandler={addToCartHandler}
              />
            );
          })}
        </Grid>
      )}
      <Filters />
    </>
  );
}

export default App;
