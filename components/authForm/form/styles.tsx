import styled from "styled-components";
import Link from '@mui/material/Link';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 14px;
`

const AuthText = styled.span`
    display: block;
    font-weight: bold;
    margin-right: 8px;
    font-size: 18px;
`

const StyledLink = styled(Link)`
    font-size: 18px;
    cursor: pointer;
`

export {FormContainer, LinkContainer, AuthText, StyledLink};