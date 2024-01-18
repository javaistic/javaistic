import { ArrowRightIcon } from '@heroicons/react/outline'
import { CalendarIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { SidebarLayout } from '@/layouts/SidebarLayout'
import { Community } from '@/components/Community'

export default function Changelog() {
  return (
    <>
      <Head>
        <title>Changelog - Javaistic</title>
        <meta name="description" content="Check out whats new on Javaistic." />

        <meta key="twitter:title" name="twitter:title" content="Changelog - Javaistic" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:site" name="twitter:site" content="@javaistic" />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="Check out whats new on Javaistic."
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://og-image-javaistic.vercel.app/og?title=Changelog"
        />
        <meta key="twitter:creator" name="twitter:creator" content="@javaistic" />

        <meta key="og:title" property="og:title" content="Changelog - Javaistic" />
        <meta key="og:url" property="og:url" content="https://javaistic.vercel.app/changelog" />
        <meta key="og:type" property="og:type" content="article" />
        <meta
          key="og:description"
          property="og:description"
          content="Check out whats new on Javaistic."
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://og-image-javaistic.vercel.app/og?title=Changelog"
        />
      </Head>
      <div className="px-4 pt-10 pb-16 sm:px-6 md:px-8">
        <h1 className="mb-4 text-left text-5xl font-extrabold text-gray-900">Changelog</h1>
        <div className="mb-2 space-y-5 text-left text-lg">
          <p>Check out whats new on Javaistic.</p>
        </div>
        <section className="text-gray-600 ">
          <div className="container mx-auto py-12">
            <div className="flex flex-col items-start rounded-xl  sm:items-center">
              <ol className="relative w-full border-l border-gray-200 dark:border-gray-700">
                {whatsNew.slice(0, 1).map((item) => (
                  <li key={item.title} className="mb-10 ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                      <CalendarIcon className="h-3 w-3 fill-current text-blue-600 dark:text-blue-400" />
                    </span>
                    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                      <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                        Latest
                      </span>
                    </h3>
                    <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Released on {item.date}
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <Link href={item.link}>
                      <a className="inline-flex items-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:text-blue-600 focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Read More <ArrowRightIcon className="ml-2 h-4 w-4 fill-current" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ol>
              <ol className="relative w-full border-l border-gray-200 dark:border-gray-700">
                {whatsNew.slice(1, whatsNew.length).map((item) => (
                  <li key={item.title} className="mb-10 ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                      <CalendarIcon className="h-3 w-3 fill-current text-blue-600 dark:text-blue-400" />
                    </span>
                    <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Released on {item.date}
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <Link href={item.link}>
                      <a className="inline-flex items-center rounded-md border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600 focus:z-10 focus:text-blue-600 focus:ring-2 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Read More <ArrowRightIcon className="ml-2 h-4 w-4 fill-current" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section>
          <h2 className="mt-10 mb-8 text-2xl font-extrabold tracking-tight text-gray-900">
            Get involved
          </h2>
          <Community />
        </section>
      </div>
    </>
  )
}

const whatsNew = [
  {
    title: 'Javaistic v1.7.0',
    date: 'Feb 05, 2022',
    description:
      'Added Dynamic Open Graph Images, JetBrains Mono font as mono-space font, Java switch statement docs, issue templates, PR Template, prettier & prettier-plugin-tailwindcss for code formatting and more. Updated Hello World docs, DocSearch config, Java Operators, Tip.js, Java if-else-statement docs, README, font.css, og image links, CODE OF CONDUCT, header, menu, search and other fixes',
    link: 'https://blog-javaistic.vercel.app/p/javaistic-v1.7.0',
  },
  {
    title: 'Javaistic v1.6.0',
    date: 'Dec 12, 2021',
    description:
      'Added Dark Mode, Java if else statement docs, Menu component in Homepage, CODE OF CONDUCT, and more. Updated Homepage, withSyntaxHighlighting.js, Java comments docs, Java if else statement docs, Sidebar Layout, Docs Index page, (Community , Menu, Header, Search) componenets,  and dependencies, and more.',
    link: 'https://blog-javaistic.vercel.app/p/javaistic-v1.6.0',
  },
  {
    title: 'Javaistic v1.5.0',
    date: 'Nov 27, 2021',
    description:
      'Added Java Expressions, Statements and Blocks docs, Java Comments docs & Homepage OpenSource component. Updated Print an Integer docs, Contents Layout, Footer and dependencies.',
    link: 'https://blog-javaistic.vercel.app/p/javaistic-v1.5.0',
  },
  {
    title: 'Javaistic v1.4.0',
    date: 'Oct 31, 2021',
    description: 'Minor dependency updates.',
    link: 'https://blog-javaistic.vercel.app/p/javaistic-v1.4.0',
  },
  {
    title: 'Javaistic v1.3.0',
    date: 'Sep 06, 2021',
    description:
      'Added Newsletter component. Updated gradients, contents layout, header, footer, and more.',
    link: 'https://blog-javaistic.vercel.app/p/javaistic-v1.3.0',
  },
  {
    title: 'Javaistic v1.2.0',
    date: 'Aug 21, 2021',
    description:
      'Added Java Data Types docs, Java Operators docs, Print an Integer program & meta description.',
    link: 'https://blog-javaistic.vercel.app/p/javaistic-v1.2.0',
  },
  {
    title: 'Javaistic v1.1.0',
    date: 'Aug 02, 2021',
    description:
      'Created Status page. Added Java JVM, JRE and JDK docs, Java Variables & Literals docs.',
    link: 'https://blog-javaistic.vercel.app/p/javaistic-v1.1.0',
  },
  {
    title: 'Javaistic v1.0.0',
    date: 'Jul 26, 2021',
    description: 'Initial Release of Javaistic',
    link: 'https://blog-javaistic.vercel.app/p/javaistic-v1.0.0',
  },
]

Changelog.layoutProps = {
  meta: {
    title: 'Changelog',
  },
  Layout: SidebarLayout,
}
