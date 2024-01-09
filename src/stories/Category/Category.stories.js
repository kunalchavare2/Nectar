import Category from "../../components/Atoms/Category/Category";
import bakery from '../../assets/images/categories/bakery.png';
import milk from '../../assets/images/categories/dairy.png';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Category",
  component: Category,
  
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: { 
    backgroundColor: { control: "color" },
    isCard: { control: "boolean" },
  },
};
  
  
export const Cardvertical = (args) => (
  <Category {...args} imgSrc={bakery} text="bakery" isCard={true}/>
);

export const Cardhorizon = (args) => (
  <Category {...args} imgSrc={milk} text="milk" isCard={false} />
);