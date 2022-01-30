import NextLink from 'next/link'
import React from 'react'
import NextImage from 'next/image'

const GitHubImage = () => {
  return (
    <NextImage
      className="object-cover object-center shadow-xl"
      alt="Javaistic Open Source On GitHub"
      src={require('@/img/home/open-source-on-github.svg').default}
      width={613}
      height={521}
      layout="responsive"
      blurDataURL={require('@/img/home/open-source-on-github.svg').default}
      placeholder="blur"
      loading="lazy"
    />
  )
}
export function OpenSource() {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-4  py-24 sm:px-10 md:flex-row">
        <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <GitHubImage />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="mb-8 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Open to anyone.&nbsp;
            <br className="hidden lg:inline-block" />
            Fork it, twist it. Flip it.
          </h1>
          <p className="mb-8 leading-relaxed">
            Join the community and help us build the best open source Java learning site for
            everyone.
          </p>
          <div className="flex justify-center">
            <button className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-800 hover:shadow-xl focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-700 dark:hover:bg-gray-600 sm:w-auto">
              <NextLink href="https://github.com/javaistic/javaistic">View on GitHub</NextLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
