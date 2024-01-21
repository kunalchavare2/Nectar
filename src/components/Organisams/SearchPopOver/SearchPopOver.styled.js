import { styled } from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";

const SearchPopOverStyle = styled.div`
  width: 70%;
  height: 100vh;
  padding-top: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
`;

export const SearchResultStyle = styled.div`
  width: 100%;
  position: relative;
  height: fit-content;
  border-radius: 15px;
  padding: 1rem;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  margin-bottom: 1rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryWrapperStyle = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 1rem;
`;
export const ProductWrapperStyle = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
`;
export const SeeAllButtonStyle = styled.button`
  border: transparent;
  outline: transparent;
  background-color: transparent;
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.semiBold};
  color: ${color.green100};
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.2rem;

  &:hover {
    background-color: ${`${color.green100}26`};
  }
`;

export const CloseButtonStyle = styled.button`
  position: absolute;
  top: 4%;
  right: 3%;
  font-size: ${fontSize.headingSmall};
  background: transparent;
  border: none;
  color: ${(props) => props.theme.secondary};

  &:hover {
    color: ${color.black500};
  }
`;

export default SearchPopOverStyle;
