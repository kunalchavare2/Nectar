import React, { useEffect, useState } from "react";
import Button from "../../components/Atoms/Button/Button";
import Heading from "../../components/Atoms/Heading/Heading";
import Subheading from "../../components/Atoms/Subheading/Subheading";
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
} from "./ProductDetailspage.styled";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../../store/Slice/ProductSlice/ProductSlice";
import {
  addToWishList,
  removeFromWishList,
} from "../../store/Slice/UserSlice/UserSlice";

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const UserData = useSelector((state) => state.user);
  const productId = useParams().id;
  const { loading, products, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const isWishlisted = UserData.wishlist.wishlistItems.includes(productId);

  const ProductDetails = products.find((prod) => prod.id === productId);

  const quantityHandler = (action) => {
    // if quantity =
    setQuantity(action === "plus" ? quantity + 1 : quantity - 1);
  };

  const addToWishlistHandler = () => {
    if (!isWishlisted) {
      dispatch(addToWishList(productId));
    } else {
      dispatch(removeFromWishList(productId));
    }
  };

  useEffect(() => {
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
          <ProductImage src={ProductDetails.image} alt="eggbasket" />
          <ProductHeadingfav>
            <ProductHeading>
              <Heading type="large" label={ProductDetails.title} />
              <Subheading type="medium" label={ProductDetails.quantity} />
            </ProductHeading>
            {isWishlisted ? (
              <Heart onClick={addToWishlistHandler} />
            ) : (
              <RegHeart onClick={addToWishlistHandler} colorValue="#7a7a7a" />
            )}
          </ProductHeadingfav>
          <Category>{ProductDetails.category}</Category>
          <ProductCountPrice>
            <ProductCount>
              <Button
                icon={<FaMinus />}
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
            <Subheading type="small" label={ProductDetails.description} />
          </ProductDescription>
        </ProductDetailPage>
      )}
    </>
  );
};
export default ProductDetailsPage;
