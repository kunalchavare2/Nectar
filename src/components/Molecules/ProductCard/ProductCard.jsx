import Card from "./ProductCard.styled";
import PropTypes from "prop-types";
import Button from "../../Atoms/Button/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ProductCard = ({
  layout,
  productItem,
  openCardHandler,
  removeHandler,
  noOfItems,
  qunatityHandler,
  addCartHandler,
  style,
  ...props
}) => {
  const { id, title, price, quantity, image } = productItem;

  const changeQunatityHandler = (productId, action) => {
    if (action === "add") {
      const newValue = noOfItems + 1;
      qunatityHandler(productId, newValue);
    } else {
      const newValue = noOfItems > 1 ? noOfItems - 1 : 1;
      qunatityHandler(productId, newValue);
    }
  };

  const handleClick = (ev) => {
    if (!ev.target.closest(".card-btn") && openCardHandler) {
      openCardHandler(id);
    }
  };

  return (
    <Card $layout={layout} {...props} onClick={handleClick}>
      <div className={"card-img"}>
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-titleWrapper">
          <div className="card-title">{title}</div>
          <div className="card-quantity">{quantity}</div>
        </div>
        <div className="card-priceWrapper">
          {layout === "cart" && (
            <div className="card-quantity-btn">
              <Button
                icon={<FaMinus />}
                transparent={true}
                small={true}
                id="minus-quantity"
                disabled={noOfItems === 1}
                onClick={() => changeQunatityHandler(id, "minus")}
              />
              <div className="card-quantity-count">{noOfItems}</div>
              <Button
                icon={<FaPlus />}
                transparent={true}
                small={true}
                id="add-quantity"
                onClick={() => changeQunatityHandler(id, "add")}
              />
            </div>
          )}
          <div className="card-price">{price}</div>
          {layout === "card" && (
            <div className="card-btn">
              <Button
                label=""
                icon={<FaPlus />}
                transparent={false}
                onClick={(ev) => addCartHandler(ev, id)}
              />
            </div>
          )}
        </div>
        {layout !== "card" && layout !== "search" && (
          <button
            className="card-close-btn"
            onClick={(ev) => removeHandler(ev, id)}
          >
            <IoClose />
          </button>
        )}
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  //  layout is to change card to different layout
  layout: PropTypes.oneOf(["card", "cart", "wishlist", "search"]),
  // it contains all product details
  productItem: PropTypes.object.isRequired,
  // to provide value to quantity
  noOfItems: PropTypes.number,
  // to handle on click on card
  openCardHandler: PropTypes.func,
  // to handle delete on click
  removeHandler: PropTypes.func,
  // to handle quantity change
  qunatityHandler: PropTypes.func,
  // function to handle cart change
  addCartHandler: PropTypes.func,
};

const product = {
  id: 1,
  title: "Default",
  price: 1.99,
  quantity: "355ml",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "Beverages",
  image: "https://i.ibb.co/KhyT4yJ/Diet-Coke.png",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

ProductCard.defaultProps = {
  layout: "card",
  style: { width: "auto" },
  productItem: product,
};

export default ProductCard;
