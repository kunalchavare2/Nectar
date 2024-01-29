import React from "react";
import styled from "styled-components";

const CategoryFilterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.body};
`;

export default CategoryFilterStyle;
