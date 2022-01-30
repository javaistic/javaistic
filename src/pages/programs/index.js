import { Community } from '@/components/Community'
import { ReactComponent as PlayImage } from '@/img/play.svg'
import { ProgramsLayout } from '@/layouts/ProgramsLayout'
import { gradients } from '@/utils/gradients'
import styles from './index.module.css'

export default function ProgramsLandingPage() {
  return (
    <div className="px-4 pt-10 pb-16 sm:px-6 xl:px-8">
      <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
        Getting started with Java Programs
      </h1>
      <p className="mb-10 text-2xl tracking-tight">
        Learn Java the way that best matches your learning style.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 xl:gap-8">
        <section className="flex">
          <div className="relative flex w-full overflow-hidden rounded-xl text-white shadow-lg">
            <div className={`flex w-full bg-gradient-to-br py-6 md:flex-row ${gradients.pink[0]}`}>
              <div className="relative z-10 flex flex-col items-start p-6 sm:max-w-sm sm:flex-none md:w-auto md:flex-auto xl:p-8">
                <h2 className="mb-2 text-xl font-semibold text-white text-shadow">Java Programs</h2>
                <p className="mb-4 font-medium text-rose-100 text-shadow dark:text-rose-50">
                  A bunch of Java programms for learning and practicing.
                </p>
                <a
                  href="/programs/introduction"
                  className="mt-auto inline-flex rounded-lg bg-rose-900 bg-opacity-50 py-2 px-4 font-semibold transition-colors duration-200 hover:bg-opacity-75"
                >
                  Start learning
                </a>
              </div>
              <div className={`${styles.image} relative hidden sm:block md:pl-16 xl:pl-20`}>
                <PlayImage className="absolute top-6 right-6 overflow-visible md:static" />
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

ProgramsLandingPage.layoutProps = {
  meta: {
    title: 'Programs',
  },
  Layout: ProgramsLayout,
}
