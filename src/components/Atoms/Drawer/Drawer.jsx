import { createPortal } from "react-dom";
import "./Drawer.styled.js";
import DrawerStyle from "./Drawer.styled.js";

const Drawer = ({ children, isOpen, wrapperId, handleClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <DrawerStyle className="drawer">{children}</DrawerStyle>,
    document.body
  );
};

export default Drawer;
