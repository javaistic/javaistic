import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CodeIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center sm:min-h-screen py-24">
        <h1 className="text-5xl tracking-tight font-funnel-display sm:text-6xl lg:text-[80px] font-extrabold text-neutral-900 dark:text-white max-w-5xl">
          Master{" "}
          <span className="bg-gradient-to-br from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Java{" "}
          </span>
          Programming efficiently with{" "}
          <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            Javaistic{" "}
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-4xl">
          Interactive, fast-paced learning for absolute beginners to advanced
          learners. A free and open-source platform to learn Java programming.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/docs">
            <Button
              size="lg"
              className="text-lg py-6 font-semibold dark:text-foreground rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              Start Learning Now
            </Button>
          </Link>
          <Link href="https://github.com/javaistic/javaistic" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="text-lg py-6 font-semibold dark:text-foreground rounded-lg border-blue"
            >
              <GitHubIcon className="!size-5" />
              Star on GitHub
            </Button>
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-10 md:px-12">
        <div className="text-center mt-5 mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold font-funnel-display">
            Why learn Java with Javaistic?
          </h1>
          <p className="mt-4 text-lg font-medium dark:text-neutral-400 mx-auto">
            Designed to make learning Java fun, practical, and truly
            beginner-friendly.
          </p>
        </div>

        {/* Section: Docs */}
        <article className="mx-auto mb-10 sm:space-x-10 flex flex-col items-center py-10 sm:flex-row">
          <div className="w-full sm:w-1/2 transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
            <Image
              src="/img/home/docs.svg"
              alt="Javaistic Docs"
              width={1213}
              height={1023}
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL="/img/home/docs.svg"
              loading="lazy"
            />
          </div>
          <div className="w-full sm:w-1/2 text-left">
            <h2 className="mb-6 font-funnel-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
              Quality over Quantity
            </h2>
            <p className="mb-8 text-xl font-medium leading-relaxed text-muted-foreground">
              We focus on quality — not noise. Every piece of content is crafted
              to be clear, engaging, and easy to understand. Learn Java with
              beautifully designed, beginner-friendly docs — all completely
              free.
            </p>
            <Link href="/docs">
              <Button size="lg" className="text-lg font-semibold">
                <span className="flex items-center">
                  Explore the Docs
                  <ArrowRightIcon className="ml-2 !size-5" />
                </span>
              </Button>
            </Link>
          </div>
        </article>

        {/* Section: Coding */}
        <article className="flex flex-col-reverse sm:flex-row items-center py-14 space-y-10 sm:space-y-0 sm:space-x-10">
          <div className="w-full sm:w-1/2 text-left">
            <h2 className="mb-6 text-3xl sm:text-4xl font-funnel-display font-extrabold text-foreground">
              Coding Made Fun
            </h2>
            <p className="mb-8 text-xl font-medium leading-relaxed text-muted-foreground">
              Jump into hands-on coding right away or explore our step-by-step
              breakdowns of real Java programs. Whether you’re a beginner or
              brushing up, it’s coding made enjoyable.
            </p>
            <Link href="/programs">
              <Button size="lg" className="text-lg font-semibold">
                <span className="flex items-center">
                  <CodeIcon className="mr-2 !size-5" />
                  Try a Program Now
                </span>
              </Button>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
            <Image
              src="/img/home/programs.svg"
              alt="Javaistic Programs"
              width={1213}
              height={1023}
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL="/img/home/programs.svg"
              loading="lazy"
            />
          </div>
        </article>

        {/* Section: GitHub */}
        <article className="flex flex-col sm:flex-row items-center py-14 space-y-10 sm:space-y-0 sm:space-x-10">
          <div className="w-full sm:w-1/2 transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
            <Image
              src="/img/home/open-source.svg"
              alt="Javaistic GitHub"
              width={613}
              height={521}
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL="/img/home/open-source.svg"
              loading="lazy"
            />
          </div>
          <div className="w-full sm:w-1/2 text-left">
            <h2 className="mb-6 text-3xl sm:text-4xl font-funnel-display font-extrabold text-foreground">
              Built Together.
              <br className="hidden lg:inline-block" />
              Fork it. Improve it.
            </h2>
            <p className="mb-8 text-xl font-medium leading-relaxed text-muted-foreground">
              Javaistic is fully open source — built by and for learners like
              you. Fork it, contribute, and shape the future of Java education
              with us.
            </p>
            <Link href="https://github.com/javaistic/javaistic" target="_blank">
              <Button size="lg" className="text-lg font-semibold">
                <span className="flex items-center">
                  Contribute on GitHub
                  <ExternalLinkIcon className="ml-2 !size-5" />
                </span>
              </Button>
            </Link>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="py-20  max-w-6xl">
        <div className="mx-auto rounded-3xl bg-gradient-to-br from-indigo-900 to-sky-700 px-6 py-16 text-center text-white shadow-xl">
          <h2 className="mb-4 text-4xl font-bold font-funnel-display">
            Ready to become a Java Pro?
          </h2>
          <p className="mb-8 text-lg font-medium dark:text-secondary-foreground">
            Begin your Java journey now — no credit card, no sign-up, just pure
            learning.
          </p>
          <Link href="/docs">
            <Button
              size="lg"
              className="inline-flex bg-white text-black hover:bg-white items-center text-lg font-semibold"
            >
              Start Learning
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
