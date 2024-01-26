import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";
export const FilterCategories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${color.gray100};
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f2f3f2;
  max-width: 500px;
  padding: 20px;
`;
