import defaultMdxComponents from "fumadocs-ui/mdx";
import * as icons from "lucide-react";
import type { MDXComponents } from "mdx/types";
import * as customIcons from "./components/icons";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  const allIcons: Record<string, unknown> = {
    ...(icons as Record<string, unknown>),
    ...customIcons,
    GithubIcon: customIcons.GitHubIcon,
  };

  const merged = {
    ...allIcons,
    ...defaultMdxComponents,
    ...components
  };

  return new Proxy(merged, {
    get: (target, prop: string) => {
      if (typeof prop !== "string") return undefined;
      if (prop in target) return (target as any)[prop];
      if (prop.endsWith("Icon")) {
        const baseName = prop.slice(0, -4);
        return (target as any)[baseName];
      }
      return undefined;
    },
  }) as MDXComponents;
}
