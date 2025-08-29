import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GitHubIcon, DiscordIcon, TwitterIcon } from "@/components/icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Javaistic - Get in Touch with Our Team",
  description:
    "Have questions about Java programming or feedback about our platform? Contact the Javaistic team through multiple channels including GitHub, Discord, and direct email.",
  openGraph: {
    title: "Contact Javaistic - Get in Touch with Our Team",
    description:
      "Have questions about Java programming or feedback about our platform? Contact the Javaistic team through multiple channels including GitHub, Discord, and direct email.",
    images: [
      {
        url: "https://javaistic.vercel.app/og.png",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="font-funnel-display text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Get in{" "}
          <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-xl">
          Have questions, suggestions, or want to contribute? We&apos;d love to
          hear from you! Choose the best way to reach our team.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="bg-card rounded-2xl border p-8">
          <h2 className="font-funnel-display text-foreground mb-6 text-2xl font-bold">
            Send us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  First Name *
                </label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Last Name *
                </label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                Email Address *
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                Subject *
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                <option value="">Select a category</option>
                <option value="general">General Question</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="content">Content Feedback</option>
                <option value="contribution">Want to Contribute</option>
                <option value="partnership">Partnership/Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell us more about your question or feedback..."
                rows={6}
                className="w-full"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>

            <p className="text-muted-foreground text-center text-sm">
              * Required fields. We&apos;ll get back to you within 24-48 hours.
            </p>
          </form>
        </div>

        {/* Contact Information & Community */}
        <div className="space-y-8">
          {/* Quick Contact */}
          <div className="bg-card rounded-2xl border p-8">
            <h2 className="font-funnel-display text-foreground mb-6 text-2xl font-bold">
              Quick Contact
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <svg
                    className="h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">hello@javaistic.dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <svg
                    className="h-5 w-5 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground font-medium">Response Time</p>
                  <p className="text-muted-foreground">24-48 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <svg
                    className="h-5 w-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">India (UTC+5:30)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Channels */}
          <div className="bg-card rounded-2xl border p-8">
            <h2 className="font-funnel-display text-foreground mb-6 text-2xl font-bold">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mb-6">
              Connect with fellow Java learners and get instant help from our
              community.
            </p>

            <div className="space-y-4">
              <Link
                href="https://github.com/javaistic/javaistic/discussions"
                target="_blank"
                className="hover:bg-accent flex items-center space-x-3 rounded-lg border p-4 transition-colors"
              >
                <GitHubIcon className="text-foreground h-6 w-6" />
                <div>
                  <p className="text-foreground font-medium">
                    GitHub Discussions
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Ask questions, share ideas, get help
                  </p>
                </div>
              </Link>

              <Link
                href="/discord"
                className="hover:bg-accent flex items-center space-x-3 rounded-lg border p-4 transition-colors"
              >
                <DiscordIcon className="h-6 w-6 text-[#5865F2]" />
                <div>
                  <p className="text-foreground font-medium">Discord Server</p>
                  <p className="text-muted-foreground text-sm">
                    Real-time chat with the community
                  </p>
                </div>
              </Link>

              <Link
                href="https://x.com/javaistic"
                target="_blank"
                className="hover:bg-accent flex items-center space-x-3 rounded-lg border p-4 transition-colors"
              >
                <TwitterIcon className="text-foreground h-6 w-6" />
                <div>
                  <p className="text-foreground font-medium">Follow on X</p>
                  <p className="text-muted-foreground text-sm">
                    Latest updates and announcements
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-card rounded-2xl border p-8">
            <h2 className="font-funnel-display text-foreground mb-6 text-2xl font-bold">
              Quick Answers
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="text-foreground flex cursor-pointer items-center justify-between font-medium">
                  How can I contribute to Javaistic?
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-muted-foreground mt-2">
                  Check out our GitHub repository and contribution guidelines.
                  We welcome content improvements, bug fixes, and new features!
                </p>
              </details>

              <details className="group">
                <summary className="text-foreground flex cursor-pointer items-center justify-between font-medium">
                  Is Javaistic really free?
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-muted-foreground mt-2">
                  Yes! Javaistic is completely free and open-source. No
                  subscriptions, no premium tiers, no hidden costs.
                </p>
              </details>

              <details className="group">
                <summary className="text-foreground flex cursor-pointer items-center justify-between font-medium">
                  Can you add a specific Java topic?
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-muted-foreground mt-2">
                  Absolutely! Use the form above to suggest new topics or create
                  an issue on GitHub. We prioritize based on community feedback.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Business Inquiries */}
      <div className="mt-20 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-12 text-center dark:from-blue-950 dark:to-indigo-950">
        <h2 className="font-funnel-display text-foreground mb-4 text-3xl font-bold">
          Business Inquiries
        </h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
          Interested in partnerships, sponsorships, or enterprise solutions?
          We&apos;d love to explore how we can work together to advance Java
          education.
        </p>
        <Button size="lg" asChild>
          <Link href="mailto:business@javaistic.dev">
            Contact Business Team
          </Link>
        </Button>
      </div>
    </div>
  );
}
