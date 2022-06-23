import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
`;

const ModalWrapper = styled.div`
  width: 715px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  position: relative;
`;

const ModalImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const ModalImgContainer = styled.div`
  width: 290px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 42px;
  width: 42px;
  height: 42px;
  padding: 0;
  z-index: 10;
`;

export {Background, ModalWrapper, ModalImgContainer, ModalContent, ModalImg, CloseModalButton};
