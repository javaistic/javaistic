import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

const docsLayoutOptions: DocsLayoutProps = {
  tree: source.pageTree,
  ...baseOptions,
  themeSwitch: {
    mode: "light-dark",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsLayoutOptions}>{children}</DocsLayout>;
}
