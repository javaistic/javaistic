import type { Metadata } from "next";
import { baseUrl } from "@/lib/metadata";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Javaistic | Our Mission and Values",
  description:
    "Learn about Javaistic, a free and open-source platform dedicated to making Java programming accessible, enjoyable, and free for learners worldwide.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
