import { AppProps } from "next/app";
import GlobalStyle from "../src/styles/global";
import theme from "../src/styles/theme";
import { ThemeProvider } from "../src/styles/themed-components";
import Header from "../src/components/common/Header";
import Footer from "../src/components/common/Footer";
import {
  AppContainer,
  Title,
  Mobile,
  Desktop,
} from "../src/styles/common/container";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Desktop>
          <Title>토이프로젝트!!</Title>
        </Desktop>
        <Mobile>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Mobile>
      </AppContainer>
    </ThemeProvider>
  );
}
