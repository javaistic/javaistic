"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is Javaistic really free?",
    answer:
      "Yes! Javaistic is completely free and always will be. We believe quality programming education should be accessible to everyone, regardless of their financial situation. No premium tiers, no hidden costs, no paywalls.",
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "Not at all! Our tutorials are designed for complete beginners. We start with the absolute basics and gradually build up to advanced concepts. Whether you're a student, career changer, or just curious about programming, we have content for you.",
  },
  {
    question: "What makes Javaistic different from other learning platforms?",
    answer:
      "Javaistic is specifically focused on Java programming with hands-on, practical examples. Unlike generic coding platforms, we provide deep, comprehensive Java education that's completely free and community-driven. Our content is created by experienced Java developers for real-world application.",
  },
  {
    question: "How can I contribute to Javaistic?",
    answer:
      "We welcome contributions from everyone! You can help by writing tutorials, fixing bugs, improving documentation, translating content, or spreading the word. Visit our GitHub repository to see open issues, submit pull requests, or join our contributor community.",
  },
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "We typically respond to general inquiries within 24-48 hours. Technical support requests are prioritized and usually addressed within 12-24 hours. For urgent security issues, we aim to respond within 4-6 hours.",
  },
  {
    question: "Can I use Javaistic content for teaching?",
    answer:
      "Absolutely! Our content is open-source and can be used for educational purposes. We encourage educators to use our materials in classrooms, workshops, and training programs. Just make sure to provide proper attribution.",
  },
];

export function FAQSection({ className = "" }: FAQSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className={`mb-20 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="font-funnel-display text-foreground mb-12 text-center text-4xl font-bold"
        variants={itemVariants}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.div className="mx-auto max-w-3xl" variants={itemVariants}>
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group dark:bg-card relative mb-2 overflow-hidden rounded-2xl bg-neutral-100 p-2 px-5 transition-all duration-300 dark:border-neutral-700/60"
              >
                <div className="relative">
                  <AccordionTrigger className="text-foreground text-left text-lg font-bold hover:no-underline [&[data-state=open]>svg]:text-blue-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-left text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
}
