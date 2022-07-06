import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import {HeaderContainer, HeaderAuthContainer, AvatarContainer} from "./styles";
import {ModalWindow} from "../ui/modal/index";
import {Form} from "../authForm/form/index";
import Image from "next/image";
import mainIcon from "../../public/mainIcon.svg";
import {useSelector} from "react-redux";
import {EModalState} from "../enums/enums";

const getModalTitle = (modalState) => {
  if (
    modalState === EModalState.REGISTRATION ||
    modalState === EModalState.REGISTRATION_EMAIL
  ) {
    return "Registration";
  }
  if (
    modalState === EModalState.LOGIN ||
    modalState === EModalState.LOGIN_EMAIL
  ) {
    return "Login";
  }
};

export const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const modalState = useSelector((state: any) => state.modal.modalState);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <Image src={mainIcon} />
      <HeaderAuthContainer>
        <AvatarContainer>
          <Avatar
            alt="User Avatar"
            src="https://i.pinimg.com/236x/1e/5c/1b/1e5c1bb17f5f5f692565a4760e0aaa57.jpg"
          />
        </AvatarContainer>
        <Button onClick={openModal} color="secondary">
          Login
        </Button>
        {showModal && (
          <ModalWindow
            title={getModalTitle(modalState)}
            content={<Form />}
            showModal
            setShowModal={setShowModal}
          />
        )}
      </HeaderAuthContainer>
    </HeaderContainer>
  );
};
