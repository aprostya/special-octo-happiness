import React, {useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalContent,
  ModalImg,
  ModalImgContainer,
  CloseModalButton,
  ModalContentWrapper,
  ModalTitle
} from "./styles";

interface IModalProps {
  showModal: boolean,
  title: string,
  setShowModal: any;
  content: any;
}

export const Modal = (props: IModalProps) => {
  const {showModal, setShowModal, content, title} = props;

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = event => {
    if (modalRef.current === event.target) {
      setShowModal(false);
    }
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
              <ModalContentWrapper>
                <ModalTitle>{title}</ModalTitle>
                {content}
              </ModalContentWrapper>
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
