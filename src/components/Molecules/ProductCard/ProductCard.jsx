import React, { useState } from "react";
import Card from "./ProductCard.styled";
import PropTypes from "prop-types";
import Button from "../../Atoms/Button/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ProductCard = ({
  layout,
  imgUrl,
  productLabel,
  productQuantity,
  productPrice,
  openCardHandler,
  deleteHandler,
  noOfItems,
  qunatityHandler,
  addCartHandler,
  ...props
}) => {
  const [noOfItemsVal, setNoOfItemsVal] = useState(noOfItems);

  const changeQunatityHandler = (value) => {
    if (value == "add") {
      setNoOfItemsVal((preValue) => preValue + 1);
    } else {
      setNoOfItemsVal((preValue) => (preValue > 1 ? preValue - 1 : 1));
    }

    if (qunatityHandler) {
      qunatityHandler(noOfItemsVal);
    }
  };

  return (
    <Card layout={layout} {...props} onClick={openCardHandler}>
      <div className={"card-img"}>
        <img src={imgUrl} alt={""} />
      </div>
      <div className="card-content">
        <div className="card-titleWrapper">
          <div className="card-title">{productLabel}</div>
          <div className="card-quantity">{productQuantity}</div>
        </div>
        <div className="card-priceWrapper">
          {layout === "cart" && (
            <div className="card-quantity-btn">
              <Button
                icon={<FaMinus />}
                transparent={true}
                small={true}
                id="minus-quantity"
                disabled={noOfItemsVal === 1}
                onClick={() => changeQunatityHandler("minus")}
              />
              <div className="card-quantity-count">{noOfItemsVal}</div>
              <Button
                icon={<FaPlus />}
                transparent={true}
                small={true}
                id="add-quantity"
                onClick={() => changeQunatityHandler("add")}
              />
            </div>
          )}
          <div className="card-price">{productPrice}</div>
          {layout === "card" && (
            <div className="card-btn">
              <Button
                label=""
                icon={<FaPlus />}
                transparent={false}
                onClick={addCartHandler}
              />
            </div>
          )}
        </div>
        {layout === "cart" && (
          <button className="card-close-btn" onClick={deleteHandler}>
            <IoClose />
          </button>
        )}
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  //  layout is to change card to different layout
  layout: PropTypes.oneOf(["card", "cart", "wishlist"]),
  //  imgUrl is product image url
  imgUrl: PropTypes.string.isRequired,
  //   ProductLabel is product name
  productLabel: PropTypes.string.isRequired,
  //   ProductPrice is product price
  productPrice: PropTypes.string.isRequired,
  //   productQuantity is product quantity
  productQuantity: PropTypes.string.isRequired,
  //   extra styling
  style: PropTypes.shape(PropTypes.object),
  // to provide value to quantity
  noOfItems: PropTypes.number,
  // to handle on click on card
  openCardHandler: PropTypes.func,
  // to handle delete on click
  deleteHandler: PropTypes.func,
  // to handle quantity change
  qunatityHandler: PropTypes.func,
  // function to handle cart change
  addCartHandler: PropTypes.func,
};

ProductCard.defaultProps = {
  layout: "card",
  imgUrl: "https://i.ibb.co/cyx6bMC/Egg-basket.png",
  productLabel: "Egg Chicken Red",
  productQuantity: "4pcs",
  productPrice: "$1.99",
  noOfItems: 1,
};

export default ProductCard;
