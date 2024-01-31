import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {
  color,
  device,
  fontSize,
  fontWeight,
} from "../../utils/constant/style-const";
export const Quantity = styled.span`
  border-radius: 17px;
  border: 1px solid #e2e2e2;
  padding: 13px;
`;
export const ProductDetailPage = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 1024px;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ProductContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex: 1;
  align-self: stretch;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0;
  }
`;
export const Price = styled.span`
  color: ${color.blue500};
  font-size: ${fontSize.titleLarge};
`;
export const ProductImage = styled.div`
  height: 40vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  @media ${device.tablet} {
    flex: 1;
    height: auto;
    max-width: 400px;
  }
`;

// export const productHeading
export const ProductCountPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  margin: 10px 0;
  text-align: left;
  align-items: center;
`;

export const ProductHeadingfav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const ProductCount = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 10px;
  padding: 0.3rem 0;
  align-self: stretch;
  text-align: left;
  color: ${color.gray100};
  font-size: ${fontSize.captionRegular};
  font-style: normal;
  font-weight: ${fontWeight.regular};
  line-height: 1.3125rem; /* 161.538% */
  text-transform: capitalize;
  border-top: 1px solid ${color.gray100};
  border-bottom: 1px solid ${color.gray100};
`;
export const RegHeart = styled(FaRegHeart)`
  font-size: ${fontSize.body};
  color: ${(props) => props.colorValuen};
`;
export const Heart = styled(FaHeart)`
  font-size: ${fontSize.body};
  color: ${color.denger};
`;

export const ProductHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const Category = styled.div`
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  display: inline-block;
  align-self: left;
  font-size: ${fontSize.captionRegular};
  font-weight: 500;
  color: ${(props) => props.colorValue};
  background: ${(props) => props.colorValue + "36"};
  align-self: flex-start;
`;

export const ButtonWrapperStyle = styled.div`
  position: sticky;
  bottom: 0;
`;
