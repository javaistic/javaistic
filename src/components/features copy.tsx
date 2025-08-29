"use client";

import {
  Accessibility,
  BookOpen,
  Bug,
  Code,
  FileText,
  GitBranch,
  Globe,
  Heart,
  Layers,
  MessageCircle,
  Moon,
  Play,
  Search,
  Server,
  Shield,
  Smartphone,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          🔥 Features
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-5xl">
          Your Complete Java Learning Journey
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Complete Learning Platform - Main Feature */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <div className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-medium tracking-tight text-neutral-950">
                    🎯 Complete Learning Platform
                  </h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        📚 Comprehensive Documentation
                      </p>
                      <p className="text-xs text-neutral-600">
                        From Java basics to advanced OOP concepts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        💻 Interactive Programs
                      </p>
                      <p className="text-xs text-neutral-600">
                        17+ practical Java programs with explanations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Play className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        🎮 Live Playground
                      </p>
                      <p className="text-xs text-neutral-600">
                        Built-in Java editor with instant execution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Search className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        🔍 Advanced Search
                      </p>
                      <p className="text-xs text-neutral-600">
                        Intelligent search across all content
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="@container relative min-h-32 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-6 top-4 bottom-4 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl">
                  <div className="p-4 text-white">
                    <div className="rounded bg-white/10 p-2 font-mono text-xs">
                      <div className="text-yellow-300">public class</div>
                      <div className="ml-2 text-blue-300">HelloJava &#123;</div>
                      <div className="ml-4 text-green-300">
                        public static void main...
                      </div>
                      <div className="ml-6 text-neutral-200">
                        System.out.println(&quot;Hello!&quot;);
                      </div>
                      <div className="ml-2 text-blue-300">&#125;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>

          {/* Modern User Experience */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-medium tracking-tight text-neutral-950">
                    🎨 Modern UX
                  </h3>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4 text-neutral-600" />
                    <p className="text-sm text-neutral-600">
                      🌓 Dark/Light Mode
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-neutral-600" />
                    <p className="text-sm text-neutral-600">
                      📱 Mobile-First Design
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-neutral-600" />
                    <p className="text-sm text-neutral-600">
                      ⚡ Lightning Fast
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Accessibility className="h-4 w-4 text-neutral-600" />
                    <p className="text-sm text-neutral-600">
                      ♿ Accessibility First
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-6 max-lg:pb-8 sm:px-10 lg:pb-4">
                <div className="w-full max-w-xs">
                  <div className="rounded-lg bg-neutral-900 p-3 shadow-xl">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="rounded bg-neutral-800 p-2 font-mono text-xs text-green-400">
                      $ java HelloWorld
                      <br />
                      Hello, Java World! 🚀
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>

          {/* Developer-Friendly */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-medium tracking-tight text-neutral-950">
                    🛠️ Developer-Friendly
                  </h3>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <p className="text-sm text-neutral-600">
                      🆓 100% Free & Open Source
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-neutral-600" />
                    <p className="text-sm text-neutral-600">
                      🔧 Modern Tech Stack
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-neutral-600" />
                    <p className="text-sm text-neutral-600">
                      📖 MDX-Powered Content
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-neutral-600" />
                    <p className="text-sm text-neutral-600">
                      🚀 Vercel Deployment
                    </p>
                  </div>
                </div>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-4 lg:pb-2">
                <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-3 font-mono text-xs text-white shadow-lg">
                  <div className="opacity-90">TypeScript + Tailwind CSS</div>
                  <div className="opacity-90">Next.js 15 + Fumadocs</div>
                  <div className="opacity-90">⚡ Powered by Bun</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>

          {/* Community & Privacy */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-medium tracking-tight text-neutral-950">
                    🤝 Community & Privacy
                  </h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        💬 GitHub Discussions
                      </p>
                      <p className="text-xs text-neutral-600">
                        Active community support
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bug className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        🐛 Issue Tracking
                      </p>
                      <p className="text-xs text-neutral-600">
                        Transparent development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        🌍 Global Accessibility
                      </p>
                      <p className="text-xs text-neutral-600">
                        Available worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" />
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        🔐 Privacy & Security
                      </p>
                      <p className="text-xs text-neutral-600">
                        Privacy-first approach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative min-h-24 w-full grow">
                <div className="absolute top-4 right-4 bottom-4 left-4 overflow-hidden rounded-lg bg-gradient-to-br from-green-500 to-blue-600 shadow-xl">
                  <div className="p-4 text-white">
                    <div className="text-center">
                      <div className="mb-2 text-2xl">🏆</div>
                      <div className="text-sm font-semibold">
                        Quality Content
                      </div>
                      <div className="mt-1 text-xs opacity-90">
                        📝 Structured Learning Path
                        <br />
                        💡 Best Practices
                        <br />
                        🔄 Regular Updates
                        <br />
                        👨‍👩‍👧‍👦 Family-Friendly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
