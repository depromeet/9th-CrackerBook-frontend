import { Container, AppProps } from 'next/app'
import GlobalStyle from '../src/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Container>
  )
}