"use client";

import React, { useEffect, useRef, useState } from "react";
import { baseOptions } from "@/app/layout.config";
import { Footer } from "@/components/footer";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { JSX } from "react/jsx-runtime";

export default function PlayGround(): JSX.Element {
  const DEFAULT_CODE = `public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}`;

  const [code, setCode] = useState<string>(() => {
    try {
      if (typeof window === "undefined") return DEFAULT_CODE;
      return localStorage.getItem("javaistic_code") || DEFAULT_CODE;
    } catch {
      return DEFAULT_CODE;
    }
  });

  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<string>("");
  const [examplesOpen, setExamplesOpen] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("javaistic_code", code);
      }
    } catch {}
  }, [code]);

  const showToast = (msg: string, ms = 1800): void => {
    setToast(msg);
    window.setTimeout(() => setToast(""), ms);
  };

  const runCode = async (): Promise<void> => {
    setLoading(true);
    setOutput("");
    try {
      const res = await fetch("/api/playground", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        const text = await res.text();
        setOutput(`Error: ${res.status} ${text}`);
      } else {
        const data = await res.json();
        setOutput(
          (data && data.run && (data.run.output as string)) || "No output",
        );
      }
    } catch {
      setOutput("Error executing code");
    } finally {
      setLoading(false);
    }
  };

  const clearCode = (): void => {
    setCode(DEFAULT_CODE);
    showToast("Reset to default template");
  };

  const copyCode = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      showToast("Code copied to clipboard");
    } catch {
      showToast("Unable to copy");
    }
  };

  const downloadCode = (): void => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Main.java";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("Downloaded Main.java");
  };

  const EXAMPLES: Record<string, string> = {
    "Hello World": `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello,Welcome to Javaistic PlayGround");
    }
}`,
    "For Loop": `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}`,
    "Sum of Two nums": `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        System.out.println("Sum = " + (a + b));
    }
}`,
    "Prime Number Check": `public class Main {
    public static void main(String[] args) {
        int num = 17;
        boolean isPrime = num > 1;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        System.out.println(num + (isPrime ? " is Prime" : " is Not Prime"));
    }
}`,
    "Odd Even Check": `public class Main {
    public static void main(String[] args) {
        int num = 24;
        System.out.println(num + (num % 2 == 0 ? " is Even" : " is Odd"));
    }
}`,
  };

  const loadExample = (key: string): void => {
    setCode(EXAMPLES[key]);
    setExamplesOpen(false);
    showToast(`${key} loaded`);
  };

  const clearOutput = (): void => setOutput("");

  const getLineNumbers = (text: string): string =>
    Array.from(
      { length: Math.max(1, text.split("\n").length) },
      (_, i) => i + 1,
    ).join("\n");

  useEffect(() => {
    const t = textareaRef.current;
    const l = lineRef.current;
    if (!t || !l) return;
    const sync = () => {
      l.scrollTop = t.scrollTop;
    };
    t.addEventListener("scroll", sync);
    return () => t.removeEventListener("scroll", sync);
  }, []);

  return (
    <>
      <HomeLayout
        {...baseOptions}
        style={{ "--spacing-fd-container": "1280px" } as React.CSSProperties}
      >
        <div className="mb-5 space-y-6">
          <h1 className="font-funnel-display mb- mx-auto -mt-10 max-w-3xl text-center text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-[80px] dark:text-white">
            Javaistic{" "}
            <span className="bg-gradient-to-br from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Playground
            </span>
          </h1>

          <div className="m-auto flex flex-col gap-6 px-4 lg:flex-row">
            <div className="min-h-[70vh] flex-1 rounded-xl border bg-black p-3 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-1">
                <span className="font-mono text-sm text-white">Main.java</span>
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={runCode}
                    className="cursor-pointer rounded-md bg-green-400 px-3 py-1 text-sm text-white shadow hover:bg-green-500"
                  >
                    {loading ? "▶️....." : "▶️ Run"}
                  </button>

                  <button
                    onClick={clearCode}
                    className="cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-sm text-black shadow hover:bg-gray-300 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-400"
                  >
                    🔄 Clear
                  </button>

                  <button
                    onClick={copyCode}
                    className="cursor-pointer rounded-md bg-blue-300 px-3 py-1 text-sm text-white shadow hover:bg-blue-400"
                  >
                    📋 Copy
                  </button>

                  <button
                    onClick={downloadCode}
                    className="cursor-pointer rounded-md bg-yellow-300 px-3 py-1 text-sm text-black shadow hover:bg-yellow-400"
                  >
                    📥 Download
                  </button>

                  <div className="relative">
                    <button
                      onClick={() => setExamplesOpen((s) => !s)}
                      className="cursor-pointer rounded-md bg-purple-400 px-3 py-1 text-sm text-white shadow hover:bg-purple-500"
                    >
                      Examples ▾
                    </button>
                    {examplesOpen && (
                      <ul className="absolute z-10 mt-2 w-56 rounded-md border bg-white p-2 shadow dark:bg-gray-700">
                        {Object.keys(EXAMPLES).map((key) => (
                          <li key={key}>
                            <button
                              onClick={() => loadExample(key)}
                              className="w-full rounded px-2 py-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              {key}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <button
                  onClick={clearOutput}
                  className="cursor-pointer rounded-md bg-red-400 px-3 py-1 text-sm text-white shadow hover:bg-red-500"
                >
                  🔄 Clear Output
                </button>
              </div>

              <div className="relative m-2 flex h-[60vh] overflow-hidden rounded border">
                <pre
                  ref={lineRef as React.RefObject<HTMLPreElement>}
                  className="overflow-hidden px-3 py-3 text-right text-sm text-white select-none"
                  style={{ width: 50 }}
                >
                  {getLineNumbers(code)}
                </pre>

                <textarea
                  ref={textareaRef}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck={false}
                  className="h-full flex-1 resize-none overflow-auto bg-gray-800/90 p-3 font-mono text-sm text-orange-400 outline-none dark:bg-[#0c1116] dark:text-[#ffaa00]"
                />
              </div>
            </div>

            <div className="m-2 flex min-h-[70vh] flex-1 flex-col rounded-xl border bg-gray-900 p-3 shadow-lg dark:bg-gray-900">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-white dark:text-gray-500">
                  Output
                </span>
              </div>
              <pre className="h-[60vh] flex-1 overflow-y-auto rounded bg-fuchsia-50 p-3 text-lg whitespace-pre-wrap text-red-500 dark:bg-blue-300/10 dark:text-green-300">
                {output || "Program output will appear here..."}
              </pre>
            </div>
          </div>

          {toast && (
            <div className="fixed right-6 bottom-6 rounded-md bg-black/80 px-4 py-2 text-white shadow">
              {toast}
            </div>
          )}
        </div>
      </HomeLayout>
      <Footer />

      <style>
        {`
          :root {
            --editor-bg: #cde7ff;
            --editor-text: #002b5c;
            --line-bg: #b9dbff;
            --line-text: #555;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --editor-bg: #00264d;
              --editor-text: #b3d9ff;
              --line-bg: #001933;
              --line-text: #8899aa;
            }
          }
        `}
      </style>
    </>
  );
}
