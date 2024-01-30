import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Atoms/Button/Button";
import Heading from "../../components/Atoms/Heading/Heading";
import Text from "../../components/Atoms/Text/Text";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
  Quantity,
  Price,
  ProductImage,
  ProductHeadingfav,
  ProductCountPrice,
  ProductDetailPage,
  ProductCount,
  ProductDescription,
  RegHeart,
  Heart,
  ProductHeading,
  Category,
  ProductContentStyle,
  ButtonWrapperStyle,
} from "./ProductDetailspage.styled";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../../store/Slice/ProductSlice/ProductSlice";
import {
  addToCart,
  addToWishList,
  removeFromWishList,
  updateCartItemQuantity,
} from "../../store/Slice/UserSlice/UserSlice";
import { CART_ROUTE } from "../../utils/constant/routes-cont";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const UserData = useSelector((state) => state.user);
  const productId = useParams().id;
  const { loading, products, error } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const isWishlisted = UserData.wishlist.wishlistItems.includes(productId);
  const isAddedToCart = UserData.cart.cartItems.find(
    (item) => item.id === productId
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ProductDetails = products.find((prod) => prod.id === productId);

  const quantityHandler = (action) => {
    let newValue = quantity;
    if (action === "plus") {
      newValue = quantity + 1;
    } else if (action === "minus" && quantity > 1) {
      newValue = quantity - 1;
    }
    if (isAddedToCart) {
      dispatch(updateCartItemQuantity({ id: productId, quantity: newValue }));
    }
    setQuantity(newValue);
  };

  const addToWishlistHandler = () => {
    if (!isWishlisted) {
      dispatch(addToWishList(productId));
    } else {
      dispatch(removeFromWishList(productId));
    }
  };

  const cartHandler = () => {
    if (!isAddedToCart) {
      dispatch(addToCart({ id: productId, quantity: quantity }));
    } else {
      navigate(CART_ROUTE);
    }
  };
  const getCategoryColor = (category) => {
    const foundCategoryKey = Object.keys(categories).find(
      (key) => categories[key].label === category
    );

    return categories[foundCategoryKey].color;
  };

  useEffect(() => {
    if (isAddedToCart) {
      setQuantity(isAddedToCart.quantity);
    }

    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <>
      {loading && <div>loading</div>}
      {!loading && error && <div>error</div>}
      {!loading && products.length && (
        <ProductDetailPage>
          <ProductImage>
            <img src={ProductDetails.image} alt={ProductDetails.title} />
          </ProductImage>
          <ProductContentStyle>
            <ProductHeadingfav>
              <ProductHeading>
                <Heading type="large" label={ProductDetails.title} />
                <Text type="medium" label={ProductDetails.quantity} />
              </ProductHeading>
              {isWishlisted ? (
                <Heart onClick={addToWishlistHandler} />
              ) : (
                <RegHeart onClick={addToWishlistHandler} colorValue="#7a7a7a" />
              )}
            </ProductHeadingfav>
            <Category colorValue={getCategoryColor(ProductDetails.category)}>
              {ProductDetails.category}
            </Category>
            <ProductCountPrice>
              <ProductCount>
                <Button
                  icon={<FaMinus />}
                  disabled={quantity === 1}
                  transparent={true}
                  onClick={() => quantityHandler("minus")}
                />
                <Quantity>{quantity}</Quantity>
                <Button
                  icon={<FaPlus />}
                  transparent={false}
                  onClick={() => quantityHandler("plus")}
                />
              </ProductCount>
              <Price>${ProductDetails.price}</Price>
            </ProductCountPrice>
            <ProductDescription>
              <Heading type="small" label="Product Details" />
              <Text type="small" label={ProductDetails.description} />
            </ProductDescription>
            <ButtonWrapperStyle>
              <Button
                label={isAddedToCart ? "Open Cart" : "Add to Cart"}
                onClick={cartHandler}
              />
            </ButtonWrapperStyle>
          </ProductContentStyle>
        </ProductDetailPage>
      )}
    </>
  );
};
export default ProductDetailsPage;
