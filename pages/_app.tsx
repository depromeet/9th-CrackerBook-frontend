import { AppProps } from 'next/app'
import '../styles/global.css'

// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default App

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
