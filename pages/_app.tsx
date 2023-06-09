import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import withRedux from '@/src/withRedux'


export default function App({ Component, pageProps }: AppProps) {
  return withRedux(<Component {...pageProps} />)
}
