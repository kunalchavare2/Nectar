import React from "react";
import { useEffect } from "react";
import {
  CategoryHeaders,
  CategoryProductList,
  CategoryGroceryList,
  Wrapper,
} from "./HomeCategories.styled";
import NavIcon from "../../Atoms/NavIcon/NavIcon";
import Text from "../../Atoms/Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/Slice/ProductSlice/ProductSlice";
import ProductCard from "../../Molecules/ProductCard/ProductCard";
import { addToCart } from "../../../store/Slice/UserSlice/UserSlice";
import Category from "../../Molecules/Category/Category";
import { useNavigate } from "react-router";
import { checkOlderDate, createQueryString } from "../../../utils/utility";
import { style } from "styled-components";
const HomeCategories = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const { isshowGroceries, linkto, text, tag } = props;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const addToCartHandler = (ev, id) => {
    dispatch(addToCart({ id: id, quantity: 1 }));
  };
  const categoryClickHandler = (id) => {
    let queryString = createQueryString({ category: id });
    navigate(`/app/products${queryString}`);
  };
  return (
    <>
      <CategoryHeaders>
        <Text type={"large"} label={text} tcolor="#000" />
        <NavIcon icon={""} text="See all" link={linkto} hideIcon={true} />
      </CategoryHeaders>
      <Wrapper>
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
                  HandleClick={categoryClickHandler}
                />
              );
            })}
          </CategoryGroceryList>
        ) : (
          <CategoryProductList>
            {products.map((prod) => {
              let newTags = [...prod.tags];
              const created = new Date(prod.createdAt);
              if (checkOlderDate(created)) {
                newTags.push("new");
              }
              if (newTags.includes(tag)) {
                return (
                  <div>
                    <ProductCard
                      layout="card"
                      key={prod.id}
                      style={{ width: "200px" }}
                      productItem={prod}
                      addCartHandler={addToCartHandler}
                      openCardHandler={(id) => navigate(`../product/${id}`)}
                    />
                  </div>
                );
              }
              return null;
            })}
          </CategoryProductList>
        )}
      </Wrapper>
    </>
  );
};
export default HomeCategories;
