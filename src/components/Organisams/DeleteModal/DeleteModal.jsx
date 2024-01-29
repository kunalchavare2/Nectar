import React from "react";
import "./DeleteModal.styled.js";
import Drawer from "./../../Atoms/Drawer/Drawer";
import {
  BtnWrapper,
  ContentStyle,
  DeleteModalStyle,
  IconButton,
  ModalBtn,
  ModalButton,
} from "./DeleteModal.styled.js";
import { IoClose } from "react-icons/io5";

const DeleteModal = ({ isOpen, setIsOpen, onDelete }) => {
  function exitBtnHandler() {
    setIsOpen(false);
  }

  function handleModalEvent(ev) {
    if (ev.target.textContent.toLowerCase() === "delete") {
      onDelete(true);
    } else {
      onDelete(false);
    }
    exitBtnHandler(); // close
  }
  return (
    <Drawer isOpen={isOpen}>
      <DeleteModalStyle>
        <ContentStyle>
          <p class="heading">Delete Item?</p>
          <p class="description">Do you want to delete this cart Item?</p>
        </ContentStyle>
        <BtnWrapper>
          <ModalButton
            type="cancel"
            label="Cancel"
            onClick={handleModalEvent}
          />
          <ModalButton
            type="delete"
            label="Delete"
            onClick={handleModalEvent}
          />
        </BtnWrapper>
        <IconButton
          icon={<IoClose />}
          transparent={true}
          onClick={exitBtnHandler}
        />
      </DeleteModalStyle>
    </Drawer>
  );
};

export default DeleteModal;
