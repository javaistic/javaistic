import { baseOptions } from "@/app/layout.config";
import Particles from "@/components/Particles";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      style={{
        "--spacing-fd-container": "1280px",
      } as React.CSSProperties}
    >
      {children}
    </HomeLayout>
  );
}
