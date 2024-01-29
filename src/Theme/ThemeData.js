import { color } from "../utils/constant/style-const";

const darkTheme = {
  primary: color.white,
  secondary: color.black,
  body: color.dark100,
  accent: color.green100,
  disabled: color.gray100,
  btnBackground: color.dark300,
  cardBackground: color.dark200,
  searchBackground: color.dark300,
  denger: color.denger,
};

const lightTheme = {
  primary: color.blue500,
  secondary: color.gray100,
  accent: color.green100,
  body: color.white,
  disabled: color.gray100,
  btnBackground: color.green200,
  cardBackground: color.white,
  searchBackground: color.gray200,
  denger: color.denger,
};

const OtherTheme = {
  primary: color.green100,
  secondary: color.orange100,
  body: color.orange200,
  denger: color.denger,
};

export const ThemeData = {
  light: lightTheme,
  dark: darkTheme,
  other: OtherTheme,
};
