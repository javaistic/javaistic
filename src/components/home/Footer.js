import { Logo } from '@/components/Logo'
import { Vercel } from '@/components/Vercel'
import { documentationNav } from '@/navs/documentation'
import { programsNav } from '@/navs/program'
import clsx from 'clsx'
import Link from 'next/link'
import styles from './Footer.module.css'

const footerNav = {
  'Getting started': {
    className: 'row-span-2',
    items: documentationNav['Getting started'],
  },
  Programming: {
    className: 'row-span-2',
    items: programsNav['Getting started'],
  },
  Javaistic: {
    className: 'row-span-2',
    items: [
      { title: 'Home', href: '/' },
      { title: 'Java Docs', href: '/docs' },
      { title: 'Java Programs', href: '/programs' },
      { title: 'About', href: '/' },
    ],
  },
  Others: {
    className: 'row-span-2',
    items: [
      { title: 'Brand', href: '/brand' },
      { title: 'Change Log', href: 'https://github.com/javaistic/javaistic/releases' },
      { title: 'Open Source', href: '/' },
      { title: 'Contact', href: 'mailto:javaistic@gmail.com' },
    ],
  },
  Community: {
    items: [
      { title: 'GitHub', href: 'https://github.com/javaistic/javaistic' },
      { title: 'Discord', href: '/discord' },
      { title: 'Twitter', href: 'https://twitter.com/javaistic' },
      { title: 'Blog', href: '/' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul
          className={`${styles.nav} text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10`}
        >
          {Object.keys(footerNav).map((section, i) => (
            <li key={section} className={clsx('space-y-5', footerNav[section].className)}>
              <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                {section}
              </h2>
              <ul className="space-y-4">
                {footerNav[section].items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <a className="hover:text-gray-900 transition-colors duration-200">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="pt-10 sm:pt-12">
          <Logo className="w-auto h-10" />
          <br className="mb-2" />
          <div className="flex">
            <a href="https://vercel.com/?utm_source=javaistic&utm_campaign=oss">
              <p className="text text-sm text-gray-500 flex">
                Powered by
                <Vercel className="w-auto h-5 ml-1 flex" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
