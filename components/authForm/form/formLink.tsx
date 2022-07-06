import {AuthText, LinkContainer, StyledLink} from "./styles";
import {EModalState} from "../../enums/enums";
import {useSelector} from "react-redux";

const getLinkConfig = (modalState: EModalState) => {
  if (
    modalState === EModalState.LOGIN ||
    modalState === EModalState.LOGIN_EMAIL
  ) {
    return "Register";
  }
  if (
    modalState === EModalState.REGISTRATION_EMAIL ||
    modalState === EModalState.REGISTRATION
  ) {
    return "Login";
  }
};

export const FormLink = (props: any) => {
  const {onLinkClick} = props;
  const modalState = useSelector((state: any) => state.modal.modalState);
  const redirectLink =
    modalState === EModalState.LOGIN
      ? EModalState.REGISTRATION
      : EModalState.LOGIN;

  return (
    <LinkContainer>
      <AuthText>Have an account?</AuthText>
      <StyledLink onClick={() => onLinkClick(redirectLink)}>
        {getLinkConfig(modalState)}
      </StyledLink>
    </LinkContainer>
  );
};
