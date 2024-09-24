import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import twitterLargeCard from '@/img/twitter-large-card.png'
// import ProgressBar from '@uiuxarghya/progress-bar'
import { ResizeObserver } from '@juggle/resize-observer'
import 'focus-visible'
import 'intersection-observer'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import '../css/fonts.css'
import '../css/main.css'
import * as ga from '../lib/ga'

if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  window.ResizeObserver = ResizeObserver
}

// const progress = new ProgressBar({
//   size: 2,
//   color: '#3B82F6',
//   className: 'progress-bar',
//   delay: 100,
// })

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
// if (typeof window !== 'undefined') {
//   progress.start()
//   progress.finish()
// }

// Router.events.on('routeChangeStart', progress.start)
// Router.events.on('routeChangeComplete', () => {
//   // progress.finish()
//   window.scrollTo(0, 0)
// })
// Router.events.on('routeChangeError', progress.finish)

export default function App({ Component, pageProps, router }) {
  let [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(
    () => {
      if (!navIsOpen) return
      function handleRouteChange(url) {
        setNavIsOpen(false)
        ga.pageview(url)
      }
      Router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        Router.events.off('routeChangeComplete', handleRouteChange)
      }
    },
    [navIsOpen],
    [router.events]
  )

  const Layout = Component.layoutProps?.Layout || Fragment
  const layoutProps = Component.layoutProps?.Layout
    ? { layoutProps: Component.layoutProps, navIsOpen, setNavIsOpen }
    : {}
  const meta = Component.layoutProps?.meta || {}
  const description = meta.metaDescription || meta.description || 'Documentation for Javaistic.'

  if (router.pathname.startsWith('/examples/')) {
    return <Component {...pageProps} />
  }

  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        <Title suffix="Javaistic">{meta.metaTitle || meta.title}</Title>
        <Head>
          <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
          <meta key="twitter:site" name="twitter:site" content="@javaistic" />
          <meta key="twitter:description" name="twitter:description" content={description} />
          <meta
            key="twitter:image"
            name="twitter:image"
            content={`https://javaistic.vercel.app${twitterLargeCard}`}
          />
          <meta key="twitter:creator" name="twitter:creator" content="@javaistic" />
          <meta
            key="og:url"
            property="og:url"
            content={`https://javaistic.vercel.app${router.pathname}`}
          />
          <meta key="og:type" property="og:type" content="article" />
          <meta key="og:description" property="og:description" content={description} />
          <meta
            key="og:image"
            property="og:image"
            content={`https://javaistic.vercel.app${twitterLargeCard}`}
          />
        </Head>
        {router.pathname !== '/' && (
          <Header navIsOpen={navIsOpen} onNavToggle={(isOpen) => setNavIsOpen(isOpen)} />
        )}
        <Layout {...layoutProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
