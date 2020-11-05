import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boiler Plate</title>
        <link rel="shortcut icon" href="/img/favicon-ipr.png" />
        <link rel="apple-touch-icon" href="/img/favicon-ipr.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="boilerplate" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  )
}

export default App
