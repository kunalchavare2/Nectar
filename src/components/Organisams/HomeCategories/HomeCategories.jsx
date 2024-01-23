import React from "react";
import { useEffect } from "react";
import {
  CategoryHeaders,
  CategoryProductList,
  CategoryGroceryList,
} from "./HomeCategories.styled";
import NavIcon from "../../Atoms/NavIcon/NavIcon";
import Text from "../../Atoms/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/Slice/ProductSlice/ProductSlice";
import ProductCard from "../../Molecules/ProductCard/ProductCard";
import { addToCart } from "../../../store/Slice/UserSlice/UserSlice";
import Category from "../../Atoms/Category/Category";
const HomeCategories = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const { isshowGroceries, linkto, text } = props;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const addToCartHandler = (ev, id) => {
    dispatch(addToCart({ id: id, quantity: 1 }));
  };

  return (
    <>
      <CategoryHeaders>
        <Text type={"large"} label={text} tcolor="#000" />
        <NavIcon icon={""} text="see all" link={linkto} hideIcon={true} />
      </CategoryHeaders>
      {isshowGroceries ? (
        <CategoryGroceryList>
          {Object.keys(categories).map((key) => {
            return (
              <Category
                isCard={false}
                className="categoryItem"
                imgSrc={categories[key].image}
                text={categories[key].label}
                backgroundColor={categories[key].color}
              />
            );
          })}
        </CategoryGroceryList>
      ) : (
        <CategoryProductList>
          {products.map((prod) => {
            return (
              <ProductCard
                layout="card"
                key={prod.id}
                style={{ minWidth : "150px" }}
                productItem={prod}
                addCartHandler={addToCartHandler}
              />
            );
          })}
        </CategoryProductList>
      )}
    </>
  );
};
export default HomeCategories;
