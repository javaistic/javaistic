// ./components/ThemeChanger.js
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function ThemeChanger() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'light') {
      return (
        <MoonIcon
          className="h-6 w-6"
          color="#111827"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    } else {
      return (
        <SunIcon
          className="h-6 w-6"
          color="white"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    }
  }

  return (
    <div className="flex items-center justify-center rounded-md border-2 border-gray-300 bg-gray-50 p-1.5 dark:border-gray-500 dark:bg-gray-800 ">
      {renderThemeChanger()}
    </div>
  )
}
