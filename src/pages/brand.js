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
        <Component className="absolute inset-0 w-full h-full" />
      </div>
    </div>
  )
}

export default function Brand() {
  return (
    <div className="px-4 sm:px-6 md:px-8 pt-10 pb-16">
      <h1 className="text-4xl text-gray-900 font-extrabold mb-4">Brand</h1>
      <div className="max-w-2xl mb-4">
        <div className="text-lg mb-5 space-y-5">
          <p>Javaistic brand assets and usage guidelines.</p>{' '}
        </div>
      </div>
      <h1 className="text-2xl text-gray-900 font-extrabold">Logos</h1>
      <div className="grid md:grid-cols-2 gap-8 md:gap-6 xl:gap-8 my-8 sm:my-12">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Main Logo<span className="sr-only">: Javaistic Main Logo</span>
          </h2>
          <div className="h-40 sm:h-56 xl:h-64 rounded-2xl bg-gray-200 mb-6 flex items-center justify-center p-6">
            <Logo title="Headless UI" component={JavaisticLogo} />
          </div>

          <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4 text-center mt-4 mb-4 ">
            <Link href="/">
              <a className="w-full sm:w-auto flex-none bg-blue-700 hover:bg-blue-600 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200">
                SVG
              </a>
            </Link>
            <Link href="/">
              <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                PNG
              </a>
            </Link>
          </div>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Alternate Logo<span className="sr-only">: Javaistic Alternate Logo</span>
          </h2>
          <div className="h-40 sm:h-56 xl:h-64 rounded-2xl bg-gray-900 mb-6 flex items-center justify-center p-6">
            <Logo title="Headless UI" component={JavaisticAltLogo} />
          </div>

          <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4 text-center mt-4 mb-4 ">
            <Link href="/">
              <a className="w-full sm:w-auto flex-none bg-blue-700 hover:bg-blue-600 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200">
                SVG
              </a>
            </Link>
            <Link href="/">
              <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                PNG
              </a>
            </Link>
          </div>
        </section>
      </div>
      <h1 className="text-2xl text-gray-900 font-extrabold">Monochrome Logos</h1>
      <div className="grid md:grid-cols-2 gap-8 md:gap-6 xl:gap-8 my-8 sm:my-12">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Logo Black<span className="sr-only">: Javaistic Black Logo</span>
          </h2>
          <div className="h-40 sm:h-56 xl:h-64 rounded-2xl bg-gray-200 mb-6 flex items-center justify-center p-6">
            <Logo title="Headless UI" component={JavaisticBlackLogo} />
          </div>

          <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4 text-center mt-4 mb-4 ">
            <Link href="/">
              <a className="w-full sm:w-auto flex-none bg-blue-700 hover:bg-blue-600 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200">
                SVG
              </a>
            </Link>
            <Link href="/">
              <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                PNG
              </a>
            </Link>
          </div>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Logo White<span className="sr-only">: Javaistic White Logo</span>
          </h2>
          <Link href="/">
            <a
              className="h-40 sm:h-56 xl:h-64 rounded-2xl bg-gray-900 mb-6 flex items-center justify-center p-6"
            >
              <Logo title="Headless UI" component={JavaisticWhiteLogo} />
            </a>
          </Link>

          <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4 text-center mt-4 mb-4 ">
            <Link href="/">
              <a className="w-full sm:w-auto flex-none bg-blue-700 hover:bg-blue-600 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200">
                SVG
              </a>
            </Link>
            <Link href="/">
              <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg shadow-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                PNG
              </a>
            </Link>
          </div>
        </section>
      </div>
      <section>
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">
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
