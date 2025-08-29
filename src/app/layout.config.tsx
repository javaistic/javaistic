import Logo from "@/components/logo";
import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { AlbumIcon, HeartIcon } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Logo className="h-7 w-auto" />
      </>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
    },
    {
      text: "Programs",
      url: "/programs",
    },
    {
      text: "Sponsors",
      url: "/sponsors",
    },
    {
      text: "Playground",
      url: "/playground",
    },
  ],
  githubUrl: "https://github.com/javaistic/javaistic",
  themeSwitch: {
    enabled: true,
    mode: "light-dark",
  },
};

export const linkItems: LinkItemType[] = [
  {
    icon: <AlbumIcon />,
    text: "Blog",
    url: "/blog",
    active: "nested-url",
  },
  {
    text: "Sponsors",
    url: "/sponsors",
    icon: <HeartIcon />,
  },
];
