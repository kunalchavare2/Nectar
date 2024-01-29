import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";
import { Button } from "./../../Atoms/Button/Button";

export const DeleteModalStyle = styled.div`
  width: 300px;
  height: fit-content;
  background: rgb(255, 255, 255);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  position: relative;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.068);
`;



export const ContentStyle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & .heading {
    font-size: 20px;
    font-weight: 700;
    color: rgb(27, 27, 27);
  }
  & .description {
    font-weight: 100;
    color: rgb(102, 102, 102);
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const ModalButton = styled(Button)`
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  flex: 1;

  ${(props) =>
    props.type === "delete" &&
    `
    background-color:red;

  `}
`;
export const IconButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  padding: 0.3rem;
  width: fit-content;
  border: none;
  z-index: 2000;
  background-color: transparent;
  color: ${color.gray100};
  font-size: 1.7rem;
  &:hover {
    color: ${color.blue500};
  }
`;

// .card {
//

//   &__content {
//
//   }

//   &__heading {
//     font-size: 20px;
//     font-weight: 700;
//     color: rgb(27, 27, 27);
//   }

//   &__description {
//     font-weight: 100;
//     color: rgb(102, 102, 102);
//   }
//   &__button-wrapper {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//   }
//   &__button {
//     width: 50%;
//     height: 35px;
//     border-radius: 10px;
//     border: none;
//     cursor: pointer;
//     font-weight: 600;
//     &.primary {
//       background-color: rgb(255, 114, 109);
//       color: white;
//     }
//     &.primary:hover {
//       background-color: rgb(255, 73, 66);
//     }
//     &.secondary {
//       background-color: #ddd;
//     }
//     &.secondary:hover {
//       background-color: rgb(197, 197, 197);
//     }
//   }
//   &__exit-button {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: none;
//     background-color: transparent;
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     cursor: pointer;

//     &:hover {
//       svg {
//         fill: black;
//       }
//     }

//     svg {
//       fill: rgb(175, 175, 175);
//     }
//   }
// }
