import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";

// Proper tree structure for terms page
const termsTree = {
  name: "Terms",
  children: [
    {
      type: "page" as const,
      name: "Terms of Service",
      url: "/terms",
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={termsTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}