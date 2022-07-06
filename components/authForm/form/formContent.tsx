import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {AuthTabs} from "./authTabs";
import {AuthFormFields} from "./authForm";
import {EModalState} from "../../enums/enums";
import {modalSliceActions} from "../../../store/modal";
import {LoginFormFields} from "../../loginForm";

export const FormContent: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const changeModalState = (modalState?: EModalState) => {
    dispatch(modalSliceActions.changeModalState(modalState));
  };
  const modalState = useSelector((state: any) => state.modal.modalState);

  if (modalState === EModalState.REGISTRATION) {
    return <AuthTabs onTabClick={changeModalState} />;
  }
  if (modalState === EModalState.REGISTRATION_EMAIL) {
    return <AuthFormFields />;
  }
  if (modalState === EModalState.LOGIN) {
    return <AuthTabs onTabClick={changeModalState} />
  }
  if(modalState === EModalState.LOGIN_EMAIL) {
    return <LoginFormFields />
  }
};
