import { PageHeader } from '@/components/PageHeader'
import { useIsHome } from '@/hooks/useIsHome'
import clsx from 'clsx'

export function BasicLayout({ children, meta, classes, tableOfContents }) {
  let isHome = useIsHome()

  return (
    <div
      id={meta.containerId}
      className={clsx('w-full pb-16', { 'pt-12': isHome, 'pt-24 lg:pt-28': !isHome })}
    >
      <PageHeader
        title={meta.title}
        description={meta.description}
        border={meta.headerSeparator !== false}
      />
      <div className="flex">
        <div className="markdown mx-auto w-full max-w-3xl px-6 lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4 xl:px-12">
          {children}
        </div>
      </div>
    </div>
  )
}
