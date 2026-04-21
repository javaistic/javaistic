import type { Metadata } from "next";
import {
  BackgroundSection,
  BentoGridSection,
  CTASection,
  FAQSection,
  FeaturesSection,
  HeroSection,
  VisionSection,
} from "@/components/home";
import HomeTabs from "@/components/home/home-tabs";
import { baseUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Javaistic - Master Java Programming with Interactive Tutorials",
  description:
    "Learn Java from fundamentals to advanced concepts. Javaistic provides comprehensive documentation, practical programs, and a modern learning environment for developers.",
  keywords: [
    "Java tutorial",
    "learn Java",
    "Java programming",
    "Java examples",
    "OOP concepts Java",
  ],
  alternates: {
    canonical: baseUrl,
  },
};

export default function HomePage() {
  return (
    <BackgroundSection>
      {/* Hero Section */}
      <HeroSection />

      {/* Documentation Preview */}
      <HomeTabs />

      {/* Features Section */}
      <FeaturesSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Bento Grid Section */}
      <BentoGridSection />

      {/* FAQ Section */}
      <FAQSection className="pt-16" />

      {/* CTA Section */}
      <CTASection />
    </BackgroundSection>
  );
}
