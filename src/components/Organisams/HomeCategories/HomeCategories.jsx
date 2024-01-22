import React from "react";
import { useEffect } from "react";
import {
  CategoryHeaders,
  CategoryProductList,
  Title,
} from "./HomeCategories.styled";
import NavIcon from "../../Atoms/NavIcon/NavIcon";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/Slice/ProductSlice/ProductSlice";
import ProductCard from "../../Molecules/ProductCard/ProductCard";
import { addToCart } from "../../../store/Slice/UserSlice/UserSlice";
const HomeCategories = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const addToCartHandler = (ev, id) => {
    dispatch(addToCart({ id: id, quantity: 1 }));
  };

  return (
    <>
      <CategoryHeaders>
        <Title text={props.name} />
        <NavIcon
          icon={""}
          text="see all"
          link="/app/products"
          hideIcon={true}
        />
      </CategoryHeaders>
      <CategoryProductList>
        {products.map((prod) => {
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
      </CategoryProductList>
    </>
  );
};
export default HomeCategories;
