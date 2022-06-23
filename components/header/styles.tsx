import styled from "styled-components";
import {colors} from "../../consts/colors";

const HeaderContainer = styled.header`
  display: flex;
  background-color: ${colors.primary_color};
  width: 100vw;
  height: 64px;
  padding: 12px 30px 12px 30px;
  align-items: center;
`;

const HeaderAuthContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const AvatarContainer = styled.div`
  margin-right: 12px;
`;

export { HeaderContainer, HeaderAuthContainer, AvatarContainer }