import { AppProps } from 'next/app';
import Top from '../src/components/common/Top';
import Footer from '../src/components/common/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Top />
        <Component {...pageProps} />
        <Footer />
      </div>
  );
}

export default App;
