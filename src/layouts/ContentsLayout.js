import { ClassTable } from '@/components/ClassTable'
import { PageHeader } from '@/components/PageHeader'
import { usePrevNext } from '@/hooks/usePrevNext'
import { SidebarContext, SidebarLayout } from '@/layouts/SidebarLayout'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  createContext,
  Fragment,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export const ContentsContext = createContext()

function TableOfContents({ tableOfContents, currentSection }) {
  let sidebarContext = useContext(SidebarContext)
  let isMainNav = Boolean(sidebarContext)

  function closeNav() {
    if (isMainNav) {
      sidebarContext.setNavIsOpen(false)
    }
  }

  return (
    <>
      <h5 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white lg:text-xs">
        On this page
      </h5>
      <ul className="overflow-x-hidden font-medium text-gray-500 dark:text-gray-400">
        {tableOfContents.map((section) => {
          let sectionIsActive =
            currentSection === section.slug ||
            section.children.findIndex(({ slug }) => slug === currentSection) > -1

          return (
            <Fragment key={section.slug}>
              <li>
                <a
                  href={`#${section.slug}`}
                  onClick={closeNav}
                  className={clsx(
                    'block transform py-2 transition-colors duration-200 hover:text-gray-900 dark:hover:text-white',
                    {
                      'text-gray-900 dark:text-white': sectionIsActive,
                    }
                  )}
                >
                  {section.title}
                </a>
              </li>
              {section.children.map((subsection) => {
                let subsectionIsActive = currentSection === subsection.slug

                return (
                  <li
                    className={clsx({
                      'ml-4': isMainNav,
                      'ml-2': !isMainNav,
                    })}
                    key={subsection.slug}
                  >
                    <a
                      href={`#${subsection.slug}`}
                      onClick={closeNav}
                      className={clsx(
                        'block py-2 font-medium transition-colors duration-200 hover:text-gray-900 dark:hover:text-white',
                        {
                          'text-gray-900 dark:text-white': subsectionIsActive,
                        }
                      )}
                    >
                      {subsection.title}
                    </a>
                  </li>
                )
              })}
            </Fragment>
          )
        })}
      </ul>
    </>
  )
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.slug)
  let [headings, setHeadings] = useState([])

  const registerHeading = useCallback((id, top) => {
    setHeadings((headings) => [...headings.filter((h) => id !== h.id), { id, top }])
  }, [])

  const unregisterHeading = useCallback((id) => {
    setHeadings((headings) => headings.filter((h) => id !== h.id))
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0 || headings.length === 0) return
    function onScroll() {
      let y = window.pageYOffset
      let windowHeight = window.innerHeight
      let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top)
      if (y <= 0) {
        setCurrentSection(sortedHeadings[0].id)
        return
      }
      if (y + windowHeight >= document.body.scrollHeight) {
        setCurrentSection(sortedHeadings[sortedHeadings.length - 1].id)
        return
      }
      const middle = y + windowHeight / 2
      let current = sortedHeadings[0].id
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (middle >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll, true)
  }, [headings, tableOfContents])

  return { currentSection, registerHeading, unregisterHeading }
}

export function ContentsLayoutOuter({ children, layoutProps, ...props }) {
  const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(
    layoutProps.tableOfContents
  )

  return (
    <SidebarLayout
      sidebar={
        <div className="mb-8">
          <TableOfContents
            tableOfContents={layoutProps.tableOfContents}
            currentSection={currentSection}
          />
        </div>
      }
      {...props}
    >
      <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
        {children}
      </ContentsContext.Provider>
    </SidebarLayout>
  )
}

export function ContentsLayout({ children, meta, classes, tableOfContents }) {
  const router = useRouter()
  const toc = [
    ...(classes
      ? [{ title: 'Default class reference', slug: 'class-reference', children: [] }]
      : []),
    ...tableOfContents,
  ]

  const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(toc)
  let { prev, next } = usePrevNext()

  return (
    <div id={meta.containerId} className="flex w-full">
      <div className="min-w-0 flex-auto px-4 pt-10 pb-24 sm:px-6 lg:pb-16 xl:px-8">
        <PageHeader
          title={meta.title}
          description={meta.description}
          border={!classes && meta.headerSeparator !== false}
        />
        <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
          <div>
            {classes && (
              <ClassTable {...(isValidElement(classes) ? { custom: classes } : classes)} />
            )}
            {children}
          </div>
        </ContentsContext.Provider>

        {(prev || next) && (
          <div className="mt-16 flex font-medium leading-6">
            {prev && (
              <Link href={prev.href}>
                <a className="mr-8 flex items-center rounded-md border-2 border-blue-500 px-2 py-1 text-gray-500 transition-colors duration-200 hover:text-gray-900 hover:shadow-md dark:border-blue-400 dark:text-gray-400 dark:hover:text-white">
                  <ArrowLeftIcon className="mr-2 h-5 w-5" />
                  {prev.shortTitle || prev.title}
                </a>
              </Link>
            )}
            {next && (
              <Link href={next.href}>
                <a className="ml-auto flex items-center rounded-md border-2 border-blue-500 px-2 py-1 text-right text-gray-500 transition-colors duration-200 hover:text-gray-900 hover:shadow-md dark:border-blue-400 dark:text-gray-400 dark:hover:text-white">
                  {next.shortTitle || next.title}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </Link>
            )}
          </div>
        )}
        <div className="mt-12 border-t border-gray-200 pt-6 text-right dark:border-gray-700">
          <Link
            href={`https://github.com/javaistic/javaistic/edit/main/src/pages${router.pathname}.mdx`}
          >
            <a className="mt-10 text-sm hover:text-gray-900 dark:hover:text-white">
              Edit this page on GitHub
            </a>
          </Link>
        </div>
        <Link href={`https://vercel.com/?utm_source=javaistic&utm_campaign=oss`}>
          <a className="mr-1 text-sm">
            Powered by{' '}
            <span className="text text-base font-bold text-black dark:text-white">▲Vercel</span>
          </a>
        </Link>
      </div>
      <div className="mr-8 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
        <div className="sticky top-18 flex max-h-(screen-18) flex-col justify-between overflow-y-auto pt-10 pb-6">
          {toc.length > 0 && (
            <div className="mb-8">
              <TableOfContents tableOfContents={toc} currentSection={currentSection} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
