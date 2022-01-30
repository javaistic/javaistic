import clsx from 'clsx'

export function PageHeader({ title, description, badge = {}, border = true }) {
  if (!title && !description) return null

  return (
    <div
      className={clsx('pb-10', { 'mb-10 border-b border-gray-200 dark:border-gray-700': border })}
    >
      <div>
        <h1 className="inline-block text-3xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h1>
        {badge.key && badge.value && (
          <dl className="ml-3 mt-1.5 inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 align-top text-sm font-medium leading-4 tracking-tight text-cyan-900">
            <dt className="sr-only">{badge.key}</dt>
            <dd>{badge.value}</dd>
          </dl>
        )}
      </div>
      {description && <p className="mt-1 text-lg text-gray-500">{description}</p>}
    </div>
  )
}
