import React from "react";
import {TabContainer, IconContainer, TabText, TabButton} from "./styles";
import Image from 'next/image';

interface ITabProps {
  text: string;
  icon: any;
  onTabClick: () => void;
}

export const Tab = (props: ITabProps) => {
  const {text, icon, onTabClick} = props;
  const handleClick = () => {
    onTabClick()
  }
  return (
    <TabButton onClick={handleClick}>
      <TabContainer>
        <IconContainer>
         <Image src={icon}/>
        </IconContainer>
        <TabText>{text}</TabText>
      </TabContainer>
    </TabButton>
  );
};
