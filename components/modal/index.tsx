import React, {useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalContent,
  ModalImg,
  ModalImgContainer,
  CloseModalButton,
} from "./styles";

export const Modal = ({showModal, setShowModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (event) => {
    setShowModal(false);
  };

  const keyPress = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      <Background onClick={closeModal} ref={modalRef}>
        <animated.div style={animation}>
          <ModalWrapper>
            <ModalImgContainer>
              <ModalImg src={"/pizza.jpeg"} alt="modal picture" />
            </ModalImgContainer>
            <ModalContent>
              <h1>Are you ready?</h1>
              <p>Get exclusive access to our next launch.</p>
              <button>Join Now</button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </animated.div>
      </Background>
    </>
  );
};
