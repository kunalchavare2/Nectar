import { styled } from "styled-components";
import {
  color,
  device,
  fontSize,
  fontWeight,
  opacity,
} from "../../../utils/constant/style-const";

const SearchPopOverStyle = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 11%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
  background-color: ${(props) => props.theme.body};

  .searchBarStyle {
    width: 100%;
    input {
      font-size: ${fontSize.titleSmall};
    }
  }

  @media ${device.laptop} {
    width: 70%;
    background-color: unset;
    padding-top: 5%;
    gap: 5%;
  }
`;

export const SearchResultStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  height: fit-content;
  border-radius: 15px;
  padding: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  margin-bottom: 1rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.tablet} {
    background-color: ${(props) => props.theme.body};
    height: 100%;
  }
`;

export const CategoryWrapperStyle = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 1rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    align-items: center;
    justify-items: center;

    .categoryItem {
      max-width: 200px;
      max-height: 200px;
      height: 100%;
      width: 100%;
      cursor: pointer;
    }
  }
`;
export const ProductWrapperStyle = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.primary};
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
    background-color: ${`${color.green100 + opacity(26)}`};
  }
`;

export const CloseButtonStyle = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: ${fontSize.headingSmall};
  background: transparent;
  border: none;
  color: ${(props) => props.theme.primary};

  &:hover {
    color: ${(props) => props.theme.denger};
  }
`;

export default SearchPopOverStyle;
