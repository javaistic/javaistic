import { IndianFlag } from '@/components/Logos'

export default function MadeInBadge() {
  return (
    <div className="title-font flex items-center justify-center pl-6 font-medium text-gray-900 md:justify-start">
      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300">
        Made with
        <div className="heart mx-2"></div>
        in
        <p className="sr-only">India</p>
        <IndianFlag className="ml-2 h-4 w-auto rounded-sm" />
      </div>
    </div>
  )
}
