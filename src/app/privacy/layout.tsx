import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";

// Proper tree structure for privacy page
const privacyTree = {
  name: "Privacy",
  children: [
    {
      type: "page" as const,
      name: "Privacy Policy",
      url: "/privacy",
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={privacyTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}