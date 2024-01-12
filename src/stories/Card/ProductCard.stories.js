import React from "react";
import ProductCard from "./../../components/Molecules/ProductCard/ProductCard";
import { style } from "styled-components";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/ProductCard",
  component: ProductCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    openCardHandler: { action: "clicked" },
    deleteHandler: { action: "clicked" },
  },
};
const Template = (args) => <ProductCard {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Card = Template.bind({});
Card.args = {
  layout: "cart",
  imgUrl: "https://i.ibb.co/cyx6bMC/Egg-basket.png",
  productLabel: "Egg Chicken Red",
  productQuantity: "4pcs",
  productPrice: "$1.99",
};

export const Cart = Template.bind({});
Cart.args = {
  layout: "cart",
  style: { width: "400px" },
  imgUrl: "https://i.ibb.co/cyx6bMC/Egg-basket.png",
  productLabel: "Egg Chicken Red",
  productQuantity: "4pcs",
  productPrice: "$1.99",
  quantityHandler: (v) => {
    console.log(v);
  },
};

export const Favorurite = Template.bind({});
Favorurite.args = {
  layout: "wishlist",
  style: { width: "600px" },
  imgUrl: "https://i.ibb.co/cyx6bMC/Egg-basket.png",
  productLabel: "Egg Chicken Red",
  productQuantity: "4pcs",
  productPrice: "$1.99",
};
