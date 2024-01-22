import Text from "../../components/Atoms/Text/Text.jsx";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Default = {
//   args: {},
// };
export const Small = {
  args: {
    type: "small",
    label: "20ml",
    tcolor: "grey",
  },
};
export const Medium = {
  args: {
    type: "medium",
    label: "product contains sugar",
    tcolor: 'grey',
  },
};
export const Large = {
  args: {
    type: "large",
    label: "dairy milk",
    tcolor: 'grey',
  },
};
