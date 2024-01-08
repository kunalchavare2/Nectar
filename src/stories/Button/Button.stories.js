import React from 'react';
import { Button } from "../../components/Atoms/Button/Button"; 
import { PriceSpan } from '../../components/Atoms/Button/button.styled';
import { CheckoutContainer } from '../../components/Atoms/Button/button.styled';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    icon: { control: "text" },
    transparent: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <Button {...args} />;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basket = Template.bind({});
Basket.args = { 
  label: 'Add to Basket', 
};

export const Cart = Template.bind({});
Cart.args = {
  label: 'Add All to Cart', 
};

export const Filter = Template.bind({});
Filter.args = {
  label: 'Apply Filter',
};

export const CheckOut = Template.bind({});
CheckOut.args = {
 
  label: (
    <CheckoutContainer>
      <span>Go to Checkout</span>
      <PriceSpan>{"$12.23"}</PriceSpan>
    </CheckoutContainer>
  )
};

export const Plus = Template.bind({});
Plus.args = { 
  label:'+',  
  transparent: false,
  icon: '<FaPlus />', 
  small: true,
 
};

export const Minus = Template.bind({});
Minus.args = {
  label: "-", 
  icon: '', 
  transparent: false,
  small: true,
};