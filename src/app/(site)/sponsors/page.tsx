"use client";

import { Badge, CTASection } from "@/components/home";
import { ANIMATION_VARIANTS } from "@/components/home/animation-variants";
import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Coffee,
  CreditCard,
  Crown,
  DollarSign,
  ExternalLink,
  Heart,
  Shield,
  Star,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <motion.div
      className="mx-auto max-w-5xl pt-24"
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        className="relative mb-20 text-center"
        variants={ANIMATION_VARIANTS.container}
      >
        <motion.div
          className="mx-auto max-w-4xl"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.h1
            className="font-funnel-display bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300"
            variants={ANIMATION_VARIANTS.title}
          >
            Support{" "}
            <span className="bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Javaistic
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mx-auto mt-8 max-w-3xl text-xl leading-relaxed sm:text-2xl"
            variants={ANIMATION_VARIANTS.item}
          >
            Partner with us to empower the next generation of Java developers.
            Your support enables us to maintain{" "}
            <span className="text-foreground font-semibold">
              world-class educational content
            </span>{" "}
            and reach learners across the globe.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
            variants={ANIMATION_VARIANTS.container}
          >
            <Badge
              icon={Shield}
              text="Trusted Platform"
              colorClass="border-blue-500/20 bg-blue-50 text-blue-700 hover:border-blue-500/40 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400"
            />

            <Badge
              icon={Trophy}
              text="Quality Education"
              colorClass="border-amber-500/20 bg-amber-50 text-amber-700 hover:border-amber-500/40 hover:bg-amber-100 dark:bg-amber-900/20 dark:text-amber-400"
            />

            <Badge
              icon={TrendingUp}
              text="Growing Community"
              colorClass="border-green-500/20 bg-green-50 text-green-700 hover:border-green-500/40 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Impact Statistics */}
      <motion.section className="mb-20" variants={ANIMATION_VARIANTS.container}>
        <motion.div
          className="mb-12 text-center"
          variants={ANIMATION_VARIANTS.item}
        >
          <h2 className="font-funnel-display text-foreground mb-4 text-3xl font-bold">
            Our Growing Community
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Join thousands of developers learning Java through our platform
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.div
            className="bg-card rounded-xl border p-6 text-center"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div
              className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              1000s
            </motion.div>
            <p className="text-muted-foreground font-medium">Active Learners</p>
            <p className="text-muted-foreground mt-1 text-sm">
              Developers learning Java
            </p>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border p-6 text-center"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div
              className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              100+
            </motion.div>
            <p className="text-muted-foreground font-medium">
              Learning Resources
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              Interactive exercises & tutorials
            </p>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border p-6 text-center"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div
              className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              Free
            </motion.div>
            <p className="text-muted-foreground font-medium">
              Education Access
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              No cost to learn Java
            </p>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border p-6 text-center"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div
              className="mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              24/7
            </motion.div>
            <p className="text-muted-foreground font-medium">
              Always Available
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              Learn anytime, anywhere
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Partnership Benefits */}
      <motion.section className="mb-20" variants={ANIMATION_VARIANTS.container}>
        <motion.div
          className="mb-12 text-center"
          variants={ANIMATION_VARIANTS.item}
        >
          <h2 className="font-funnel-display text-foreground mb-4 text-3xl font-bold">
            Partnership Benefits
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Your support helps us create better learning experiences for
            developers worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.div
            className="bg-card rounded-xl border p-6"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Community Impact</h3>
            </div>
            <p className="text-muted-foreground">
              Help developers worldwide learn Java and advance their careers
              through quality education resources.
            </p>
            <div className="mt-3 text-xs font-medium text-blue-600 dark:text-blue-400">
              ✓ Access to developer community
              <br />✓ Education supporter recognition
              <br />✓ Industry visibility
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border p-6"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
                <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Recognition</h3>
            </div>
            <p className="text-muted-foreground">
              Your name and logo featured on our platform and in our community
              communications.
            </p>
            <div className="mt-3 text-xs font-medium text-green-600 dark:text-green-400">
              ✓ Logo on homepage
              <br />✓ Social media mentions
              <br />✓ Community recognition
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border p-6"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-900/30">
                <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Growing Platform</h3>
            </div>
            <p className="text-muted-foreground">
              Support a platform that's helping developers learn and grow in the
              Java ecosystem.
            </p>
            <div className="mt-3 text-xs font-medium text-purple-600 dark:text-purple-400">
              ✓ Growing platform reach
              <br />✓ Social media amplification
              <br />✓ Developer audience targeting
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Support Options */}
      <motion.section
        className="mb-20 grid gap-8 md:grid-cols-2"
        variants={ANIMATION_VARIANTS.container}
      >
        <motion.div
          className="bg-card group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg"
          variants={ANIMATION_VARIANTS.item}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h2 className="font-funnel-display text-foreground mb-4 text-2xl font-bold">
            Monthly Partnership
          </h2>
          <div className="mb-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-950/20">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
              🎯 Most Popular • Consistent Impact
            </p>
          </div>
          <p className="text-muted-foreground mb-6">
            Join our growing community of supporters who make a lasting impact
            through consistent monthly contributions. Your partnership helps us
            plan for the future and deliver exceptional educational experiences.
          </p>
          <div className="mb-6 space-y-3">
            <motion.div
              className="hover:bg-muted/50 flex items-center justify-between rounded-lg p-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                <div>
                  <span className="font-medium">Supporter</span>
                  <p className="text-muted-foreground text-xs">
                    Logo on website
                  </p>
                </div>
              </div>
              <span className="font-medium">$5/month</span>
            </motion.div>
            <motion.div
              className="hover:bg-muted/50 flex items-center justify-between rounded-lg border-2 border-green-200 p-3 dark:border-green-800"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-green-600" />
                <div>
                  <span className="font-medium">Contributor</span>
                  <p className="text-muted-foreground text-xs">
                    Priority support + social shoutout
                  </p>
                </div>
              </div>
              <span className="font-medium">$25/month</span>
            </motion.div>
            <motion.div
              className="hover:bg-muted/50 flex items-center justify-between rounded-lg p-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-purple-600" />
                <div>
                  <span className="font-medium">Partner</span>
                  <p className="text-muted-foreground text-xs">
                    Custom branding + direct access
                  </p>
                </div>
              </div>
              <span className="font-medium">$100/month</span>
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="w-full">
              <Link href="https://opencollective.com/javaistic" target="_blank">
                <CreditCard className="mr-2 h-4 w-4" />
                Start Monthly Partnership
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-card group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg"
          variants={ANIMATION_VARIANTS.item}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
          </motion.div>
          <h2 className="font-funnel-display text-foreground mb-4 text-2xl font-bold">
            One-Time Contribution
          </h2>
          <div className="mb-4 rounded-lg bg-green-50 p-3 dark:bg-green-950/20">
            <p className="text-sm font-medium text-green-700 dark:text-green-300">
              ⚡ Immediate Impact • Tax Deductible
            </p>
          </div>
          <p className="text-muted-foreground mb-6">
            Make an immediate impact with a one-time contribution. Every dollar
            directly supports our mission to provide accessible, high-quality
            Java education to developers worldwide.
          </p>
          <div className="mb-6 space-y-3">
            <motion.div
              className="hover:bg-muted/50 flex items-center justify-between rounded-lg p-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <div>
                  <span className="font-medium">Supporter</span>
                  <p className="text-muted-foreground text-xs">
                    Thank you recognition
                  </p>
                </div>
              </div>
              <span className="font-medium">$10</span>
            </motion.div>
            <motion.div
              className="hover:bg-muted/50 flex items-center justify-between rounded-lg p-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-amber-600" />
                <div>
                  <span className="font-medium">Champion</span>
                  <p className="text-muted-foreground text-xs">
                    Featured supporter + certificate
                  </p>
                </div>
              </div>
              <span className="font-medium">Custom Amount</span>
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" asChild className="w-full">
              <Link href="https://opencollective.com/javaistic" target="_blank">
                <DollarSign className="mr-2 h-4 w-4" />
                Make Impact Today
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Other Ways to Support */}
      <motion.section className="mb-20" variants={ANIMATION_VARIANTS.container}>
        <motion.h2
          className="font-funnel-display text-foreground mb-12 text-center text-3xl font-bold"
          variants={ANIMATION_VARIANTS.title}
        >
          Additional Ways to Contribute
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.div
            className="bg-card group rounded-lg border p-6 text-center transition-all duration-300 hover:shadow-lg"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="mx-auto mb-4 flex h-8 w-8 items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <GitHubIcon className="text-foreground h-8 w-8" />
            </motion.div>
            <h3 className="text-foreground mb-2 font-semibold">
              Open Source Support
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Star our repository and help us grow our community visibility on
              GitHub, attracting more contributors and users.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://github.com/javaistic/javaistic"
                  target="_blank"
                >
                  <Star className="mr-2 h-4 w-4" />
                  Star Repository
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card group rounded-lg border p-6 text-center transition-all duration-300 hover:shadow-lg"
            variants={ANIMATION_VARIANTS.item}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="mx-auto mb-4 flex h-8 w-8 items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <ExternalLink className="text-foreground h-8 w-8" />
            </motion.div>
            <h3 className="text-foreground mb-2 font-semibold">
              Share Our Mission
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Help us reach more developers by sharing Javaistic with your
              network and professional communities.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://x.com/intent/tweet?text=Empowering%20Java%20developers%20worldwide%20with%20free%20education%20at%20@javaistic!%20🚀&url=https://javaistic.vercel.app"
                  target="_blank"
                >
                  Share on X
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  );
}
