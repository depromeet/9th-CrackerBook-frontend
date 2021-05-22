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
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// Import Swiper styles
import 'swiper/swiper.scss';
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Head>
            <title>My page title</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <AppContainer>
            <Desktop>
              <Title>Craker Book</Title>
              <Img src="/assets/main/main.png" />
            </Desktop>
            <Mobile>
              <Component {...pageProps} />
            </Mobile>
          </AppContainer>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
