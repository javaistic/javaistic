export function TipGood({ children }) {
  return (
    <p className="flex items-start mt-8 mb-4 space-x-2">
      <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
        <circle cx="12" cy="12" r="12" fill="#A7F3D0" />
        <path d="M18 8l-8 8-4-4" stroke="#047857" strokeWidth="2" />
      </svg>
      <strong className="flex-1 text-base leading-7 font-semibold text-gray-900">{children}</strong>
    </p>
  )
}

export function TipBad({ children }) {
  return (
    <p className="flex items-start mt-8 mb-4 space-x-2">
      <svg className="w-6 h-6 flex-none mt-0.5" fill="none">
        <circle cx="12" cy="12" r="12" fill="#FECDD3" />
        <path d="M8 8l8 8M16 8l-8 8" stroke="#B91C1C" strokeWidth="2" />
      </svg>
      <strong className="flex-1 text-base leading-7 font-semibold text-gray-900">{children}</strong>
    </p>
  )
}

export function TipCompat({ children }) {
  return (
    <div className="text-sm bg-sky-100 text-sky-800 font-medium px-4 py-3 mb-4 rounded-xl">
      <div className="flex items-start space-x-3">
        <svg width="20" height="20" className="text-sky-500" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.998 2a1 1 0 00-.707 1.707l.707.707v3.758a1 1 0 01-.293.707l-4 4C.815 14.769 2.154 18 4.826 18H15.17c2.672 0 4.01-3.231 2.12-5.121l-4-4a1 1 0 01-.292-.707V4.414l.707-.707A1 1 0 0012.998 2h-6zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.992 1.992 0 00-.114-.035l1.063-1.063a3 3 0 00.879-2.121z"
          />
        </svg>
        <p className="flex-1">{children}</p>
      </div>
    </div>
  )
}

export function TipInfo({ children }) {
  return (
    <div className="text-sm leading-6 bg-blue-50 dark:bg-blue-600 text-blue-800 px-6 py-4 mb-8 rounded-lg">
      <div className="flex items-start space-x-3">
        <svg width="40" height="40" className="text-sky-500" fill="none">
          <path
            d="M7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4H23.757C24.1511 3.99995 24.5414 4.07756 24.9055 4.22838C25.2696 4.3792 25.6004 4.60029 25.879 4.879L32.12 11.12C32.399 11.3987 32.6204 11.7296 32.7714 12.0939C32.9223 12.4582 33 12.8487 33 13.243V33C33 33.7956 32.6839 34.5587 32.1213 35.1213C31.5587 35.6839 30.7956 36 30 36H10C9.20435 36 8.44129 35.6839 7.87868 35.1213C7.31607 34.5587 7 33.7956 7 33V7Z"
            fill="#93C5FD"
          />
          <path
            d="M9 7C9 6.73478 9.10536 6.48043 9.29289 6.29289C9.48043 6.10536 9.73478 6 10 6H23C23.2652 6 23.5196 6.10536 23.7071 6.29289C23.8946 6.48043 24 6.73478 24 7V12C24 12.2652 24.1054 12.5196 24.2929 12.7071C24.4804 12.8946 24.7348 13 25 13H30C30.2652 13 30.5196 13.1054 30.7071 13.2929C30.8946 13.4804 31 13.7348 31 14V33C31 33.2652 30.8946 33.5196 30.7071 33.7071C30.5196 33.8946 30.2652 34 30 34H10C9.73478 34 9.48043 33.8946 9.29289 33.7071C9.10536 33.5196 9 33.2652 9 33V7Z"
            fill="#DBEAFE"
          />
          <path
            d="M15 17H20.8H25M12 21C18.2484 21 21.7516 21 28 21M15 25H20.8H25"
            stroke="#93C5FD"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>

        <p className="flex-1 min-w-0">{children}</p>
      </div>
    </div>
  )
}
