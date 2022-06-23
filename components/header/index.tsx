import React,  { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import {HeaderContainer, HeaderAuthContainer, AvatarContainer} from "./styles";
import {Modal} from '../modal/index';

export const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <HeaderContainer>
      <div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 24.5957C8 25.3713 8.62871 26 9.40426 26H38.5957C39.3713 26 40 25.3713 40 24.5957V20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20V24.5957Z"
            fill="#2F88FF"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M24 42V26"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 32V26"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33 42H15"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <HeaderAuthContainer>
        <AvatarContainer>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/236x/1e/5c/1b/1e5c1bb17f5f5f692565a4760e0aaa57.jpg"
          />
        </AvatarContainer>
        <Button onClick={openModal} color="secondary">Login</Button>
        {showModal && <Modal showModal setShowModal={setShowModal}/>}
      </HeaderAuthContainer>
    </HeaderContainer>
  );
};
