import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
`

const MainTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 40px;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Roboto;
`

export { Container, Main, MainTitle as Title, Description, CodeTag }
