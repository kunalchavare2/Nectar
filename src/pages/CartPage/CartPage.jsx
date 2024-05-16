import React, { useEffect, useRef, useState } from "react";
import CartPageStyle, {
  CartItemsStyle,
  CartItemsWrapperStyle,
  HeadingStyle,
} from "./CartPage.styled";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./../../components/Molecules/ProductCard/ProductCard";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../store/Slice/UserSlice/UserSlice";

import InfoTypes from "../../components/Organisams/InfoTypes/InfoTypes";
import { fetchProducts } from "../../store/Slice/ProductSlice/ProductSlice";
import CheckoutPrice from "../../components/Organisams/CheckoutPrice/CheckoutPrice";
import Heading from "../../components/Atoms/Heading/Heading";
import OrderPlaced from "../../components/Organisams/OrderPlaced/OrderPlaced";
import DeleteModal from "../../components/Organisams/DeleteModal/DeleteModal";

const CartPage = () => {
  const product = useSelector((state) => state.product);
  const user = useSelector((state) => state.authState);
  const cart = useSelector((state) => state.user.cart);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const deleteId = useRef("");
  const [finalAmount, setFinalAmount] = useState({
    totalPrice: 0,
    bagDiscount: 0,
    taxAmount: 0,
    delivery: 0,
    finalAmount: 0,
  });

  console.log(user);

  const dispatch = useDispatch();

  const removeFromCartHandler = (ev, id) => {
    deleteId.current = id;
    setDeleteModal(true);
  };

  const removeHandler = (isdelete) => {
    if (isdelete) {
      setDeleteModal(false);
      dispatch(removeFromCart(deleteId.current));
    }
  };

  const qunatityHandler = (id, quantity) => {
    dispatch(updateCartItemQuantity({ id, quantity }));
  };

  const calculateFinalPrice = () => {
    const minDelivery = 2;
    const discount = 10;
    const tax = 18;

    const finalPrice = {
      totalPrice: 0,
      bagDiscount: 0,
      taxAmount: 0,
      delivery: 0,
      finalAmount: 0,
    };

    // Calulate the total price
    console.log(cart.cartItems);
    cart.cartItems.forEach((cartItem) => {
      const getProduct = product.products.find(
        (prod) => prod.id === cartItem.id
      );

      finalPrice.totalPrice +=
        Number(getProduct.price) * Number(cartItem.quantity);
    });

    // calculate delivery
    finalPrice.delivery =
      finalPrice.totalPrice > 100
        ? (minDelivery * finalPrice.totalPrice) / 10
        : minDelivery;

    // Bag discount
    finalPrice.bagDiscount = (discount * finalPrice.totalPrice) / 100;

    // Bag tax amount
    finalPrice.taxAmount = (tax * finalPrice.totalPrice) / 100;

    finalPrice.finalAmount =
      finalPrice.totalPrice +
      finalPrice.delivery +
      finalPrice.taxAmount -
      finalPrice.bagDiscount;

    setFinalAmount(finalPrice);
  };
  useEffect(() => {
    if (product.products.length > 0) {
      calculateFinalPrice();
    }
  }, [cart, product]);

  useEffect(() => {
    if (product.products.length === 0) {
      dispatch(fetchProducts());
    }
    if (product.products.length > 0) {
      calculateFinalPrice();
    }
  }, []);

  if (!user.isAuthenticated) {
    return <h1>User Is not Authenticated</h1>;
  }

  if (!cart.cartCount) {
    return (
      <>
        <CartPageStyle>
          <InfoTypes type="emptyCart" />
        </CartPageStyle>
        <OrderPlaced
          showSuccess={showOrderModal}
          setShowSuccess={setShowOrderModal}
        />
        <DeleteModal
          isOpen={deleteModal}
          setIsOpen={setDeleteModal}
          onDelete={removeHandler}
        />
      </>
    );
  }

  return (
    <CartPageStyle>
      <CartItemsWrapperStyle>
        <CartItemsStyle>
          <HeadingStyle>
            <Heading label="My Cart Page" type="large" />
          </HeadingStyle>
          <div className="products">
            {product.products.length &&
              cart.cartItems.map((item) => {
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
        </CartItemsStyle>
        <div className="divider"></div>
        <CheckoutPrice
          checkoutData={finalAmount}
          showOrderModal={showOrderModal}
          setShowOrderModal={setShowOrderModal}
        />
      </CartItemsWrapperStyle>
      <DeleteModal
        isOpen={deleteModal}
        setIsOpen={setDeleteModal}
        onDelete={removeHandler}
      />
    </CartPageStyle>
  );
};

export default CartPage;
