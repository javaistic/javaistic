import { useTop } from '@/hooks/useTop'
import { ContentsContext } from '@/layouts/ContentsLayout'
import clsx from 'clsx'
import { useContext, useEffect, useRef } from 'react'

export function Heading({
  level,
  id,
  children,
  number,
  badge,
  className = '',
  hidden = false,
  toc = false,
  style = {},
  ...props
}) {
  let Component = `h${level}`
  const { registerHeading, unregisterHeading } = useContext(ContentsContext)

  let ref = useRef()
  let top = useTop(ref)

  useEffect(() => {
    if (toc && typeof top !== 'undefined') {
      registerHeading(id, top)
    }
    return () => {
      unregisterHeading(id)
    }
  }, [toc, top, id, registerHeading, unregisterHeading])

  return (
    <Component
      className={clsx('group flex whitespace-pre-wrap', className)}
      id={id}
      ref={ref}
      style={{ ...(hidden ? { marginBottom: 0 } : {}), ...style }}
      {...props}
    >
      {!hidden && (
        // eslint-disable-next-line

        <a
          href={`#${id}`}
          className="absolute -ml-7 mt-1 flex items-center border-0 opacity-0 group-hover:opacity-100"
          aria-label="Anchor"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md text-gray-400 shadow-sm ring-1 ring-gray-500 hover:text-gray-700 hover:shadow hover:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0">
            <svg width="12" height="12" fill="none" aria-hidden="true">
              <path
                d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </a>
      )}
      {number && (
        <span className="mr-3 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cyan-100 text-xl text-blue-700">
          {number}
        </span>
      )}
      <span className={hidden ? 'sr-only' : undefined}>{children}</span>
      {badge && (
        <span className="ml-3 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium leading-4 text-green-900">
          {badge}
        </span>
      )}
    </Component>
  )
}
