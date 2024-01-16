import React from "react";
import { useEffect } from "react";
import {
  Specifiedproductlist,
  PageNAv,
  Productpage,
} from "./ProductListPage.styled";
import { fetchProducts } from "../../store/Slice/ProductSlice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/Molecules/ProductCard/ProductCard";
import FilterIcon from "../../assets/icons/filtericon.png";
import Searchbar from "../../components/Atoms/Search/Search";
const ProductListPage = () => {
  const dispatch = useDispatch();
  const ProductState = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Productpage>
      <PageNAv>
        <Searchbar />
        <div>
          <img src={FilterIcon} alt="filter icon" />
        </div>
      </PageNAv>
      <Specifiedproductlist>
        {ProductState.products.map((prod) => {
          return (
            <ProductCard
              layout="card"
              key={prod.id}
              style={{ width: "200px", height:"250px" }}
              productItem={prod}
            />
          );
        })}
      </Specifiedproductlist>
    </Productpage>
  );
};
export default ProductListPage;
