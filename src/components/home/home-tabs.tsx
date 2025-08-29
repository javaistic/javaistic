"use client";

import {
  UnderlineTabs,
  type UnderlineTab,
} from "@/components/home/underline-tabs";
import { useDarkMode } from "@/hooks/useDarkMode";
import Image from "next/image";
import { SVGProps } from "react";

export default function HomeTabs() {
  const { isDarkMode, mounted } = useDarkMode();

  // Generate tab items dynamically to handle dark/light mode images
  const TAB_ITEMS: UnderlineTab[] = [
    {
      value: "docs",
      label: "Docs",
      icon: <DocsIcon className="h-5 w-5" />,
      content: (
        <Image
          src={
            mounted
              ? isDarkMode
                ? "/img/docs-dark.png"
                : "/img/docs-light.png"
              : "/img/docs-dark.png"
          }
          alt="Java programming docs and tutorials interface preview"
          width={800}
          height={600}
          className="h-auto w-full rounded-3xl shadow-lg"
          priority
        />
      ),
    },
    {
      value: "programs",
      label: "Programs",
      icon: <CodeIcon className="h-5 w-5" />,
      content: (
        <Image
          src={
            mounted
              ? isDarkMode
                ? "/img/programs-dark.png"
                : "/img/programs-light.png"
              : "/img/programs-dark.png"
          }
          alt="Java programs interface preview"
          width={800}
          height={600}
          className="h-auto w-full rounded-3xl shadow-lg"
        />
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col items-center">
      {/* Top Tab Navigation */}
      <UnderlineTabs items={TAB_ITEMS} defaultValue="docs" className="w-full" />
    </div>
  );
}

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4266_956)">
        <path
          d="M13.75 2H5.25C3.733 2 2.5 3.233 2.5 4.75V13.25C2.5 14.767 3.733 16 5.25 16H13.75C15.267 16 16.5 14.767 16.5 13.25V4.75C16.5 3.233 15.267 2 13.75 2ZM6.78 12.78C6.634 12.926 6.442 13 6.25 13C6.058 13 5.866 12.927 5.72 12.78C5.427 12.487 5.427 12.012 5.72 11.719L7.69 9.749L5.72 7.779C5.427 7.486 5.427 7.011 5.72 6.718C6.013 6.425 6.488 6.425 6.781 6.718L9.281 9.218C9.574 9.511 9.574 9.986 9.281 10.279L6.781 12.779L6.78 12.78ZM12.75 13H10.25C9.836 13 9.5 12.664 9.5 12.25C9.5 11.836 9.836 11.5 10.25 11.5H12.75C13.164 11.5 13.5 11.836 13.5 12.25C13.5 12.664 13.164 13 12.75 13Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4266_956">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function DocsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.146 2.98067C15.398 2.53967 14.181 2.01367 12.626 2.01367H12.624C11.022 2.01367 9.773 2.57067 9 3.04367C8.227 2.57067 6.978 2.01367 5.377 2.01367H5.375C3.82 2.01367 2.603 2.53967 1.855 2.98067C1.319 3.29567 1 3.85767 1 4.48167V13.5727C1 14.1537 1.287 14.6957 1.766 15.0227C2.239 15.3447 2.837 15.4127 3.369 15.2037C4.012 14.9507 4.683 14.8217 5.366 14.8207H5.374C6.586 14.8207 7.542 15.2247 8.131 15.5647C8.169 15.5867 8.211 15.5957 8.25 15.6147V5.94567C8.25 5.53167 8.586 5.19567 9 5.19567C9.414 5.19567 9.75 5.53167 9.75 5.94567V15.6147C9.789 15.5957 9.831 15.5867 9.869 15.5647C10.458 15.2257 11.413 14.8207 12.626 14.8207H12.633C13.316 14.8207 13.987 14.9507 14.631 15.2037C15.16 15.4117 15.758 15.3437 16.232 15.0217C16.713 14.6937 17 14.1507 17 13.5687V4.48667C17 3.86867 16.672 3.29167 16.146 2.98067Z"
        fill="currentColor"
      />
    </svg>
  );
}
