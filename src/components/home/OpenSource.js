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
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-4 py-24 sm:px-10  md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <GitHubImage />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
            Open to anyone.&nbsp;
            <br className="hidden lg:inline-block" />
            Fork it, twist it. Flip it.
          </h1>
          <p className="mb-8 leading-relaxed">
            Join the community and help us build the best open source Java learning site for
            everyone.
          </p>
          <div className="flex justify-center">
            <button className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-lg shadow-md hover:shadow-xl leading-6 font-semibold py-3 px-6 border border-transparent rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
              <NextLink href="https://github.com/javaistic/javaistic">View on GitHub</NextLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
