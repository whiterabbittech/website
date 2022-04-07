import '../styles/globals.css'
import type { AppProps } from 'next/app'

function WhiteRabbit({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default WhiteRabbit
