import React from "react";
import {useDispatch} from "react-redux";
import {FormContainer} from "./styles";
import {EModalState} from "../../enums/enums";
import {modalSliceActions} from "../../../store/modal";
import {FormLink} from "./formLink";
import {FormContent} from './formContent';


export const Form: React.FC = () => {
  const dispatch = useDispatch();
  const changeModalState = (modalState?: EModalState) => {
    dispatch(modalSliceActions.changeModalState(modalState));
  };

  return (
    <FormContainer>
      <FormContent />
      <FormLink onLinkClick={changeModalState} />
    </FormContainer>
  );
};
