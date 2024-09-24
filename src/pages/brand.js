import { Community } from '@/components/Community'
import { ReactComponent as JavaisticLogo } from '@/img/resources/javaistic-logo.svg'
import { ReactComponent as JavaisticAltLogo } from '@/img/resources/javaistic-logo-alt.svg'
import { ReactComponent as JavaisticBlackLogo } from '@/img/resources/javaistic-logo-black.svg'
import { ReactComponent as JavaisticWhiteLogo } from '@/img/resources/javaistic-logo-white.svg'

import { SidebarLayout } from '@/layouts/SidebarLayout'
import Link from 'next/link'

function Logo({ title, component: Component }) {
  return (
    <div className="w-60 max-w-full">
      <div className="relative" style={{ paddingTop: `${(60 / 240) * 100}%` }}>
        <span className="sr-only">{title}</span>
        <Component className="absolute inset-0 h-full w-full" />
      </div>
    </div>
  )
}

export default function Brand() {
  return (
    <div className="px-4 pt-10 pb-16 sm:px-6 md:px-8">
      <h1 className="mb-4 text-5xl font-extrabold text-gray-900">Brand</h1>
      <div className="mb-4 max-w-2xl">
        <div className="mb-5 space-y-5 text-lg">
          <p>Javaistic brand assets and usage guidelines.</p>{' '}
        </div>
      </div>
      <h1 className="text-2xl font-extrabold text-gray-900">Logos</h1>
      <div className="my-8 grid gap-8 sm:my-12 md:grid-cols-2 md:gap-6 xl:gap-8">
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Main Logo<span className="sr-only">Javaistic Main Logo</span>
          </h2>
          <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gray-200 p-6 dark:bg-gray-50 sm:h-56 xl:h-64">
            <Logo title="Headless UI" component={JavaisticLogo} />
          </div>

          <div className="mt-4 mb-4 flex flex-wrap space-y-2 text-center sm:space-y-0 sm:space-x-4 ">
            <Link
              href="/"
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-blue-700 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
            >
              SVG
            </Link>
            <Link
              href="/"
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:hover:bg-gray-700 sm:w-auto"
            >
              PNG
            </Link>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Alternate Logo<span className="sr-only">Javaistic Alternate Logo</span>
          </h2>
          <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gray-900 p-6 dark:bg-gray-800 sm:h-56 xl:h-64">
            <Logo title="Headless UI" component={JavaisticAltLogo} />
          </div>

          <div className="mt-4 mb-4 flex flex-wrap space-y-2 text-center sm:space-y-0 sm:space-x-4 ">
            <Link
              href="/"
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-blue-700 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
            >
              SVG
            </Link>
            <Link
              href="/"
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:hover:bg-gray-700 sm:w-auto"
            >
              PNG
            </Link>
          </div>
        </section>
      </div>
      <h1 className="text-2xl font-extrabold text-gray-900">Monochrome Logos</h1>
      <div className="my-8 grid gap-8 sm:my-12 md:grid-cols-2 md:gap-6 xl:gap-8">
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Logo Black<span className="sr-only">: Javaistic Black Logo</span>
          </h2>
          <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gray-200 p-6 dark:bg-gray-50 sm:h-56 xl:h-64">
            <Logo title="Headless UI" component={JavaisticBlackLogo} />
          </div>

          <div className="mt-4 mb-4 flex flex-wrap space-y-2 text-center sm:space-y-0 sm:space-x-4 ">
            <Link
              href="/"
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-blue-700 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
            >
              SVG
            </Link>
            <Link
              href="/"
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:hover:bg-gray-700 sm:w-auto"
            >
              PNG
            </Link>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Logo White<span className="sr-only">: Javaistic White Logo</span>
          </h2>
          <Link
            href="/"
            className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gray-900 p-6 dark:bg-gray-800 sm:h-56 xl:h-64"
          >
            <Logo title="Headless UI" component={JavaisticWhiteLogo} />
          </Link>

          <div className="mt-4 mb-4 flex flex-wrap space-y-2 text-center sm:space-y-0 sm:space-x-4 ">
            <Link
              href="/"
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-blue-700 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
            >
              SVG
            </Link>
            <Link
              href="/"
              className="focus:outline-none w-full flex-none rounded-lg border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white shadow-md transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:hover:bg-gray-700 sm:w-auto"
            >
              PNG
            </Link>
          </div>
        </section>
      </div>
      <section>
        <h2 className="mt-10 mb-8 text-2xl font-extrabold tracking-tight text-gray-900">
          Get involved
        </h2>
        <Community />
      </section>
    </div>
  )
}

Brand.layoutProps = {
  meta: {
    title: 'Brand',
  },
  Layout: SidebarLayout,
}
