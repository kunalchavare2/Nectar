import { color } from "../utils/constant/style-const";

const darkTheme = {
  primary: color.white,
  secondary: color.black,
  body: color.black,
};

const lightTheme = {
  primary: color.blue500,
  secondary: color.gray100,
  accent: color.green100,
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
