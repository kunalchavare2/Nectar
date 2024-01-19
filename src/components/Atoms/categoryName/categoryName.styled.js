import styled from "styled-components";
export const InputBlock = styled.div`
    margin:20px 0;
    display:flex;
    align-items:center;
    position:relative;
`;
export const Input = styled.input `
appearance:none;
-webkit-appearance:none;
-moz-appearnce:none;
width:24px;
height:24px;
border-radius:8px;
outline:none;
cursor:pointer;
border:1.5px solid #C2C2C2;
margin-right:10px;
&:checked {
  background-color:#53B175;
  border:none;
}
&:checked::before {
  content: '\u2713';
  display:block;
  text-align:center;
  font-size:16px;
  color:#fff;
  
}
`;
export const Label = styled.label`
    font-size:1rem;
`;

