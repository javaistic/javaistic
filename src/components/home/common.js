import NextLink from 'next/link'

export function IconContainer({ as: Component = 'div', color, className = '', ...props }) {
  return (
    <Component
      className={`mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${className}`}
      {...props}
    />
  )
}

export function Caption({ as: Component = 'p', className = '', ...props }) {
  return (
    <Component
      className={`font-semibold uppercase tracking-wide sm:text-lg sm:leading-snug ${className}`}
      {...props}
    />
  )
}

export function BigText({ as: Component = 'p', className = '', ...props }) {
  return (
    <Component
      className={`text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl lg:text-6xl ${className}`}
      {...props}
    />
  )
}

export function Paragraph({ as: Component = 'p', className = '', ...props }) {
  return (
    <Component
      className={`max-w-4xl space-y-6 text-lg font-medium sm:text-2xl sm:leading-10 ${className}`}
      {...props}
    />
  )
}

export function Link({ className = '', href, ...props }) {
  return (
    <NextLink
      href={href}
      className={`focus:outline-none inline-flex rounded-md text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-current focus:ring-offset-2 sm:text-2xl ${className}`}
      {...props}
    ></NextLink>
  )
}

export function InlineCode({ className = '', ...props }) {
  return (
    <code
      className={`bg-transparent font-mono font-bold text-gray-900 dark:text-gray-50 ${className}`}
      {...props}
    />
  )
}

export { Widont } from '@/components/Widont'
