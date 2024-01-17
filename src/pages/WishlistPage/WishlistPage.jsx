import React from "react";
import WishlistPageStyle from "./WishlistPage.styled";
import ProductCard from "../../components/Molecules/ProductCard/ProductCard";
import InfoTypes from "../../components/Organisams/InfoTypes/InfoTypes";
import { removeFromWishList } from "../../store/Slice/UserSlice/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const WishlistPage = () => {
  const product = useSelector((state) => state.product);
  const wishlist = useSelector((state) => state.user.wishlist.wishlistItems);
  const wishlistCount = wishlist.length;
  console.log(wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (ev, id) => {
    console.log(id);
    dispatch(removeFromWishList(id));
  };

  return (
    <WishlistPageStyle>
      {!wishlistCount && <InfoTypes type="emptyWishlist" />}

      {wishlist.map((id) => {
        const wishlistItem = product.products.find(
          (productItem) => productItem.id === id
        );
        return (
          <ProductCard
            layout="wishlist"
            key={wishlistItem.id}
            style={{ width: "auto" }}
            productItem={wishlistItem}
            removeHandler={removeFromWishlistHandler}
          />
        );
      })}
    </WishlistPageStyle>
  );
};

export default WishlistPage;
