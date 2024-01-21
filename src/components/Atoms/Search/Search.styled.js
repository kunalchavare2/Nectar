import styled, { css } from "styled-components";
export const Search = styled.div`
  background-color: #f2f3f2;
  padding: 5px 10px;
  display: inline-flex;
  border-radius: 15px;
  align-items: center;
  position: relative;
  width: 100%;
`;
export const Inputbar = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  width: 100%;
  &::placeholder {
    font-size: 0.875rem;
    color: #7c7c7c;
  }
`;
export const Button = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  padding: 0px;
`;
