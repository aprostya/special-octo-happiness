import {Tab} from "../../ui/tab/index";
import React from "react";
import {EModalState} from "../../enums/enums";
import googleIcon from "../../../public/google.svg";
import emailIcon from "../../../public/email.svg";
import vkIcon from "../../../public/vk.svg";
import {useSelector} from "react-redux";

interface IAuthTabs {
  onTabClick: any;
}

export const AuthTabs = (props: any) => {
  const {onTabClick} = props;
  const modalState = useSelector((state: any) => state.modal.modalState);
  const tabLink =
    modalState === EModalState.LOGIN
      ? EModalState.LOGIN_EMAIL
      : EModalState.REGISTRATION_EMAIL;

  return (
    <>
      <Tab
        text="Email"
        icon={emailIcon}
        onTabClick={() => onTabClick(tabLink)}
      />
      <Tab
        text="Vkontakte"
        icon={vkIcon}
        onTabClick={() => onTabClick("registrationVkAuth")}
      />
      <Tab
        text="Gmail"
        icon={googleIcon}
        onTabClick={() => onTabClick("registrationGoogleAuth")}
      />
    </>
  );
};
