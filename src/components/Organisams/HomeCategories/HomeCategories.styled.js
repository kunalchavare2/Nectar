import styled from "styled-components";
import { fontSize } from "../../../utils/constant/style-const";

export const CategoryHeaders = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: ${(props) => props.theme.primary};
  p {
    color: ${(props) => props.theme.accent};
    font-size: ${fontSize.body};
  }
`;
export const CategoryProductList = styled.div`
  gap: 1rem;
  padding: 1rem;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CategoryGroceryList = styled.div`
  gap: 1rem;
  padding: 1rem;
  /* overflow-x: scroll; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  .card-quantity {
    width: 30%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
