import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Presbiteriana Renovada</title>
        <link rel="shortcut icon" href="/img/favicon-ipr.png" />
        <link rel="apple-touch-icon" href="/img/favicon-ipr.png" />
        <meta
          name="description"
          content="Igreja Presbiteriana Renovada Jardim Vitória uma igreja para a familia que investe em pessoas"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  )
}

export default App
