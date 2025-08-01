'use client'
import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CodeIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Particles from '../../components/Particles';
import { useEffect, useState } from 'react';
import { motion, easeOut } from 'framer-motion';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const checkDarkMode = () => {
      if (typeof window !== 'undefined') {

        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        

        const hasDarkClass = document.documentElement.classList.contains('dark');
        
        const dataTheme = document.documentElement.getAttribute('data-theme');
        
        setIsDarkMode(systemPrefersDark || hasDarkClass || dataTheme === 'dark');
      }
    };

    checkDarkMode();


    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

  
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme']
    });

    return () => {
      mediaQuery.removeEventListener('change', checkDarkMode);
      observer.disconnect();
    };
  }, []);

  // Define particle properties based on theme
  const particleConfig = isDarkMode 
    ? {
        // Dark mode properties - enhanced for better visibility
        particleColors: ['#00FFFF',' #FF00FF','#00BFFF'],
        particleCount: 500,
        particleSpread: 10,
        speed: 0.4,
        particleBaseSize: 100,
        moveParticlesOnHover: false,
        alphaParticles: false,
        disableRotation: true,
        particleHoverFactor: 2,
        sizeRandomness: 1.0,
        cameraDistance: 18
      }
    : {
        // Light mode properties
        particleColors: ['#1E3A8A', '#4B0082', '#4a4a4a'],
        particleCount: 500,
        particleSpread: 10,
        speed: 0.4,
        particleBaseSize: 100,
        moveParticlesOnHover: false,
        alphaParticles: false,
        disableRotation: true,
        particleHoverFactor: 1.5,
        sizeRandomness: 1.0,
        cameraDistance: 15
      };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOut
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Particles Background */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <Particles
          particleColors={particleConfig.particleColors}
          particleCount={particleConfig.particleCount}
          particleSpread={particleConfig.particleSpread}
          speed={particleConfig.speed}
          particleBaseSize={particleConfig.particleBaseSize}
          moveParticlesOnHover={particleConfig.moveParticlesOnHover}
          alphaParticles={particleConfig.alphaParticles}
          disableRotation={particleConfig.disableRotation}
          particleHoverFactor={particleConfig.particleHoverFactor}
          sizeRandomness={particleConfig.sizeRandomness}
          cameraDistance={particleConfig.cameraDistance}
        />
      </div>
      
      <main className="flex flex-col text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="flex flex-col justify-center items-center sm:min-h-screen py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl tracking-tight font-funnel-display sm:text-6xl lg:text-[80px] font-extrabold text-neutral-900 dark:text-white max-w-5xl"
            variants={titleVariants}
          >
            Master{" "}
            <span className="bg-gradient-to-br from-green-400 to-cyan-500 bg-clip-text text-transparent">
              Java{" "}
            </span>
            Programming efficiently with{" "}
            <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Javaistic{" "}
            </span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-4xl"
            variants={itemVariants}
          >
            Interactive, fast-paced learning for absolute beginners to advanced
            learners. A free and open-source platform to learn Java programming.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link href="/docs">
                <Button
                  size="lg"
                  className="text-lg py-6 font-semibold dark:text-foreground rounded-lg bg-blue-600 hover:bg-blue-700"
                >
                  Start Learning Now
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
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
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="max-w-6xl mx-auto px-4 sm:px-10 md:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="text-center mt-5 mb-4"
            variants={itemVariants}
          >
            <h1 className="text-4xl sm:text-5xl font-bold font-funnel-display">
              Why learn Java with Javaistic?
            </h1>
            <p className="mt-4 text-lg font-medium dark:text-neutral-400 mx-auto">
              Designed to make learning Java fun, practical, and truly
              beginner-friendly.
            </p>
          </motion.div>

          {/* Section: Docs */}
                     <motion.article 
             className="mx-auto mb-10 sm:space-x-10 flex flex-col items-center py-10 sm:flex-row"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
           >
            <motion.div 
              className="w-full sm:w-1/2"
              variants={imageVariants}
            >
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
            </motion.div>
            <motion.div 
              className="w-full sm:w-1/2 text-left"
              variants={textVariants}
            >

              <h2 className="mb-6 font-funnel-display text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
                Quality over Quantity
              </h2>
              <p className="mb-8 text-xl font-medium leading-relaxed text-muted-foreground">
                We focus on quality — not noise. Every piece of content is crafted
                to be clear, engaging, and easy to understand. Learn Java with
                beautifully designed, beginner-friendly docs — all completely
                free.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/docs">
                  <Button size="lg" className="text-lg font-semibold">
                    <span className="flex items-center">
                      Explore the Docs
                      <ArrowRightIcon className="ml-2 !size-5" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.article>

          {/* Section: Coding */}
                     <motion.article 
             className="flex flex-col-reverse sm:flex-row items-center py-14 space-y-10 sm:space-y-0 sm:space-x-10"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
           >
            <motion.div 
              className="w-full sm:w-1/2 text-left"
              variants={textVariants}
            >
              <h2 className="mb-6 text-3xl sm:text-4xl font-funnel-display font-extrabold text-foreground">
                Coding Made Fun
              </h2>
              <p className="mb-8 text-xl font-medium leading-relaxed text-muted-foreground">
                Jump into hands-on coding right away or explore our step-by-step
                breakdowns of real Java programs. Whether you&apos;re a beginner or
                brushing up, it&apos;s coding made enjoyable.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/programs">
                  <Button size="lg" className="text-lg font-semibold">
                    <span className="flex items-center">
                      <CodeIcon className="mr-2 !size-5" />
                      Try a Program Now
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="w-full sm:w-1/2"
              variants={imageVariants}
            >
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
            </motion.div>
          </motion.article>

          {/* Section: GitHub */}
                     <motion.article 
             className="flex flex-col sm:flex-row items-center py-14 space-y-10 sm:space-y-0 sm:space-x-10"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
           >
            <motion.div 
              className="w-full sm:w-1/2"
              variants={imageVariants}
            >
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
            </motion.div>
            <motion.div 
              className="w-full sm:w-1/2 text-left"
              variants={textVariants}
            >
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://github.com/javaistic/javaistic" target="_blank">
                  <Button size="lg" className="text-lg font-semibold">
                    <span className="flex items-center">
                      Contribute on GitHub
                      <ExternalLinkIcon className="ml-2 !size-5" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.article>
        </motion.section>

        {/* CTA */}
                 <motion.section 
           className="py-20 max-w-6xl"
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
         >
          <motion.div 
            className="mx-auto rounded-3xl bg-gradient-to-br from-indigo-900 to-sky-700 px-6 py-16 text-center text-white shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-4 text-4xl font-bold font-funnel-display">
              Ready to become a Java Pro?
            </h2>
            <p className="mb-8 text-lg font-medium dark:text-secondary-foreground">
              Begin your Java journey now — no credit card, no sign-up, just pure
              learning.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/docs">
                <Button
                  size="lg"
                  className="inline-flex bg-white text-black hover:bg-white items-center text-lg font-semibold"
                >
                  Start Learning
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
