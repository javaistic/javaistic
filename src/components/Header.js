import { Logo } from '@/components/Logo'
import { Search } from '@/components/Search'
import clsx from 'clsx'
import Link from 'next/link'
import Router from 'next/router'
import MenuButton from './home/Menu'
import ThemeChanger from './ThemeChanger'

export function Header({ navIsOpen, onNavToggle }) {
  return (
    <>
      <div className="sticky top-0 z-40 mx-auto flex w-full max-w-8xl flex-none border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 lg:z-50">
        <div className="flex flex-none items-center border-b border-gray-200 pl-4 dark:border-gray-700 sm:pl-6 lg:w-60 lg:border-b-0 xl:w-72 xl:pl-8">
          <Link
            href="/"
            className="w-10 overflow-hidden md:w-auto"
            onContextMenu={(e) => {
              e.preventDefault()
              Router.push('/brand')
            }}
          >
            <span className="sr-only">Javaistic home page</span>
            <Logo className="h-10 w-auto text-black dark:text-white" />
          </Link>
        </div>
        <div className="flex h-18 flex-auto items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
          <Search />
          <div className="flex flex-shrink-0 items-center justify-end space-x-4 pl-6 sm:space-x-6 lg:w-64">
            <ThemeChanger />
            <MenuButton />
            <a
              href="https://github.com/javaistic/javaistic"
              className="hidden text-gray-400 transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-200 sm:flex"
            >
              <span className="sr-only">Javaistic on GitHub</span>
              <svg className="h-6 w-6" viewBox="0 0 16 16" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="fixed bottom-4 right-4 z-50 block h-16 w-16 rounded-full bg-gray-900 text-white dark:bg-gray-700 lg:hidden"
        onClick={() => onNavToggle(!navIsOpen)}
      >
        <span className="sr-only">Open site navigation</span>
        <svg
          width="24"
          height="24"
          fill="none"
          className={clsx(
            'absolute top-1/2 left-1/2 -mt-3 -ml-3 transform transition duration-300',
            {
              'scale-80 opacity-0': navIsOpen,
            }
          )}
        >
          <path
            d="M4 8h16M4 16h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="24"
          height="24"
          fill="none"
          className={clsx(
            'absolute top-1/2 left-1/2 -mt-3 -ml-3 transform transition duration-300',
            {
              'scale-80 opacity-0': !navIsOpen,
            }
          )}
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  )
}
