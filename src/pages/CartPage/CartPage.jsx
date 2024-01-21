import React from "react";
import CartPageStyle from "./CartPage.styled";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./../../components/Molecules/ProductCard/ProductCard";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../store/Slice/UserSlice/UserSlice";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import { queryStringToObject } from "../../utils/utility";
import Info from "../../components/Molecules/Info/Info";
import emptyCart from "../../assets/images/empty-cart.svg";
import InfoTypes from "../../components/Organisams/InfoTypes/InfoTypes";
import AppBar from "../../components/Molecules/AppBar/AppBar";

const CartPage = () => {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.user.cart);

  const location = useLocation();
  const searchParams = useSearchParams();

  console.log(cart);
  console.log(
    "Query String",
    queryStringToObject(location.search, {
      id: 5,
      title: "",
      price: 1.99,
      quantity: "355ml",
      description: " ",
      category: "Beverages",
      image: "https://i.ibb.co/KhyT4yJ/Diet-Coke.png",
      rating: {
        rate: 3.9,
        count: 120,
      },
    })
  );

  // const object = {};
  // for (const [key, value] of searchParams) {
  //   console.log(value);

  // }
  searchParams.forEach((key) => console.log(key.entries));
  // console.log(s);

  const dispatch = useDispatch();

  const removeFromCartHandler = (ev, id) => {
    console.log(id);
    dispatch(removeFromCart(id));
    console.log(cart);
  };

  const qunatityHandler = (id, quantity) => {
    dispatch(updateCartItemQuantity({ id, quantity }));
    console.log(cart);
  };
  return (
    <CartPageStyle>
      {!cart.cartCount && <InfoTypes type="emptyCart" />}

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
    </CartPageStyle>
  );
};

export default CartPage;
