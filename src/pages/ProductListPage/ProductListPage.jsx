import React, { Suspense, useRef, useState } from "react";
import { useEffect } from "react";
import { Specifiedproductlist, PageHeader } from "./ProductListPage.styled";
import { fetchProducts } from "../../store/Slice/ProductSlice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/Molecules/ProductCard/ProductCard";
import FilterIcon from "../../assets/icons/filter.svg";
import Searchbar from "../../components/Atoms/Search/Search";
import { addToCart } from "../../store/Slice/UserSlice/UserSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { queryStringToObject } from "../../utils/utility";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.search.length > 1) {
      filterProductsHandler(location.search);
    } else {
      setFilterProducts(products);
    }
  }, [location]);

  const filterProductsHandler = (queryStr) => {
    const queryObj = queryStringToObject(queryStr, {
      search: null,
      category: [],
      minPrice: null,
      maxPrice: null,
    });

    let filterProductsTemp = products;

    if ("minPrice" in queryObj && "maxPrice" in queryObj) {
      filterProductsTemp = filterProductsTemp.filter((product) => {
        return (
          product.price >= Number(queryObj.minPrice) &&
          product.price <= Number(queryObj.maxPrice)
        );
      });
    }

    if ("category" in queryObj) {
      filterProductsTemp = filterProductsTemp.filter((product) => {
        return queryObj.category.includes(product.category);
      });
    }

    if (queryObj.search) {
      let searchProductsTemp = filterProductsTemp.filter((product) => {
        const isMatch = product.title.toLowerCase().match(queryObj.search);
        return isMatch ? true : false;
      });

      filterProductsTemp = [...searchProductsTemp];
    }

    setFilterProducts(filterProductsTemp);
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCartHandler = (ev, id) => {
    dispatch(addToCart({ id: id, quantity: 1 }));
  };

  const openCardHandler = (id) => {
    navigate(`/app/product/${id}`);
  };

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <PageHeader>
        <Searchbar />
        <div>
          <img src={FilterIcon} alt="filter icon" />
        </div>
      </PageHeader>
      <Specifiedproductlist>
        {filterProducts.map((prod) => {
          return (
            <ProductCard
              layout="card"
              key={prod.id}
              style={{ width: "auto" }}
              productItem={prod}
              addCartHandler={addToCartHandler}
              openCardHandler={openCardHandler}
            />
          );
        })}
      </Specifiedproductlist>
    </div>
  );
};
export default ProductListPage;
