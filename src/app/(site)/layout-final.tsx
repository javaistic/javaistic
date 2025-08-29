"use client";
"use client";

import { baseOptions, linkItems } from "@/app/layout.config";
import { Footer } from "@/components/footer";
import { GitHubIcon } from "@/components/icons";
import { useDarkMode } from "@/hooks/useDarkMode";
import Link from "fumadocs-core/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import {
  Book,
  ComponentIcon,
  Heart,
  MessageCircle,
  PlusIcon,
  Server,
  Users,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { isDarkMode, mounted } = useDarkMode();

  return (
    <>
      <HomeLayout
        {...baseOptions}
        style={
          {
            "--spacing-fd-container": "1200px", // Increased for better content display
            paddingTop: "0px",
          } as React.CSSProperties
        }
        links={[
          {
            type: "menu",
            on: "menu",
            text: "Learn",
            items: [
              {
                text: "Documentation",
                url: "/docs/installation",
                icon: <Book />,
              },
              {
                text: "Programs",
                url: "/programs/contents",
                icon: <ComponentIcon />,
              },
            ],
          },
          {
            type: "custom",
            on: "nav",
            children: (
              <NavbarMenu>
                <NavbarMenuTrigger>
                  <Link href="/docs">Learn</Link>
                </NavbarMenuTrigger>
                <NavbarMenuContent
                  className="grid grid-cols-1 gap-x-3 gap-y-2 p-3 text-[15px] sm:grid-cols-5"
                  role="menu"
                  aria-label="Learning resources menu"
                >
                  <NavbarMenuLink
                    href="/docs/introduction"
                    className="col-span-1 sm:col-span-2"
                    role="menuitem"
                  >
                    <div className="-mx-3 -mt-3">
                      <Image
                        src={
                          mounted
                            ? isDarkMode
                              ? "/img/guides-dark.svg"
                              : "/img/guides.svg"
                            : "/img/guides.svg"
                        }
                        alt="Java Documentation Guide - Learn programming fundamentals"
                        className="rounded-t-lg object-cover transition-opacity duration-200"
                        style={{
                          maskImage:
                            "linear-gradient(to bottom, white 70%, transparent)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, white 70%, transparent)",
                        }}
                        width={600}
                        height={300}
                        priority
                      />
                    </div>
                    <p className="text-foreground font-semibold">
                      Getting Started with Java
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Complete guide to Java installation, setup, and your first
                      program. Perfect for beginners.
                    </p>
                  </NavbarMenuLink>
                  <NavbarMenuLink
                    href="/programs/contents"
                    className="col-span-1 sm:col-span-2"
                    role="menuitem"
                  >
                    <div className="-mx-3 -mt-3">
                      <Image
                        src={
                          mounted
                            ? isDarkMode
                              ? "/img/play-dark.svg"
                              : "/img/play.svg"
                            : "/img/play.svg"
                        }
                        alt="Java Programs Collection - Practice coding with examples"
                        className="rounded-t-lg object-cover transition-opacity duration-200"
                        style={{
                          maskImage:
                            "linear-gradient(to bottom, white 70%, transparent)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, white 70%, transparent)",
                        }}
                        width={600}
                        height={300}
                      />
                    </div>
                    <p className="text-foreground font-semibold">
                      Hands-on Programs
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      200+ Java programs with explanations. From basic syntax to
                      advanced algorithms.
                    </p>
                  </NavbarMenuLink>
                  <NavbarMenuLink
                    href="/docs/introduction"
                    className="col-span-1 sm:col-start-5 sm:row-start-1"
                    role="menuitem"
                  >
                    <Book className="bg-primary text-primary-foreground mb-2 size-8 rounded-lg p-1.5 shadow-sm" />
                    <p className="text-foreground font-semibold">
                      Java Fundamentals
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Master core Java concepts and programming principles.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="/docs/variables-primitive-data-types"
                    className="col-span-1 sm:col-start-5 sm:row-start-2"
                    role="menuitem"
                  >
                    <ComponentIcon className="bg-primary text-primary-foreground mb-2 size-8 rounded-lg p-1.5 shadow-sm" />
                    <p className="text-foreground font-semibold">
                      Data Types & Variables
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Understand Java's type system and memory management.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="/docs/class-objects"
                    className="col-span-1 sm:col-start-4"
                    role="menuitem"
                  >
                    <Server className="bg-primary text-primary-foreground mb-2 size-8 rounded-lg p-1.5 shadow-sm" />
                    <p className="text-foreground font-semibold">
                      Classes & Objects
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Master OOP fundamentals with classes, objects, and
                      encapsulation.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="/docs/inheritance"
                    className="col-span-1 sm:col-start-2 lg:col-start-4 lg:row-start-2 xl:col-start-4"
                    role="menuitem"
                  >
                    <PlusIcon className="bg-primary text-primary-foreground mb-2 size-8 rounded-lg p-1.5 shadow-sm" />
                    <p className="text-foreground font-semibold">
                      Advanced OOP
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Inheritance, polymorphism, interfaces, and design
                      patterns.
                    </p>
                  </NavbarMenuLink>
                </NavbarMenuContent>
              </NavbarMenu>
            ),
          },
          {
            type: "custom",
            on: "nav",
            children: (
              <NavbarMenu>
                <NavbarMenuTrigger>
                  <Link href="/about">Community</Link>
                </NavbarMenuTrigger>
                <NavbarMenuContent
                  className="grid grid-cols-1 gap-3 p-3 text-[15px] sm:grid-cols-2 lg:grid-cols-3"
                  role="menu"
                  aria-label="Community and contribution menu"
                >
                  <NavbarMenuLink
                    href="/about"
                    className="sm:col-span-2 md:row-span-2 lg:col-span-1"
                    role="menuitem"
                  >
                    <div className="-mx-3 -mt-3">
                      <Image
                        src={
                          mounted
                            ? isDarkMode
                              ? "/mission-dark.svg"
                              : "/mission.svg"
                            : "/mission.svg"
                        }
                        alt="Javaistic Community - Making Java education accessible to everyone"
                        className="mx-auto rounded-t-lg object-cover transition-opacity duration-200"
                        style={{
                          maskImage:
                            "linear-gradient(to bottom, white 60%, transparent)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, white 60%, transparent)",
                          height: "200px",
                          width: "320px",
                        }}
                        width={400}
                        height={200}
                      />
                    </div>
                    <p className="text-foreground font-semibold">
                      About Javaistic
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Discover our mission to democratize Java education and
                      build an inclusive learning community.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="https://github.com/javaistic/javaistic"
                    className="lg:col-start-2 lg:row-start-1"
                    role="menuitem"
                  >
                    <GitHubIcon className="bg-primary text-primary-foreground mb-2 size-8 rounded-lg p-1.5 shadow-sm" />
                    <p className="text-foreground font-semibold">Open Source</p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Contribute code, documentation, and help shape the future
                      of Java education.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="https://github.com/javaistic/javaistic/graphs/contributors"
                    className="lg:col-start-3 lg:row-start-1"
                    role="menuitem"
                  >
                    <Users className="bg-primary text-primary-foreground mb-2 size-8 rounded-lg p-1.5 shadow-sm" />
                    <p className="text-foreground font-semibold">
                      Contributors
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Meet the passionate developers and educators building
                      Javaistic.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="https://github.com/javaistic/javaistic/discussions"
                    className="lg:col-start-2 lg:row-start-2"
                    role="menuitem"
                  >
                    <MessageCircle className="bg-primary text-primary-foreground mb-2 size-8 rounded-lg p-1.5 shadow-sm" />
                    <p className="text-foreground font-semibold">
                      Join Discussions
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Ask questions, share knowledge, and connect with fellow
                      Java learners.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="https://github.com/javaistic/javaistic/blob/main/CONTRIBUTING.md"
                    className="lg:col-start-3 lg:row-start-2"
                    role="menuitem"
                  >
                    <Heart className="bg-primary text-primary-foreground mb-2 size-8 rounded-lg p-1.5 shadow-sm" />
                    <p className="text-foreground font-semibold">
                      Start Contributing
                    </p>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Learn how to contribute content, code, and help grow our
                      community.
                    </p>
                  </NavbarMenuLink>
                </NavbarMenuContent>
              </NavbarMenu>
            ),
          },
          ...linkItems,
        ]}
      >
        {children}
      </HomeLayout>
      <Footer />
    </>
  );
}
