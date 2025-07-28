import Logo from "@/components/logo";
import Link from "next/link";
import {
  DiscordIcon,
  GitHubIcon,
  OpenCollectiveIcon,
  TwitterIcon,
} from "@/components/icons";

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
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "License", href: "/license" },
    { title: "Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 pt-16 pb-10 sm:pt-20 md:pt-24 xl:pt-28">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-14 sm:pb-20 text-sm font-medium">
          <div className="flex flex-col items-start col-span-2 sm:col-span-2 gap-y-6">
            <Logo className="h-8 w-auto" />
            <p className="text-muted-foreground">
              High quality Java coding education maintained by an open source
              community.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/javaistic/javaistic"
                aria-label="GitHub"
                className="transition-colors duration-200 ease-in-out text-muted-foreground hover:text-[#181717] dark:hover:text-white"
              >
                <GitHubIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/discord"
                aria-label="Discord"
                className="transition-colors duration-200 ease-in-out text-muted-foreground hover:text-[#5865F2]"
              >
                <DiscordIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/javaistic"
                aria-label="X (formerly Twitter)"
                className="transition-colors duration-200 ease-in-out text-muted-foreground hover:text-foreground"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://opencollective.com/javaistic"
                aria-label="Open Collective"
                className="transition-colors duration-200 ease-in-out text-muted-foreground hover:text-[#7FADF2]"
              >
                <OpenCollectiveIcon className="h-5 w-5" />
              </Link>
            </div>

            <div className="text-sm text-neutral-500 flex items-center space-x-1">
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
              <h2 className="text-lg font-bold text-foreground mb-4">
                {section}
              </h2>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 ease-in-out text-muted-foreground hover:text-foreground"
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
        <div className="flex flex-col gap-y-2 sm:flex-row items-center justify-between text-sm text-neutral-500">
          <h4>
            &copy; 2021 - {new Date().getFullYear()} Javaistic. All rights
            reserved.
          </h4>

          <div>
            <div className="flex items-center space-x-1 text-sm text-neutral-500">
              <span>Made with</span>
              <span role="img" aria-label="love" className="text-red-500">
                ❤️
              </span>
              <span className="flex items-center gap-x-1.5">
                in
                <img
                  src="https://flagapi.vercel.app/S/IND"
                  alt="India"
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
