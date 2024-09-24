import { Logo } from '@/components/Logo'
import { GitHub, Twitter, Vercel } from '@/components/Logos'
import { documentationNav } from '@/navs/documentation'
import { programsNav } from '@/navs/program'
import clsx from 'clsx'
import Link from 'next/link'
import styles from './Footer.module.css'
import MadeInBadge from './MadeInBadge'

const footerNav = {
  'Getting started': {
    className: 'row-span-2',
    items: documentationNav['Getting started'],
  },
  Programming: {
    className: 'row-span-2',
    items: programsNav['Getting started'],
  },
  Product: {
    className: 'row-span-2',
    items: [
      { title: 'Home', href: '/' },
      { title: 'Java Docs', href: '/docs' },
      { title: 'Java Programs', href: '/programs' },
      { title: 'About', href: '/' },
      { title: 'Contact', href: 'mailto:javaistic@gmail.com' },
    ],
  },
  Others: {
    className: 'row-span-2',
    items: [
      { title: 'Brand', href: '/brand' },
      { title: 'Sponsors', href: '/sponsors' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Open Source', href: '/' },
    ],
  },
  Community: {
    items: [
      { title: 'GitHub', href: 'https://github.com/javaistic/javaistic' },
      { title: 'Discord', href: '/discord' },
      { title: 'Twitter', href: 'https://twitter.com/javaistic' },
      { title: 'Blog', href: '/blog' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-10 dark:bg-gray-800 sm:pt-20 sm:pb-10 md:pt-24 xl:pt-28">
      <div className="mx-auto max-w-screen-lg divide-y divide-gray-200 px-4 dark:divide-gray-600 sm:px-6 md:px-8 xl:max-w-screen-xl">
        <ul
          className={`${styles.nav} grid grid-cols-2 gap-4 gap-y-10 px-2 pb-14 text-sm font-medium sm:grid-cols-2 sm:pb-20 md:grid-cols-3 lg:grid-cols-5`}
        >
          {Object.keys(footerNav).map((section, i) => (
            <li key={section} className={clsx('space-y-5', footerNav[section].className)}>
              <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                {section}
              </h2>
              <ul className="space-y-4">
                {footerNav[section].items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 transition duration-200 ease-in-out hover:font-semibold hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="container mx-auto flex flex-col items-center px-5 py-8 pb-8 sm:flex-row">
          <a
            href="#"
            className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
          >
            <Logo className="h-10 w-auto text-black dark:text-white" />
          </a>
          <div className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-r-2 sm:border-gray-200 sm:py-2 sm:pl-4 sm:pr-4 sm:dark:border-gray-600">
            <div className="flex">
              <a href="https://twitter.com/uiuxarghya" target="_blank" rel="noopener noreferrer">
                <p className="text flex text-base text-gray-500 dark:text-gray-200">
                  by&nbsp;
                  <span className="text-base font-bold text-gray-800 dark:text-white">
                    @uiuxarghya
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500 sm:mt-0 sm:border-gray-200 sm:py-2 sm:pl-4 sm:dark:border-gray-600">
            <div className="flex">
              <a
                href="https://vercel.com/?utm_source=javaistic&utm_campaign=oss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text flex text-sm text-gray-500 dark:text-gray-200">
                  Powered by
                  <Vercel className="ml-1 flex h-5 w-auto text-black dark:text-white" />
                </p>
              </a>
            </div>
          </div>

          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://github.com/javaistic/javaistic"
              className="ml-3 text-gray-500 transition duration-200 ease-in-out hover:text-black dark:hover:text-white"
            >
              <GitHub className="h-8 w-8 p-1 sm:p-1 lg:p-0" />
            </a>
            <a
              href="https://twitter.com/javaistic"
              className="ml-3 text-gray-500 hover:text-blue-500"
            >
              <Twitter className="h-8 w-8 p-1 sm:p-1 lg:p-0" />
            </a>
          </span>
        </div>
        <div className="container mx-auto mb-0 flex flex-col items-center py-2 sm:flex-row">
          <div className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <p className="mt-2 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Javaistic. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/privacy"
              className="title-font flex items-center justify-center pl-6 font-medium text-gray-900 md:justify-start"
            >
              <p className="mt-2 text-sm text-gray-500">Privacy Policy</p>
            </a>
            <Link
              href="/terms"
              className="title-font flex items-center justify-center pl-6 font-medium md:justify-start"
            >
              <p className="mt-2 text-sm text-gray-500 hover:text-black dark:hover:text-white">
                Terms &amp; Conditions
              </p>
            </Link>
            <Link
              href="/status"
              className="title-font flex items-center justify-center pl-6 font-medium text-gray-900 md:justify-start"
            >
              <p className="mt-2 text-sm text-gray-500 hover:text-black dark:hover:text-white">
                Status
              </p>
            </Link>
          </div>
          <div className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <MadeInBadge />
          </div>
        </div>
      </div>
    </footer>
  )
}
