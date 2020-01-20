import React from 'react'
import { AppContext, AppProps } from 'next/app'
import Head from 'next/head'

interface MyAppProps extends AppProps {
  pageProps: any
}

function MyApp({ pageProps, Component }: MyAppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
        />
        <meta name="description" content="Next JS - Starter Kit" />
        <meta property="og:title" content="Next JS - Starter Kit" />
        <meta property="og:description" content="Next JS - Starter Kit" />
        <title>Next JS - Starter Kit</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}

  return { pageProps }
}

export default MyApp
