import { css } from "styled-components";
import openSansLight from "../assets/fonts/OpenSans-Light.ttf";
import openSansRegular from "../assets/fonts/OpenSans-Regular.ttf";
import openSansMedium from "../assets/fonts/OpenSans-Medium.ttf";
import openSansSemiBold from "../assets/fonts/OpenSans-Bold.ttf";
import openSansBold from "../assets/fonts/OpenSans-SemiBold.ttf";
import openSansExtraBold from "../assets/fonts/OpenSans-ExtraBold.ttf";

const fontFaces = css`

    @font-face {
        font-family: 'Open Sans';
        url(${openSansLight}) format('woff2'),
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansRegular}) format('woff2'),
        font-weight: 400;
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansMedium}) format('woff2'),
        font-weight: 500;
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansSemiBold}) format('woff2'),
        font-weight: 600;
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansBold}) format('woff2'),
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansExtraBold}) format('woff2'),
        font-weight: 800;
        font-style: normal;
    }
`;

export default fontFaces;
