"use client";

import {
  BackgroundSection,
  BentoGridSection,
  CTASection,
  FeaturesSection,
  HeroSection,
  VisionSection,
  FAQSection,
} from "@/components/home";
import HomeTabs from "@/components/home/home-tabs";

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
