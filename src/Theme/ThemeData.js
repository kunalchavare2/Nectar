import { color } from "../utils/constant/style-const";

const darkTheme = {
  primary: color.white,
  secondary: color.black,
  body: color.black,
};

const lightTheme = {
  primary: color.black,
  secondary: color.white,
  body: color.white,
};

const OtherTheme = {
  primary: color.green100,
  secondary: color.orange100,
  body: color.orange200,
};

export const ThemeData = {
  light: lightTheme,
  dark: darkTheme,
  other: OtherTheme,
};
