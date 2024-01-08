import styled, { css } from 'styled-components';
export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 5px;
`;
export const  StyledButton = styled.button`

  color: #FFF9FF;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  border: 0; 
  cursor: pointer;
  display: inline-block;
  border-radius: 19px;
  width: 364px;
  height: 67px;
  flex-shrink: 0;
 
  ${(props) =>
    props. transparent &&
    css`
      background-color:#FFF9FF;
      color: #53B175 ;  
      border: 1px solid black;  
    `}

  /* Styles for icon buttons */
  &.storybook-button--icon {
    width:  45.67px  ; 
    height:  45.67px  ;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
 
  ${(props) =>
    props.backgroundColor &&
    !props.transparent &&
    css`
      background-color: ${props.backgroundColor};
    `}
 
`;