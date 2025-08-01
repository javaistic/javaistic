import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";

const docsLayoutOptions: DocsLayoutProps = {
  tree: source.pageTree,
  ...baseOptions,
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsLayoutOptions}>{children}</DocsLayout>;
}
