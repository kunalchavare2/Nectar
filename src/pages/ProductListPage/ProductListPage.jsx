import React from "react";
import {
  Specifiedproductlist,
  PageNAv,
  Productpage,
} from "./ProductListPage.styled";
import ProductCard from "../../components/Molecules/ProductCard/ProductCard";
import FilterIcon from "../../assets/icons/filtericon.png";
import Searchbar from "../../components/Atoms/Search/Search"; 
const ProductListPage = () => {
  const data = [
    {
      id: 1,
      title: "Diet Coke",
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
    },
    {
      id: 2,
      title: "Sprite Can",
      price: 1.5,
      quantity: "355ml",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "Beverages",
      image: "https://i.ibb.co/T0xdfVw/Sprite-Can.png1",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Apple & Grape Juice",
      price: 15.99,
      quantity: "2L",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "Beverages",
      image: "https://i.ibb.co/h9mSTh5/Apple-Grape-Juice.png",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Orenge Juice",
      price: 15.99,
      quantity: "2L",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "Beverages",
      image: "https://i.ibb.co/Hp37R7q/Orenge-Juice.png",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
  ];
  return (
    <Productpage>
      <PageNAv>
        <Searchbar />
        <div>
          <img src={FilterIcon} alt="filter icon" />
        </div>
      </PageNAv>

      <Specifiedproductlist>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            imgUrl={product.image}
            productLabel={product.title}
            productQuantity={product.quantity}
            productPrice={product.price}
          />
        ))}
      </Specifiedproductlist>
    </Productpage>
  );
};
export default ProductListPage;
