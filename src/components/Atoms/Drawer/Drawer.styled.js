import styled from "styled-components";

const DrawerStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px) saturate(139%);
  -webkit-backdrop-filter: blur(5px) saturate(139%);
  background-color: rgba(17, 25, 40, 0.75);
  transition: all 0.5s linear;

  ${(props) => props.extraStyles && props.extraStyles}
`;
export default DrawerStyle;
