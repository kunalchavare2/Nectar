import React, { useEffect, useRef, useState } from "react";
import SearchPopOverStyle, {
  CategoryWrapperStyle,
  CloseButtonStyle,
  ProductWrapperStyle,
  SearchResultStyle,
  SeeAllButtonStyle,
} from "./SearchPopOver.styled";
import Searchbar from "./../../Atoms/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./../../Molecules/ProductCard/ProductCard";
import Drawer from "../../Atoms/Drawer/Drawer";
import { fetchCategory } from "./../../../store/Slice/CategorySlice/CategorySlice";
import Category from "./../../Atoms/Category/Category";
import { useNavigate } from "react-router";
import { IoClose } from "react-icons/io5";
import Info from "../../Molecules/Info/Info";
import { ReactComponent as EmptyBox } from "../../../assets/images/empty-box.svg";
import { createQueryString, queryStringToObject } from "../../../utils/utility";

const SearchPopOver = ({ isOpen, setIsOpen }) => {
  const products = useSelector((state) => state.product.products);
  const [searchValue, setSearchValue] = useState("");
  const { loading, categories, error } = useSelector((state) => state.category);
  const [searchProducts, setsearchProducts] = useState([]);
  const isCategory = searchValue.length < 1 && !loading && categories;
  const isNoResults = !searchProducts.length && !isCategory;
  const searchRef = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  function exitBtnHandler() {
    setSearchValue("");
    setIsOpen(false);
  }
  const searchBarHandler = (value) => {
    setSearchValue(value.toLowerCase());
  };
  const navigateToProduct = (id) => {
    exitBtnHandler();
    navigate(`/app/product/${id}`);
  };

  const categoryClickHandler = (id) => {
    exitBtnHandler();
    let queryString = createQueryString({ category: [id] });
    navigate(`/app/products${queryString}`);
  };

  const showAllProducts = () => {
    exitBtnHandler();
    navigate(`/app/products?search=${searchValue.replaceAll(" ", "")}`);
  };

  useEffect(() => {
    let searchProductsTemp = products.filter((product) => {
      const isMatch = product.title.toLowerCase().match(searchValue);
      return isMatch ? true : false;
    });

    setsearchProducts(searchProductsTemp);
  }, [searchValue]);

  return (
    <Drawer isOpen={isOpen}>
      <SearchPopOverStyle>
        <Searchbar
          className="searchBarStyle"
          searchHandler={searchBarHandler}
          searchRef={searchRef}
        />
        <SearchResultStyle>
          {isNoResults && (
            <Info
              img={<EmptyBox />}
              message={"There are no product with that name!"}
            />
          )}
          {isCategory && (
            <CategoryWrapperStyle>
              {Object.keys(categories).map((key) => {
                return (
                  <Category
                    key={key}
                    className="categoryItem"
                    imgSrc={categories[key].image}
                    text={categories[key].label}
                    backgroundColor={categories[key].color}
                    HandleClick={categoryClickHandler}
                  />
                );
              })}
            </CategoryWrapperStyle>
          )}
          {!isCategory && (
            <ProductWrapperStyle>
              {searchProducts.map((product) => (
                <ProductCard
                  layout="search"
                  key={product.id}
                  style={{ width: "auto" }}
                  productItem={product}
                  openCardHandler={navigateToProduct}
                />
              ))}
            </ProductWrapperStyle>
          )}
        </SearchResultStyle>
        {!isCategory && !isNoResults && (
          <SeeAllButtonStyle onClick={showAllProducts}>
            SeeAll
          </SeeAllButtonStyle>
        )}
        <CloseButtonStyle onClick={exitBtnHandler}>
          <IoClose />
        </CloseButtonStyle>
      </SearchPopOverStyle>
    </Drawer>
  );
};

export default SearchPopOver;
