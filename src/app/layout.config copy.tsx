import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { type LinkItemType } from "fumadocs-ui/layouts/docs";
import { AlbumIcon, Heart, LayoutTemplate } from "lucide-react";
// import Image from "next/image";
// import Logo from "@/public/logo.png";

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
        {/* {logo} */}
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          Javaistic
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [
    {
      text: "Docs",
      url: "/docs/installation",
    },
    {
      text: "Programs",
      url: "/programs",
    },
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Sponsors",
      url: "/sponsors",
    },
  ],
  githubUrl: "https://github.com/javaistic/javaistic",
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
    icon: <Heart />,
  },
];

export const logo = (
  <>
    {/* <Image
      alt="Fumadocs"
      src={Logo}
      sizes="100px"
      className="hidden w-20 md:w-24 [.uwu_&]:block"
      aria-label="Fumadocs"
    /> */}

    {/* <FumadocsIcon className="size-5 [.uwu_&]:hidden" fill="currentColor" /> */}
  </>
);
