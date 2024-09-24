import { ArrowRightIcon, CodeIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import NextImage from 'next/image'
import NextLink from 'next/link'
import React from 'react'

const DocsImage = () => {
  return (
    <NextImage
      className="object-cover object-center"
      alt="Javaistic Docs"
      src={require('@/img/home/docs.svg').default}
      width={1213}
      height={1023}
      blurDataURL={require('@/img/home/docs.svg').default}
      placeholder="blur"
      loading="lazy"
    />
  )
}

const ProgImage = () => {
  return (
    <NextImage
      className="object-cover object-center"
      alt="Javaistic Programs"
      src={require('@/img/home/programs.svg').default}
      width={1213}
      height={1023}
      blurDataURL={require('@/img/home/programs.svg').default}
      placeholder="blur"
      loading="lazy"
    />
  )
}

const OpenSourceImage = () => {
  return (
    <NextImage
      className="object-cover object-center"
      alt="Javaistic Open Source On GitHub"
      src={require('@/img/home/open-source.svg').default}
      width={613}
      height={521}
      blurDataURL={require('@/img/home/open-source.svg').default}
      placeholder="blur"
      loading="lazy"
    />
  )
}

export function Features() {
  return (
    <section className="font-sans">
      <div className="px-10 sm:px-10 md:px-12">
        <h1 className="mt-5 mb-4 text-center text-5xl font-extrabold text-gray-900 sm:text-7xl">
          Why Javaistic?
        </h1>
        <div className="mb-2 items-center justify-center space-y-5 text-center">
          <p className="mx-auto text-lg font-medium dark:text-gray-400 sm:w-1/2">
            Our docs are designed to make learning Java easy and fun.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-14 sm:px-10 md:flex-row">
        <div className="mx-auto mb-10 flex flex-col items-center py-10 sm:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <DocsImage />
          </div>
          <div className="flex w-5/6 flex-col items-start px-1 text-left sm:px-0 md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl">
              Quality over quantity
            </h1>
            <p className="mb-8 text-left text-xl font-medium leading-relaxed">
              We value creating high quality, 100% free Java education. Beautifully designed and
              well written Java Docs which is very easy to understand.
            </p>
            <div className="flex justify-center">
              <NextLink href="/docs">
                <button className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-800 hover:shadow-xl focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-700 dark:hover:bg-gray-600 sm:w-auto">
                  <span className="flex items-center">
                    Start Learning
                    <ArrowRightIcon className="ml-2 h-6" />
                  </span>
                </button>
              </NextLink>
            </div>
          </div>
        </div>
        <div className="mx-auto my-10 flex flex-col items-center py-10 sm:flex-row">
          <div className="flex w-5/6 flex-col items-start px-1 text-left sm:px-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl">
              Coding is fun
            </h1>
            <p className="mb-8 text-xl font-medium leading-relaxed">
              Start coding immediately, or go through our step by step explanation of programs.
            </p>
            <div className="flex justify-center">
              <NextLink href="/programs">
                <button className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-800 hover:shadow-xl focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-700 dark:hover:bg-gray-600 sm:w-auto">
                  <span className="flex items-center">
                    <CodeIcon className="mr-2 h-6" />
                    Start Coding
                  </span>
                </button>
              </NextLink>
            </div>
          </div>
          <div className="order-first mb-10 w-5/6 sm:order-none md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <ProgImage />
          </div>
        </div>
        <div className="my-10 mx-auto flex flex-col  items-center py-10 sm:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <OpenSourceImage />
          </div>
          <div className="flex w-5/6  flex-col items-start px-1 text-left sm:px-0 md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl">
              Open to anyone.&nbsp;
              <br className="hidden lg:inline-block" />
              Fork it, twist it. Flip it.
            </h1>
            <p className="mb-8 text-xl font-medium leading-relaxed">
              Join the community and help us build the best open source Java learning site for
              everyone.
            </p>
            <div className="flex justify-center">
              <NextLink href="https://github.com/javaistic/javaistic" target="_blank">
                <button className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-800 hover:shadow-xl focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-700 dark:hover:bg-gray-600 sm:w-auto">
                  <span className="flex items-center">
                    View on GitHub
                    <ExternalLinkIcon className="ml-2 h-6" />
                  </span>
                </button>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
