import { BigText, InlineCode, Paragraph, Widont } from '@/components/home/common'
import { Footer } from '@/components/home/Footer'
import { Hero } from '@/components/home/Hero'
import { Logo } from '@/components/Logo'
import { Search } from '@/components/Search'
import { Testimonials } from '@/components/Testimonials'
import Head from 'next/head'
import NextLink from 'next/link'

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Javaistic - Learn Java programming very fast and easily with Javaistic."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Javaistic - Learn Java programming very fast and easily with Javaistic."
        />
        <title>Javaistic - Learn Java programming very fast and easily with Javaistic.</title>
      </Head>
      <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          <div className="border-b border-gray-200 py-4 flex items-center justify-between mb-16 sm:mb-20 sm:mx-0 sm:px-0">
            <div className="flex items-center">
              <NextLink href="/">
                <Logo className="w-auto flex h-8 lg:h-10 sm:h-5" />
              </NextLink>
            </div>
            <div className="flex items-center space-x-6 sm:space-x-10 ml-6 sm:ml-2">
              <Search />
              <NextLink href="/docs">
                <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2">
                  <span className="sm:hidden">Docs</span>
                  <span className="hidden sm:inline">Documentation</span>
                </a>
              </NextLink>
              <a
                href="https://github.com/javaistic/javaistic"
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
              >
                <span className="sr-only">Javaistic on GitHub</span>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-16 mb-8 sm:mt-18 sm:mb-10">
            Learn{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-cyan-500">
              Java
            </span>{' '}
            programming very fast and easily with{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-500">
              Javaistic.
            </span>
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
            An Java Programming learning website packed with information and programs ranging from{' '}
            <InlineCode>basics</InlineCode> , <InlineCode>arrays</InlineCode> ,{' '}
            <InlineCode>string programs</InlineCode> to <InlineCode>2D arrays</InlineCode> ,{' '}
            <InlineCode>recursion</InlineCode> , <InlineCode>matrices</InlineCode> and many more.
          </p>
          <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center mt-12 mb-28 ">
            <NextLink href="/docs">
              <a className="w-full sm:w-auto flex-none bg-blue-700 hover:bg-blue-600 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200">
                Get started
              </a>
            </NextLink>
            <NextLink href="/">
              <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                Learn more
              </a>
            </NextLink>
          </div>
        </div>
        <Hero />
      </header>
      <section className="relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8">
          <BigText as="h2" className="mb-8">
            <Widont>“ Learning By Doing ” actually works.</Widont>
          </BigText>
          <figure>
            <blockquote>
              <Paragraph className="max-w-4xl mx-auto mb-6">
                Let's us learn Java by learning concepts and practicing programs.<br/>{' '}
                <Widont>
                  I am sure you will fall in love with Java.
                </Widont>
              </Paragraph>
            </blockquote>
            <figcaption className="sm:text-xl font-medium flex flex-col items-center">
              <div className="p-1 border-2 border-sky-400 rounded-full mb-3">
                <img
                  src={require('@/img/uiuxarghya.png').default}
                  alt=""
                  className="w-10 h-10 rounded-full bg-sky-100"
                  loading="lazy"
                />
              </div>
              <div className="text-gray-900">Arghya Ghosh</div>
              <div className="text-sky-600">Creator of Javaistic</div>
            </figcaption>
          </figure>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  )
}
