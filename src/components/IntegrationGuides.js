import { ReactComponent as NextJsLogo } from '@/img/guides/nextjs.svg'
import Link from 'next/link'

const guides = [
  {
    name: 'Next.js',
    logo: NextJsLogo,
    link: '/docs/guides/nextjs',
  },
]

export function IntegrationGuides() {
  return (
    <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
      {guides.map((guide) => {
        const Logo = guide.logo
        return (
          <Link
            href={guide.link}
            key={guide.name}
            className="flex flex-col items-center rounded-xl py-4 shadow-sm ring-1 ring-black ring-opacity-5"
          >
            <Logo className="h-12 w-auto" />
            <div className="mt-3 text-sm font-semibold text-gray-900 sm:mt-2">{guide.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
