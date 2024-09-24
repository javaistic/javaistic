import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import SearchIcon from '@/components/icons/SearchIcon'

const ACTION_KEY_DEFAULT = ['Ctrl ', 'Control']
const ACTION_KEY_APPLE = ['⌘', 'Command']

function Hit({ hit, children }) {
  return <Link href={hit.url}>{children}</Link>
}

export function Search() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const searchButtonRef = useRef()
  const [initialQuery, setInitialQuery] = useState(null)
  const [browserDetected, setBrowserDetected] = useState(false)
  const [actionKey, setActionKey] = useState(ACTION_KEY_DEFAULT)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback(
    (e) => {
      setIsOpen(true)
      setInitialQuery(e.key)
    },
    [setIsOpen, setInitialQuery]
  )

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  })

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        setActionKey(ACTION_KEY_APPLE)
      } else {
        setActionKey(ACTION_KEY_DEFAULT)
      }
      setBrowserDetected(true)
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://29OTE3ZL5A-dsn.algolia.net" crossOrigin="true" />
      </Head>
      <button
        type="button"
        ref={searchButtonRef}
        onClick={onOpen}
        className="group flex w-full items-center justify-between rounded-full border-2 border-gray-200 py-1.5 px-1.5 font-medium leading-6 text-gray-500 shadow-inner hover:text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:rounded-md sm:px-4 lg:px-4"
      >
        <div className="flex items-center justify-start">
          <SearchIcon className="h-6 w-6 text-blue-400 transition-colors duration-200 group-hover:text-blue-500" />
          <span className={router.pathname === '/' ? 'sm:ml-2' : 'ml-2'}>
            <span className="sm:hidden lg:hidden">{router.pathname === '/' ? '' : 'Search'}</span>
            <span className="hidden sm:inline">Quick search for anything</span>
          </span>
        </div>

        <span
          style={{ opacity: browserDetected ? '1' : '0' }}
          className="hidden  justify-end rounded-md border border-gray-400 py-0.5 px-1.5 text-sm leading-5 text-gray-500 sm:block"
        >
          <span className="sr-only">Press </span>
          <kbd className="font-sans">
            <abbr title={actionKey[1]} className="no-underline">
              {actionKey[0]}
            </abbr>
          </kbd>
          <span className="sr-only"> and </span>
          <kbd className="font-sans">K</kbd>
          <span className="sr-only"> to search</span>
        </span>
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            onClose={onClose}
            indexName="javaistic"
            apiKey="687a2c3fd1d675d08c5e29869d8c2aca"
            appId="29OTE3ZL5A"
            navigator={{
              navigate({ suggestionUrl }) {
                setIsOpen(false)
                router.push(suggestionUrl)
              },
            }}
            hitComponent={Hit}
            hitsPerPage={10}
            transformItems={(items) => {
              return items.map((item) => {
                // We transform the absolute URL into a relative URL to
                // leverage Next's preloading.
                const a = document.createElement('a')
                a.href = item.url

                const hash = a.hash === '#content-wrapper' ? '' : a.hash

                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                }
              })
            }}
          />,
          document.body
        )}
    </>
  )
}
