"use client";

import {
  ANIMATION_VARIANTS,
  HOVER_ANIMATIONS,
} from "@/components/home/animation-variants";
import { Badge } from "@/components/home/badge";
import { FAQSection } from "@/components/home/faq-section";
import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Bug,
  Heart,
  Lightbulb,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

interface ContactMethod {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  colorClass: string;
}

// Reusable Contact Method Card Component
const ContactMethodCard = ({ method }: { method: ContactMethod }) => (
  <motion.div
    variants={ANIMATION_VARIANTS.item}
    whileHover={HOVER_ANIMATIONS.card}
    transition={{ duration: 0.2 }}
  >
    <Card className="hover:border-primary/50 group h-full cursor-pointer transition-colors">
      <CardHeader className="text-center">
        <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
          <method.icon className="text-primary h-6 w-6" />
        </div>
        <CardTitle className="text-lg">{method.title}</CardTitle>
        <CardDescription className="text-sm">
          {method.description}
        </CardDescription>
      </CardHeader>
    </Card>
  </motion.div>
);

// Reusable Contact Info Item Component
const ContactInfoItem = ({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}) => (
  <motion.div
    className="hover:border-primary/50 flex items-center gap-4 rounded-lg border p-4 transition-colors"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <Icon className="text-primary h-5 w-5 flex-shrink-0" />
    <div className="min-w-0 flex-1">
      <p className="truncate font-medium">{title}</p>
      <p className="text-muted-foreground truncate text-sm">{description}</p>
    </div>
    {href && (
      <Button variant="ghost" size="sm" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          →
        </a>
      </Button>
    )}
  </motion.div>
);

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactMethods: ContactMethod[] = [
    {
      title: "Community Discussion",
      icon: MessageSquare,
      description: "Join our community discussions",
      colorClass:
        "border-blue-500/20 bg-blue-50 text-blue-700 hover:border-blue-500/40 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      title: "Bug Reports",
      icon: Bug,
      description: "Report issues or bugs",
      colorClass:
        "border-orange-500/20 bg-orange-50 text-orange-700 hover:border-orange-500/40 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400",
    },
    {
      title: "Feature Requests",
      icon: Lightbulb,
      description: "Suggest new features",
      colorClass:
        "border-green-500/20 bg-green-50 text-green-700 hover:border-green-500/40 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      title: "Contributions",
      icon: GitHubIcon,
      description: "Contribute to the project",
      colorClass:
        "border-purple-500/20 bg-purple-50 text-purple-700 hover:border-purple-500/40 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl py-24">
      <motion.div
        className="space-y-16"
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          className="text-center"
          variants={ANIMATION_VARIANTS.container}
        >
          <motion.h1
            className="font-funnel-display bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300"
            variants={ANIMATION_VARIANTS.title}
          >
            Contact{" "}
            <span className="bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
            variants={ANIMATION_VARIANTS.item}
          >
            Have questions, feedback, or want to contribute? We&apos;d love to
            hear from you. Join our community of learners and contributors
            building the future of Java education.
          </motion.p>

          {/* Badges */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            variants={ANIMATION_VARIANTS.container}
          >
            <Badge
              icon={Heart}
              text="Community Driven"
              colorClass="border-green-500/20 bg-green-50 text-green-700 hover:border-green-500/40 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
            />
            <Badge
              icon={GitHubIcon}
              text="Open Source"
              colorClass="border-purple-500/20 bg-purple-50 text-purple-700 hover:border-purple-500/40 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400"
            />
            <Badge
              icon={BookOpen}
              text="Free Education"
              colorClass="border-blue-500/20 bg-blue-50 text-blue-700 hover:border-blue-500/40 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400"
            />
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.section variants={ANIMATION_VARIANTS.item}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => (
              <ContactMethodCard key={index} method={method} />
            ))}
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.section variants={ANIMATION_VARIANTS.item}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Share your thoughts, report issues, or suggest improvements to
                  help us grow the platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a category</option>
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="partnership">Partnership</option>
                        <option value="contribution">Contribution</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Brief description"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20"
                    >
                      <p className="text-sm font-medium text-green-700 dark:text-green-300">
                        Thank you! Your message has been sent successfully.
                        We&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20"
                    >
                      <p className="text-sm font-medium text-red-700 dark:text-red-300">
                        Sorry, there was an error sending your message. Please
                        try again.
                      </p>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.section>

          {/* Quick Contact Info */}
          <motion.section variants={ANIMATION_VARIANTS.item}>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Quick Contact
                  </CardTitle>
                  <CardDescription>
                    Get in touch through our preferred channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ContactInfoItem
                    icon={Mail}
                    title="Email"
                    description="uiuxarghya@gmail.com"
                    href="mailto:uiuxarghya@gmail.com"
                  />
                  <ContactInfoItem
                    icon={GitHubIcon}
                    title="GitHub"
                    description="github.com/javaistic"
                    href="https://github.com/javaistic/javaistic"
                  />
                  <ContactInfoItem
                    icon={MessageSquare}
                    title="Community"
                    description="Join our Discord"
                    href="#"
                  />
                </CardContent>
              </Card>
            </div>
          </motion.section>
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <motion.section
          variants={ANIMATION_VARIANTS.item}
          className="text-center"
        >
          <Card className="from-primary/5 to-primary/10 border-primary/20 bg-gradient-to-br">
            <CardContent className="p-8">
              <Mail className="text-primary mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 text-2xl font-bold">Join Our Community</h3>
              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                Connect with fellow learners and contributors. Help us build the
                best Java learning platform together.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild>
                  <a
                    href="https://github.com/javaistic/javaistic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className="mr-2 h-4 w-4" />
                    Contribute on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/docs">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Start Learning
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  );
}
