import React from "react";
import { useEffect } from "react";
import { Specifiedproductlist, PageHeader } from "./ProductListPage.styled";
import { fetchProducts } from "../../store/Slice/ProductSlice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/Molecules/ProductCard/ProductCard";
import FilterIcon from "../../assets/icons/filtericon.png";
import Searchbar from "../../components/Atoms/Search/Search";
import { addToCart } from "../../store/Slice/UserSlice/UserSlice";
import { Link } from "react-router-dom";
const ProductListPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCartHandler = (ev, id) => {
    dispatch(addToCart({ id: id, quantity: 1 }));
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
        {products.map((prod) => {
          return (
            <Link to={`../../app/product/${prod.id}`} replace={true}>
              <ProductCard
                layout="card"
                key={prod.id}
                style={{ width: "auto" }}
                productItem={prod}
                addCartHandler={addToCartHandler}
              />
            </Link>
          );
        })}
      </Specifiedproductlist>
    </div>
  );
};
export default ProductListPage;
