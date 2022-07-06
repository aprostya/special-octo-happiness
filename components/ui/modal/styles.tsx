import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import {Title} from "../../styles_common/sharedstyles";

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
  display: flex;
  position: relative;
  border-radius: 10px;
  width: 715px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
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
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;

const ModalContentWrapper = styled.div`
    margin-top: 125px;
    padding: 0 50px;
`

const ModalTitle = styled(Title)`
    margin-bottom: 44px;
`

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

export {Background, ModalWrapper, ModalTitle, ModalImgContainer, ModalContent, ModalContentWrapper, ModalImg, CloseModalButton};
