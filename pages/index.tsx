import Head from 'next/head'
import {
  Container,
  Main,
} from '../components/styles_common/sharedstyles'
import {Header} from '../components/header/index';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <div id="backdrop-root"></div>
      </Head>
      <Main>
        <Header/>
      </Main>
    </Container>
  )
}
