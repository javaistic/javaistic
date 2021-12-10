import { Logo } from '@/components/Logo'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { gradients } from '@/utils/gradients'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { createContext, forwardRef, useRef } from 'react'

export const SidebarContext = createContext()

const NavItem = forwardRef(({ href, children, isActive, isPublished, fallbackHref }, ref) => {
  return (
    <li ref={ref}>
      <Link href={isPublished ? href : fallbackHref}>
        <a
          className={clsx('px-3 py-2 transition-colors duration-200 relative block', {
            'text-blue-700 dark:text-blue-400': isActive,
            'hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white': !isActive && isPublished,
            'text-gray-400 dark:text-white': !isActive && !isPublished,
          })}
        >
          <span
            className={clsx('rounded-md absolute inset-0 bg-blue-50 dark:bg-gray-800', {
              'opacity-0': !isActive,
            })}
          />
          <span className="relative">{children}</span>
        </a>
      </Link>
    </li>
  )
})

function Nav({ nav, children, fallbackHref }) {
  const router = useRouter()
  const activeItemRef = useRef()
  const scrollRef = useRef()

  useIsomorphicLayoutEffect(() => {
    if (activeItemRef.current) {
      const scrollRect = scrollRef.current.getBoundingClientRect()
      const activeItemRect = activeItemRef.current.getBoundingClientRect()

      const top = activeItemRef.current.offsetTop
      const bottom = top - scrollRect.height + activeItemRect.height

      if (scrollRef.current.scrollTop > top || scrollRef.current.scrollTop < bottom) {
        scrollRef.current.scrollTop =
          activeItemRef.current.offsetTop - scrollRect.height / 2 + activeItemRect.height / 2
      }
    }
  }, [router.pathname])

  return (
    <nav
      id="nav"
      ref={scrollRef}
      className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-6 lg:pb-14 sticky?lg:h-(screen-18) bg-white dark:bg-gray-900"
    >
      <div className="relative flex mb-8 px-3 lg:hidden text-black dark:text-white">
        <Logo className="w-auto h-10" />
      </div>
      <ul>
        <TopLevelNav />
        {children}
        {nav &&
          Object.keys(nav)
            .map((category) => {
              let publishedItems = nav[category].filter((item) => item.published !== false)
              if (publishedItems.length === 0 && !fallbackHref) return null
              return (
                <li key={category} className="mt-8">
                  <h5
                    className={clsx(
                      'px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs',
                      {
                        'text-gray-900': publishedItems.length > 0,
                        'text-gray-400': publishedItems.length === 0,
                      }
                    )}
                  >
                    {category}
                  </h5>
                  <ul>
                    {(fallbackHref ? nav[category] : publishedItems).map((item, i) => (
                      <NavItem
                        key={i}
                        href={item.href}
                        isActive={item.href === router.pathname}
                        ref={item.href === router.pathname ? activeItemRef : undefined}
                        isPublished={item.published !== false}
                        fallbackHref={fallbackHref}
                      >
                        {item.shortTitle || item.title}
                      </NavItem>
                    ))}
                  </ul>
                </li>
              )
            })
            .filter(Boolean)}
      </ul>
    </nav>
  )
}

const TopLevelAnchor = forwardRef(
  ({ children, href, className, icon, isActive, onClick, color }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          href={href}
          onClick={onClick}
          className={clsx(
            'flex items-center px-3 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 transition-colors duration-200',
            className,
            {
              'text-gray-900': isActive,
              'dark:text-gray-50': isActive,
            }
          )}
        >
          <div className={`mr-3 rounded-md bg-gradient-to-br ${gradients[color][0]}`}>
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              {icon}
            </svg>
          </div>
          {children}
        </a>
      </li>
    )
  }
)

function TopLevelLink({ href, as, ...props }) {
  if (/^https?:\/\//.test(href)) {
    return <TopLevelAnchor href={href} {...props} />
  }

  return (
    <Link href={href} as={as} passHref>
      <TopLevelAnchor {...props} />
    </Link>
  )
}

function TopLevelNav() {
  let { pathname } = useRouter()
  let current = pathname.split('/')[1]

  return (
    <>
      <TopLevelLink
        href="/docs"
        isActive={current === '' || current === 'docs'}
        color="violet"
        className="mb-4"
        icon={
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 6C10.0929 6 11.1175 6.29218 12 6.80269V16.8027C11.1175 16.2922 10.0929 16 9 16C7.90714 16 6.88252 16.2922 6 16.8027V6.80269C6.88252 6.29218 7.90714 6 9 6Z"
              fill="#FFF1F2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 6C16.0929 6 17.1175 6.29218 18 6.80269V16.8027C17.1175 16.2922 16.0929 16 15 16C13.9071 16 12.8825 16.2922 12 16.8027V6.80269C12.8825 6.29218 13.9071 6 15 6Z"
              fill="#DDD6FE"
            />
          </>
        }
      >
        Documentation
      </TopLevelLink>
      <TopLevelLink
        href="/programs"
        isActive={current === 'programs'}
        color="pink"
        className="mb-4"
        icon={
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z"
              fill="#FECDD3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z"
              fill="#FDF4FF"
            />
          </>
        }
      >
        Programs
      </TopLevelLink>
      <TopLevelLink
        href="https://javaistic-changelog.vercel.app/"
        isActive={current === '' || current === 'changelog'}
        color="amber"
        className="mb-4"
        icon={
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 12.7879 6.15519 13.5681 6.45672 14.2961C6.75825 15.0241 7.20021 15.6855 7.75736 16.2426C8.31451 16.7998 8.97595 17.2417 9.7039 17.5433C10.4319 17.8448 11.2121 18 12 18C12.7879 18 13.5681 17.8448 14.2961 17.5433C15.0241 17.2417 15.6855 16.7998 16.2426 16.2426C16.7998 15.6855 17.2417 15.0241 17.5433 14.2961C17.8448 13.5681 18 12.7879 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6ZM6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 13.0506 19.7931 14.0909 19.391 15.0615C18.989 16.0321 18.3997 16.914 17.6569 17.6569C16.914 18.3997 16.0321 18.989 15.0615 19.391C14.0909 19.7931 13.0506 20 12 20C10.9494 20 9.90914 19.7931 8.93853 19.391C7.96793 18.989 7.08601 18.3997 6.34315 17.6569C5.60028 16.914 5.011 16.0321 4.60896 15.0615C4.20693 14.0909 4 13.0506 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315Z"
              fill="#FFEDAB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 8C12.5523 8 13 8.44772 13 9V11.9585L15.138 13.73C15.5633 14.0823 15.6224 14.7127 15.27 15.138C14.9177 15.5633 14.2873 15.6224 13.862 15.27L11.362 13.1986C11.1327 13.0086 11 12.7263 11 12.4286V9C11 8.44772 11.4477 8 12 8Z"
              fill="#FFF"
            />
          </>
        }
      >
        Changelog
      </TopLevelLink>
      <TopLevelLink
        href="/"
        isActive={current === '' || current === 'news'}
        color="teal"
        className="mb-4"
        icon={
          <>
            <path
              d="M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z"
              fill="#6EE7B7"
            />
            <path
              d="M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z"
              fill="#ECFDF5"
            />
            <path fill="#A7F3D0" d="M8 8h5v4H8zM8 14h5v2H8z" />
          </>
        }
      >
        Practice
      </TopLevelLink>
      <TopLevelLink
        href="/brand"
        isActive={current === 'brand'}
        color="blue"
        className="mb-4"
        icon={
          <>
            <path d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z" fill="#93C5FD" />
            <path
              d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
              fill="#BFDBFE"
            />
            <path d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z" fill="#EFF6FF" />
            <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA" />
          </>
        }
      >
        Brand
      </TopLevelLink>
    </>
  )
}

export function SidebarLayout({ children, navIsOpen, setNavIsOpen, nav, sidebar, fallbackHref }) {
  return (
    <SidebarContext.Provider value={{ nav, navIsOpen, setNavIsOpen }}>
      <div className="w-full max-w-8xl mx-auto">
        <div className="lg:flex">
          <div
            id="sidebar"
            onClick={() => setNavIsOpen(false)}
            className={clsx(
              'fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block',
              {
                hidden: !navIsOpen,
              }
            )}
          >
            <div
              id="navWrapper"
              onClick={(e) => e.stopPropagation()}
              className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white dark:bg-gray-900 mr-24 lg:mr-0"
            >
              <Nav nav={nav} fallbackHref={fallbackHref}>
                {sidebar}
              </Nav>
            </div>
          </div>
          <div
            id="content-wrapper"
            className={clsx(
              'min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible bg-white dark:bg-gray-900',
              {
                'overflow-hidden max-h-screen fixed': navIsOpen,
              }
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}
