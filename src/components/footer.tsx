"use client";
import {
  DiscordIcon,
  GitHubIcon,
  OpenCollectiveIcon,
  TwitterIcon,
} from "@/components/icons";
import Logo from "@/components/logo";
import Link from "next/link";
import Image from "next/image";

const footerNav = {
  "Getting Started": [
    { title: "Home", href: "/" },
    { title: "Docs", href: "/docs" },
    { title: "Programs", href: "/programs" },
    { title: "Roadmap", href: "/roadmap" },
  ],
  Javaistic: [
    { title: "About", href: "/about" },
    { title: "Team", href: "/team" },
    { title: "Blog", href: "/blog" },
    { title: "Sponsors", href: "/sponsors" },
  ],
  Resources: [
    { title: "Changelog", href: "/changelog" },
    { title: "Open Source", href: "/open-source" },
    { title: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { title: "Privacy Policy", href: "/legal/privacy" },
    { title: "Terms of Service", href: "/legal/terms" },
    { title: "License", href: "/legal/license" },
    { title: "Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-neutral-100 dark:bg-neutral-900">
      <div className="mx-auto max-w-6xl border-x px-4 pt-16 pb-10 sm:px-6 sm:pt-20 md:px-8 md:pt-24 xl:pt-28">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 pb-14 text-sm font-medium sm:grid-cols-2 sm:pb-20 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col items-start gap-y-6 sm:col-span-2">
            <Logo className="h-8 w-auto" />
            <p className="text-muted-foreground">
              High quality Java coding education maintained by an open source
              community.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/javaistic/javaistic"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors duration-200 ease-in-out hover:text-[#181717] dark:hover:text-white"
              >
                <GitHubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/discord"
                aria-label="Discord"
                className="text-muted-foreground transition-colors duration-200 ease-in-out hover:text-[#5865F2]"
              >
                <DiscordIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/javaistic"
                aria-label="X (formerly Twitter)"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-in-out"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://opencollective.com/javaistic"
                aria-label="Open Collective"
                className="text-muted-foreground transition-colors duration-200 ease-in-out hover:text-[#7FADF2]"
              >
                <OpenCollectiveIcon className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex items-center space-x-1 text-sm text-neutral-500">
              <span>Made by</span>
              <Link
                href="https://arghya.dev?ref=javaistic"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-neutral-800 dark:text-white"
              >
                @uiuxarghya
              </Link>
            </div>
          </div>
          {Object.entries(footerNav).map(([section, items]) => (
            <div key={section}>
              <h2 className="text-foreground mb-4 text-lg font-bold">
                {section}
              </h2>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-in-out"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal and Badge */}
        <div className="flex flex-col items-center justify-between gap-y-2 text-sm text-neutral-500 sm:flex-row">
          <h5 className="flex items-center gap-x-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
            </span>
            All systems operational
          </h5>
          <h5>
            &copy; 2021 - {new Date().getFullYear()} Javaistic. All rights
            reserved.
          </h5>

          <div>
            <div className="flex items-center space-x-1 text-sm text-neutral-500">
              <span>Made with</span>
              <span role="img" aria-label="love" className="text-red-500">
                ❤️
              </span>
              <span className="flex items-center gap-x-1.5">
                in
                <Image
                  src="https://flagapi.vercel.app/S/IND"
                  alt="India"
                  width={12}
                  height={12}
                  className="h-3 rounded-xs"
                />
                <span className="sr-only">India</span>
                IND
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
