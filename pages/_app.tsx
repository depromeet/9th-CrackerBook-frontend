import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../src/styles/global";
import theme from "../src/styles/theme";
import { ThemeProvider } from "../src/styles/themed-components";
import {
  AppContainer,
  Title,
  Mobile,
  Desktop,
  Img,
} from "../src/styles/common/container";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Desktop>
            <Title>Craker Book</Title>
            <Img src="/assets/main/main.png" />
          </Desktop>
          <Mobile>
            <Component {...pageProps} />
          </Mobile>
        </AppContainer>
      </ThemeProvider>
    </RecoilRoot>
  );
}
