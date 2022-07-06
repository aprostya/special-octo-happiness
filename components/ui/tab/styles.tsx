import styled from "styled-components";
import Button from "@mui/material/Button";

const TabContainer = styled.div`
    display: flex;
    align-items: center;
    width: 334px;
    height: 44px;
`

const IconContainer = styled.div `
    display: flex;
    margin-left: 26px;
`

const TabText = styled.span`
    display: block;
    margin: 0 auto;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    padding: 8px;
`

const TabButton = styled(Button)`
    color: #000;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px 3px rgba(34, 60, 80, 0.3);
    text-transform: capitalize;
`

export {TabContainer, IconContainer, TabText, TabButton}