import styled, { css } from "styled-components";

const InputStyles = css`
  color: #bf4f74;
  font-size: 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;

  /* here we use the dynamically computed prop */

  ${(p) => css`
  margin:${p.size}`}
`;

export default InputStyles;
