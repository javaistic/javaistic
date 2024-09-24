import { Community } from '@/components/Community'
import { ReactComponent as GuidesImage } from '@/img/guides.svg'
import { ReactComponent as PlayImage } from '@/img/play.svg'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { gradients } from '@/utils/gradients'
import Link from 'next/link'
import styles from './index.module.css'

export default function DocsLandingPage() {
  return (
    <div className="px-4 pt-10 pb-16 sm:px-6 xl:px-8">
      <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
        Getting started with Java
      </h1>
      <p className="mb-10 text-2xl tracking-tight">
        Learn Java the way that best matches your learning style.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
        <section className="flex">
          <div className="relative flex w-full overflow-hidden rounded-xl text-white shadow-lg">
            <div className={`flex w-full bg-gradient-to-br md:flex-col ${gradients.violet[0]}`}>
              <div className="relative z-10 flex flex-col items-start p-6 sm:max-w-sm sm:flex-none md:w-auto md:flex-auto xl:p-8">
                <h2 className="mb-2 text-xl font-semibold text-white text-shadow">Read the docs</h2>
                <p className="mb-4 font-medium text-violet-100 text-shadow dark:text-violet-100">
                  Learn how to get Java set up in your project.
                </p>
                <Link
                  href="/docs/installation"
                  className="mt-auto inline-flex rounded-lg bg-violet-800 bg-opacity-50 py-2 px-4 font-semibold transition-colors duration-200 hover:bg-opacity-75"
                >
                  Start learning
                </Link>
              </div>
              <div className={`${styles.image} relative hidden sm:block md:pl-6 xl:pl-8`}>
                <GuidesImage className="absolute top-6 left-6 overflow-visible md:static" />
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 hidden h-20 sm:block"
              style={{
                background: 'linear-gradient(to top, rgb(135, 94, 245), rgba(135, 94, 245, 0))',
              }}
            />
          </div>
        </section>
        <section className="flex">
          <div className="relative flex w-full overflow-hidden rounded-xl text-white shadow-lg">
            <div className={`flex w-full bg-gradient-to-br md:flex-col ${gradients.pink[0]}`}>
              <div className="relative z-10 flex flex-col items-start p-6 sm:max-w-sm sm:flex-none md:w-auto md:flex-auto xl:p-8">
                <h2 className="mb-2 text-xl font-semibold text-white text-shadow">Java Programs</h2>
                <p className="mb-4 font-medium text-rose-100 text-shadow dark:text-rose-100">
                  Start coding right now or go through Java code.
                </p>
                <Link
                  href="/programs"
                  className="mt-auto inline-flex rounded-lg bg-rose-900 bg-opacity-50 py-2 px-4 font-semibold transition-colors duration-200 hover:bg-opacity-75"
                >
                  Start coding
                </Link>
              </div>
              <div className={`${styles.image} relative hidden sm:block md:pl-6 xl:pl-8`}>
                <PlayImage className="absolute top-6 left-6 overflow-visible md:static" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 hidden h-20 bg-gradient-to-t from-rose-500 sm:block" />
          </div>
        </section>
      </div>
      <section>
        <h2 className="mt-16 mb-8 text-3xl font-extrabold tracking-tight text-gray-900">
          Get involved
        </h2>
        <Community />
      </section>
    </div>
  )
}

DocsLandingPage.layoutProps = {
  meta: {
    title: 'Documentation',
  },
  Layout: DocumentationLayout,
}
