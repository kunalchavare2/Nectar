import Searchbar from "../../components/Atoms/Search/Search.jsx";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Search",
  component: Searchbar,
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
export const placeholder = {
  args: {
    placeholderValue: 'Search store'
  },
};
