import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import fontFaces from "./fonts";

const GlobalStyles = createGlobalStyle`
/* To reset the default styles */
${reset}

/* To added the required font styles */
${fontFaces}

body{
    font-family: 'Open Sans', sans-serif;
    transition: all 0.25s linear;
    background-color:${(props) => props.theme.body}
}
`;

export default GlobalStyles;
