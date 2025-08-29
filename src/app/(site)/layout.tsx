"use client";

import { baseOptions } from "@/app/layout.config";
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
import React from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { isDarkMode, mounted } = useDarkMode();
  return (
    <>
      <HomeLayout
        {...baseOptions}
        style={
          {
            "--spacing-fd-container": "1100px",
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
                <NavbarMenuContent className="grid grid-cols-1 gap-x-2 p-2 text-[15px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10">
                  <NavbarMenuLink
                    href="/docs/introduction"
                    className="col-span-3 md:row-span-2"
                  >
                    <div className="-mx-3 -mt-3">
                      <Image
                        src={
                          isDarkMode && mounted
                            ? "/img/docs-dark.png"
                            : "/img/docs-light.png"
                        }
                        alt="Java Documentation Guide"
                        className="rounded-t-lg object-cover"
                        style={{
                          height: "300px",
                          maskImage:
                            "linear-gradient(to bottom,white 70%,transparent)",
                        }}
                        width={600}
                        height={400}
                      />
                    </div>
                    <p className="font-medium">Getting Started</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Learn how to set up Java on your machine and start coding.
                    </p>
                  </NavbarMenuLink>
                  <NavbarMenuLink
                    href="/programs/contents"
                    className="col-span-3 md:row-span-2"
                  >
                    <div className="-mx-3 -mt-3">
                      <Image
                        src={
                          isDarkMode && mounted
                            ? "/img/programs-dark.png"
                            : "/img/programs-light.png"
                        }
                        alt="Java Programs Collection"
                        className="rounded-t-lg object-cover"
                        style={{
                          height: "300px",
                          maskImage:
                            "linear-gradient(to bottom,white 70%,transparent)",
                        }}
                        width={600}
                        height={300}
                      />
                    </div>
                    <p className="font-medium">Programs Collection</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Practice with Java programs from beginner to advanced
                      level.
                    </p>
                  </NavbarMenuLink>
                  <NavbarMenuLink
                    href="/docs/introduction"
                    className="col-span-2 lg:col-start-7 lg:row-start-1"
                  >
                    <Book className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">Java Fundamentals</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Master the core concepts of Java programming language.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="/docs/variables-primitive-data-types"
                    className="col-span-2 lg:col-start-7 lg:row-start-2"
                  >
                    <ComponentIcon className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">Data Types & Variables</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Understand Java&apos;s primitive data types and variable
                      declarations.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="/docs/class-objects"
                    className="col-span-2 lg:col-start-9 lg:row-start-1"
                  >
                    <Server className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">Classes & Objects</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Learn object-oriented programming with Java classes and
                      objects.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="/docs/inheritance"
                    className="col-span-2 lg:col-start-9 lg:row-start-2"
                  >
                    <PlusIcon className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">Advanced Concepts</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Explore inheritance, polymorphism, and advanced Java
                      features.
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
                <NavbarMenuContent className="p-2 text-[15px]">
                  <NavbarMenuLink href="/about" className="md:row-span-2">
                    <div className="-mx-3 -mt-3">
                      <Image
                        src="/mission.svg"
                        alt="Javaistic Community"
                        className="mx-auto rounded-t-lg object-cover"
                        style={{
                          maskImage:
                            "linear-gradient(to bottom,white 60%,transparent)",
                          height: "200px",
                          width: "320px",
                        }}
                        width={400}
                        height={100}
                      />
                    </div>
                    <p className="font-medium">About Javaistic</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Learn about our mission to make Java education accessible
                      to everyone.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="https://github.com/javaistic/javaistic"
                    className="lg:col-start-2"
                  >
                    <GitHubIcon className="bg-fd-primary text-fd-primary-foreground mb-2 size-6 rounded-md p-1" />
                    <p className="font-medium">Open Source</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Contribute to Javaistic on GitHub and help improve Java
                      education.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="https://github.com/javaistic/javaistic/graphs/contributors"
                    className="lg:col-start-2"
                  >
                    <Users className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">Contributors</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Meet the amazing developers building Javaistic together.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="https://github.com/javaistic/javaistic/discussions"
                    className="lg:col-start-3 lg:row-start-1"
                  >
                    <MessageCircle className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">Discussions</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Join conversations, ask questions, and share your Java
                      journey.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="https://github.com/javaistic/javaistic/blob/main/CONTRIBUTING.md"
                    className="lg:col-start-3 lg:row-start-2"
                  >
                    <Heart className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">Contributing</p>
                    <p className="text-fd-muted-foreground text-sm">
                      Learn how to contribute content, code, and help grow our
                      community.
                    </p>
                  </NavbarMenuLink>
                </NavbarMenuContent>
              </NavbarMenu>
            ),
          },
        ]}
      >
        {children}
      </HomeLayout>
      <Footer />
    </>
  );
}
