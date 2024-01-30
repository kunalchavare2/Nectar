import React, { useState } from "react";
import { useEffect } from "react";
import {
  Specifiedproductlist,
  ProductListPageStyle,
} from "./ProductListPage.styled";
import { fetchProducts } from "../../store/Slice/ProductSlice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/Molecules/ProductCard/ProductCard";
import { addToCart } from "../../store/Slice/UserSlice/UserSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { checkOlderDate, queryStringToObject } from "../../utils/utility";
import SearchBar from "./../../components/Molecules/SearchBar/SearchBar";
import { sortList } from "../../utils/sort";
import Loading from "../../components/Molecules/Loading/Loading";
import { PRODUCT_DETAIL_ROUTE } from "../../utils/constant/routes-cont";

const ProductListPage = ({ showFilter, setShowFilter }) => {
  const dispatch = useDispatch();
  const [loadingProducts, setLoadingProducts] = useState(false);
  const { products, loading, error } = useSelector((state) => state.product);
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (products.length > 0) {
      setLoadingProducts(true);
      if (location.search.length > 1) {
        setTimeout(() => {
          filterProductsHandler(location.search);
        }, 100);
      } else {
        setFilterProducts(products);
        setLoadingProducts(false);
      }
    }
  }, [location]);

  useEffect(() => {
    if (products.length > 0) {
      if (!loading && !location.search) {
        setFilterProducts(products);
      } else if (!loading && location.search) {
        filterProductsHandler(location.search);
      }
    }
  }, [loading]);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
      setLoadingProducts(false);
    }
  }, [loadingProducts]);

  const filterProductsHandler = (queryStr) => {
    const queryObj = queryStringToObject(queryStr, {
      search: null,
      category: [],
      minPrice: null,
      maxPrice: null,
      sort: "",
      tags: [],
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

    if ("tags" in queryObj) {
      filterProductsTemp = filterProductsTemp.filter((product) => {
        const filterTags = queryObj.tags.filter((tag) => {
          let newTags = [...product.tags];
          const created = new Date(product.createdAt);
          if (checkOlderDate(created)) {
            newTags.push("new");
          }
          return newTags.includes(tag);
        });
        return filterTags.length > 0;
      });
    }

    if ("search" in queryObj) {
      let searchProductsTemp = filterProductsTemp.filter((product) => {
        const isMatch = product.title.toLowerCase().match(queryObj.search);
        return isMatch ? true : false;
      });
      filterProductsTemp = [...searchProductsTemp];
    }

    if ("sort" in queryObj) {
      if (filterProductsTemp.length > 0) {
        const sortedProducts = sortList(queryObj.sort, filterProductsTemp);
        filterProductsTemp = [...sortedProducts];
      }
    }

    setFilterProducts(filterProductsTemp);
    setLoadingProducts(false);
  };

  const addToCartHandler = (ev, id) => {
    dispatch(addToCart({ id: id, quantity: 1 }));
  };

  const openCardHandler = (id) => {
    navigate(PRODUCT_DETAIL_ROUTE + id);
  };

  if (loadingProducts) {
    return <Loading showLoading={loadingProducts} />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <ProductListPageStyle>
      <SearchBar showFilter={showFilter} setShowFilter={setShowFilter} />
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
    </ProductListPageStyle>
  );
};
export default ProductListPage;
