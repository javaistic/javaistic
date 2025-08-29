"use client";

import {
  BackgroundSection,
  BentoGridSection,
  CTASection,
  FeaturesSection,
  HeroSection,
  VisionSection,
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

      {/* CTA Section */}
      <CTASection />
    </BackgroundSection>
  );
}
