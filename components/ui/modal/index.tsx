import React from "react";
import ReactDOM from "react-dom";
import {Modal} from "./ModalWindow";

interface IModalProps {
  showModal: boolean,
  setShowModal: any;
  content: any;
  title: string
}

export const ModalWindow = (props: IModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal {...props} />,
        document.querySelector("body")
      )}
    </>
  );
};
