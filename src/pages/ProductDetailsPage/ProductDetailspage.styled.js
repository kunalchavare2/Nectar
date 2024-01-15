import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export const Quantity = styled.span `
border-radius: 17px;
border: 1px solid #E2E2E2;
padding:13px;
`;
export const ProductDetailPage = styled.div `
    width:90%;
    margin:auto;
    text-align:left;
`;
export const Price = styled.span ` 
color: #181725;
font-size:1.5rem;
`;
export const ProductImage = styled.img `
    width:100%;
    max-width:330px;


`;

// export const productHeading
export const ProductCountPrice = styled.div`
    display:flex;
    justify-content:space-between;
    margin:10px 0;
    text-align:left;
    align-items:center;
`;

export const ProductHeadingfav = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:10px 0;
    text-align:left;
`;

export const ProductCount = styled.div`
    display:flex;
    gap:10px;
`;

export const ProductDescription = styled.div`
    text-align:left;
    display:flex;
    flex-direction: column;
    gap:7px;
    margin:10px 0;
`;
export const RegHeart = styled(FaRegHeart)`
    font-size:1rem;
    color:${props=>props.colorValuen}
`;
export const Heart = styled(FaHeart)`
    font-size:1rem;
    color:red;
`;

export const ProductHeading = styled.div`
    display:flex;
    flex-direction: column;
    gap:7px;
`;
export const Category = styled.div`
padding: 0.2rem 0.5rem;
border-radius: 10px;
display:inline-block;
align-self:left;
font-size: 0.8rem;
font-weight: 500;
color:rgba(83, 177, 117, 0.70);
background: rgba(83, 177, 117, 0.10);
margin:10px 0;
`;