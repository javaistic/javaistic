import BackToTopButton from '@/components/home/BackToTopButton'
import { BigText, InlineCode, Paragraph, Widont } from '@/components/home/common'
import { Features } from '@/components/home/Features'
import { Footer } from '@/components/home/Footer'
import { Hero } from '@/components/home/Hero'
import MenuButton from '@/components/home/Menu'
import Support from '@/components/home/Support'
import { Logo } from '@/components/Logo'
import { Search } from '@/components/Search'
import { Testimonials } from '@/components/Testimonials'
import ThemeChanger from '@/components/ThemeChanger'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import Router, { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className="space-y-20 overflow-hidden sm:space-y-32 md:space-y-40 lg:space-y-44">
      <Head>
        <meta
          key="description"
          name="description"
          content="A Java programming learning website packed with information and programs ranging from basics , arrays , string programs to 2D arrays , recursion , matrices and many more."
        />
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
      <header className="relative z-10 mx-auto max-w-screen-lg xl:max-w-screen-xl">
        <div className="mb-14 px-4 sm:mb-20 sm:px-6 md:px-8 xl:mb-8">
          <div className="mb-16 flex items-center justify-between border-b border-gray-200 py-4 dark:border-gray-700 sm:mx-0 sm:mb-20 sm:px-0">
            <div className="flex items-center">
              <NextLink href="/">
                <a
                  onContextMenu={(e) => {
                    e.preventDefault()
                    Router.push('/brand')
                  }}
                >
                  <Logo className="flex h-8 w-auto text-black dark:text-white sm:h-5 lg:h-10" />
                </a>
              </NextLink>
            </div>
            <div className="ml-4 flex items-center space-x-4 sm:ml-2 sm:space-x-6">
              <Search />
              <NextLink href="/docs">
                <a className="hidden rounded-md px-4 py-3 text-base font-medium leading-4 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-300 dark:hover:bg-gray-700  dark:hover:text-white sm:inline">
                  <span className="hidden sm:inline">Documentation</span>
                </a>
              </NextLink>
              <MenuButton />
              <ThemeChanger />
              <a
                href="https://github.com/javaistic/javaistic"
                className="hidden text-gray-400 transition-colors duration-200 hover:text-gray-500 sm:inline"
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
          <h1 className="mt-16 mb-8 px-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:mt-18 sm:mb-10 sm:px-0 sm:text-6xl lg:text-7xl">
            Learn{' '}
            <span className="bg-gradient-to-br from-green-400 to-cyan-500 bg-clip-text font-extrabold text-transparent">
              Java
            </span>{' '}
            programming very fast and easily with{' '}
            <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text font-extrabold text-transparent">
              Javaistic.
            </span>
          </h1>
          <p className="mb-10 max-w-screen-lg px-4 text-lg font-medium sm:mb-11 sm:px-0 sm:text-2xl sm:leading-10">
            A Java Programming learning website packed with information and programs ranging from{' '}
            <InlineCode>basics</InlineCode> , <InlineCode>arrays</InlineCode> ,{' '}
            <InlineCode>string programs</InlineCode> to <InlineCode>2D arrays</InlineCode> ,{' '}
            <InlineCode>recursion</InlineCode> , <InlineCode>matrices</InlineCode> and many more.
          </p>
          <div className="mt-12 mb-28 flex flex-wrap space-y-4 text-center sm:space-y-0 sm:space-x-4 ">
            <button
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-blue-700 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-blue-600 hover:shadow-xl focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
              type="button"
              onClick={() => router.push('/docs')}
            >
              Get started
            </button>
            <button
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-800 hover:shadow-xl focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-700 dark:hover:bg-gray-600 sm:w-auto"
              type="button"
              onClick={() => router.push('/about')}
            >
              Learn more
            </button>
            <button
              className="text-md focus:outline-none flex w-full flex-none items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-50 py-3 font-semibold leading-6 text-gray-900 shadow-md transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white sm:w-auto sm:px-6"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              onClick={() => router.push('/sponsors')}
            >
              <span className="sr-only">(Sponsor Javaistic)</span>
              <svg width="24" height="24" fill="none" stroke="#db61a2" strokeWidth="2.5">
                <path d="M18.7663 7.23375C18.3753 6.84262 17.9111 6.53234 17.4002 6.32065C16.8893 6.10896 16.3417 6 15.7887 6C15.2357 6 14.6881 6.10896 14.1772 6.32065C13.6663 6.53234 13.2021 6.84262 12.8112 7.23375L11.9998 8.04511L11.1884 7.23375C10.3987 6.44406 9.32768 6.00041 8.21089 6.00041C7.09409 6.00041 6.02303 6.44406 5.23334 7.23375C4.44365 8.02344 4 9.0945 4 10.2113C4 11.3281 4.44365 12.3991 5.23334 13.1888L6.0447 14.0002L11.9998 19.9553L17.9549 14.0002L18.7663 13.1888C19.1574 12.7979 19.4677 12.3337 19.6794 11.8228C19.891 11.3119 20 10.7643 20 10.2113C20 9.65828 19.891 9.11068 19.6794 8.59978C19.4677 8.08888 19.1574 7.6247 18.7663 7.23375V7.23375Z"></path>
              </svg>
              &nbsp;Sponsor
            </button>
          </div>
        </div>
        <Hero />
      </header>
      <Features />
      <Testimonials />
      <Support />
      <div className="mx-auto max-w-screen-lg space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 xl:max-w-screen-xl"></div>
      <BackToTopButton />
      <Footer />
    </div>
  )
}
