import { AppProps } from 'next/app';
import Top from '../src/components/common/Top';
import Footer from '../src/components/common/Footer';
import styled from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  const DivContainer = styled.div`
    margin-left: 20%;
    margin-right: 20%;
  `;

  return (
    <DivContainer>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </DivContainer>
  );
}

export default App;
