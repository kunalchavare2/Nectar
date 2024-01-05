import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import fontFaces from "./fonts";

const GlobalStyles = createGlobalStyle`
/* To reset the default styles */
${reset}

/* To added the required font styles */
${fontFaces}
`;

export default GlobalStyles;
