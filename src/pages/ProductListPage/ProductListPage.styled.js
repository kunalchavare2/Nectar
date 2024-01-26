import styled from "styled-components";
import { device } from "../../utils/constant/style-const";
export const Specifiedproductlist = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(134px, 1fr));
  gap: 1rem;
  padding: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media ${device.tablet} {
    display: none;
  }
`;
