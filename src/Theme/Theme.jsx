import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeData } from "./ThemeData"; 

export const ThemeDispatcher = createContext("");

const Theme = (props) => {
  const [theme, setTheme] = useState(ThemeData.light);

  function changeTheme(value) {
    setTheme(value);
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeDispatcher.Provider value={changeTheme}>
        {props.children}
      </ThemeDispatcher.Provider>
    </ThemeProvider>
  );
};

export default Theme;
