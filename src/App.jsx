import { useEffect } from "react";
import "./App.css";
import ProductCard from "./components/Molecules/ProductCard/ProductCard";
import GlobalStyles from "./styles/globalStyles";
import Theme from "./Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/Slice/ProductSlice/ProductSlice";
import styled from "styled-components";
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
} from "./store/Slice/UserSlice/UserSlice";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1rem;
  margin-left: 20%;
`;

function App() {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.user.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToCartHandler = (ev, id) => {
    console.log(cart);
    dispatch(addToCart({ id: id, quantity: 1 }));
    console.log(cart);
  };

  const removeFromCartHandler = (ev, id) => {
    console.log(id);
    dispatch(removeFromCart(id));
    console.log(cart);
  };

  const qunatityHandler = (id, quantity) => {
    dispatch(updateCartItemQuantity({id, quantity}));
    console.log(cart);
  };

  return (
    
     <Theme>
      <GlobalStyles />
      <div>{cart.cartCount}</div>
      <div>{console.log(cart)}</div>
      <div>
        {cart.cartItems.map((item) => {
          const cartItem = product.products.find(
            (productItem) => productItem.id === item.id
          );
          return (
            <ProductCard
              layout="cart"
              key={cartItem.id}
              style={{ width: "auto" }}
              productItem={cartItem}
              noOfItems={item.quantity}
              removeHandler={removeFromCartHandler}
              qunatityHandler={qunatityHandler}
            />
          );
        })}
      </div>

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
    </Theme>
  );
}

export default App;
