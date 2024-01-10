import React from "react";
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
  ...props
}) => {
  return (
    <Card layout={layout} {...props}>
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
              <Button icon={<FaMinus />} transparent={true} small={true} />
              <div className="card-quantity-count">1</div>
              <Button icon={<FaPlus />} transparent={true} small={true} />
            </div>
          )}
          <div className="card-price">{productPrice}</div>
          {layout === "card" && (
            <div className="card-btn">
              <Button label="" icon={<FaPlus />} transparent={false} />
            </div>
          )}
        </div>
        {layout === "cart" && (
          <button className="card-close-btn">
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
};

ProductCard.defaultProps = {
  layout: "card",
  imgUrl: "https://i.ibb.co/cyx6bMC/Egg-basket.png",
  productLabel: "Egg Chicken Red",
  productQuantity: "4pcs",
  productPrice: "$1.99",
};

export default ProductCard;
