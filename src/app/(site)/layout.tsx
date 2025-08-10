import { baseOptions } from "@/app/layout.config";
import { Footer } from "@/components/footer";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeLayout
        {...baseOptions}
        style={
          {
            "--spacing-fd-container": "1280px",
          } as object
        }
      >
        {children}
      </HomeLayout>
     <Footer/>
    </>
  );
}
