import Link from 'next/link'

export function Button({ children, ...props }) {
  return (
    <Link
      {...props}
      className="focus:outline-none inline-flex items-center rounded-lg bg-gray-800 px-6 py-3 text-lg font-medium text-white no-underline shadow hover:bg-gray-700 focus:bg-gray-700"
    >
      {children}
      <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4 fill-current text-gray-300">
        <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
      </svg>
    </Link>
  )
}
