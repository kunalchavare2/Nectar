import { css } from "styled-components";
import openSansLight from "../assets/fonts/OpenSans-Light.ttf";
import openSansRegular from "../assets/fonts/OpenSans-Regular.ttf";
import openSansMedium from "../assets/fonts/OpenSans-Medium.ttf";
import openSansSemiBold from "../assets/fonts/OpenSans-Bold.ttf";
import openSansBold from "../assets/fonts/OpenSans-SemiBold.ttf";
import openSansExtraBold from "../assets/fonts/OpenSans-ExtraBold.ttf";
import { fontWeight } from "../utils/constant/style-const";

const fontFaces = css`

    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansLight}) format('woff2'),
        font-weight: ${fontWeight.light};
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansRegular}) format('woff2'),
        font-weight: ${fontWeight.regular};
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansMedium}) format('woff2'),
        font-weight: ${fontWeight.medium};
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansSemiBold}) format('woff2'),
        font-weight: ${fontWeight.semiBold};
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansBold}) format('woff2'),
        font-weight: ${fontWeight.bold};
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${openSansExtraBold}) format('woff2'),
        font-weight: ${fontWeight.extraBold};
        font-style: normal;
    }
`;

export default fontFaces;
