"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  Play,
  Loader2,
  RotateCw,
  Copy,
  DownloadCloud,
  ChevronDown,
  Trash2,
  ZoomIn,
  ZoomOut,
  FileText,
} from "lucide-react";

const DEFAULT_CODE = `public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}`;

const EXAMPLES: Record<string, string> = {
  "Hello World": `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello,Welcome to Javaistic PlayGround");\n    }\n}`,
  "For Loop": `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Count: " + i);\n        }\n    }\n}`,
  "Sum of Two nums": `public class Main {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 5;\n        System.out.println("Sum = " + (a + b));\n    }\n}`,
  "Prime Number Check": `public class Main {\n    public static void main(String[] args) {\n        int num = 17;\n        boolean isPrime = num > 1;\n        for (int i = 2; i <= Math.sqrt(num); i++) {\n            if (num % i == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n        System.out.println(num + (isPrime ? " is Prime" : " is Not Prime"));\n    }\n}`,
  "Odd Even Check": `public class Main {\n    public static void main(String[] args) {\n        int num = 24;\n        System.out.println(num + (num % 2 == 0 ? " is Even" : " is Odd"));\n    }\n}`,
};

const EDITOR_HEIGHT = "h-[300px]";
const DEFAULT_FONT_SIZE = 13;

export default function PlayGround(): React.JSX.Element {
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
  const [fontSize, setFontSize] = useState<number>(() => {
    try {
      if (typeof window === "undefined") return DEFAULT_FONT_SIZE;
      const raw = localStorage.getItem("javaistic_fontSize");
      const n = raw ? parseInt(raw, 10) : NaN;
      return Number.isFinite(n) ? n : DEFAULT_FONT_SIZE;
    } catch {
      return DEFAULT_FONT_SIZE;
    }
  });
  const [toast, setToast] = useState<string>("");
  const [examplesOpen, setExamplesOpen] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineRef = useRef<HTMLPreElement>(null);

  // Debounce saving to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    let id: number | undefined;
    try {
      id = window.setTimeout(() => {
        try {
          localStorage.setItem("javaistic_code", code);
        } catch {}
      }, 400);
    } catch {}
    return () => {
      if (id) window.clearTimeout(id);
    };
  }, [code]);

  // Persist font size (debounced)
  useEffect(() => {
    if (typeof window === "undefined") return;
    let id: number | undefined;
    try {
      id = window.setTimeout(() => {
        try {
          localStorage.setItem("javaistic_fontSize", String(fontSize));
        } catch {}
      }, 300);
    } catch {}
    return () => {
      if (id) window.clearTimeout(id);
    };
  }, [fontSize]);

  const showToast = (msg: string, ms = 1800): void => {
    setToast(msg);
    window.setTimeout(() => setToast(""), ms);
  };

  const runCode = useCallback(async (): Promise<void> => {
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
          (
            (data && data.run && (data.run.output as string)) ||
            "No output"
          ).trim(),
        );
      }
    } catch {
      setOutput("Error executing code");
    } finally {
      setLoading(false);
    }
  }, [code]);

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
  const copyOutput = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(output || "");
      showToast("Output copied to clipboard");
    } catch {
      showToast("Unable to copy output");
    }
  };

  const changeFontSize = (delta: number): void => {
    setFontSize((s) => Math.max(10, Math.min(24, s + delta)));
  };
  const loadExample = useCallback(
    (key: string): void => {
      setCode(EXAMPLES[key]);
      setExamplesOpen(false);
      showToast(`${key} loaded`);
    },
    [showToast],
  );

  const clearOutput = (): void => setOutput("");

  const lineNumbers = useMemo(() => {
    const lines = Math.max(1, code.split("\n").length);
    return Array.from({ length: lines }, (_, i) => i + 1).join("\n");
  }, [code]);

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

  // Keyboard shortcut: Ctrl/Cmd+Enter to run
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isEnter = e.key === "Enter";
      const isMod = e.ctrlKey || e.metaKey;
      if (isMod && isEnter) {
        e.preventDefault();
        void runCode();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [runCode]);

  return (
    <>
      <div className="m-1 h-full max-h-screen space-y-4">
        <div className="m-auto flex h-full min-h-[calc(100vh-0.5rem)] flex-col gap-4 lg:flex-row lg:items-start">
          <div className="h-screen flex-1 rounded-xl border bg-neutral-50 p-2 shadow-sm dark:bg-neutral-900">
            <div className="mt-2 mb-2 flex flex-wrap items-center justify-between gap-1">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
                <span className="font-mono text-xs text-neutral-700 dark:text-neutral-300">
                  Main.java
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={runCode}
                    className="flex cursor-pointer items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-800 shadow-sm hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/40 dark:text-neutral-100 dark:hover:bg-neutral-700"
                    title="Run (Ctrl/Cmd+Enter)"
                    aria-label="Run code"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    <span className="text-xs">Run</span>
                  </button>

                  <button
                    onClick={() => changeFontSize(-1)}
                    className="cursor-pointer rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-800 shadow-sm hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/40 dark:text-neutral-100 dark:hover:bg-neutral-700"
                    title="Decrease font size"
                    aria-label="Decrease editor font size"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>

                  <span className="px-2 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    {fontSize}px
                  </span>

                  <button
                    onClick={() => changeFontSize(1)}
                    className="cursor-pointer rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-800 shadow-sm hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/40 dark:text-neutral-100 dark:hover:bg-neutral-700"
                    title="Increase font size"
                    aria-label="Increase editor font size"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>

                  <button
                    onClick={clearCode}
                    className="flex cursor-pointer items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-800 shadow-sm hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/40 dark:text-neutral-100 dark:hover:bg-neutral-700"
                    title="Reset to default template"
                    aria-label="Reset code"
                  >
                    <RotateCw className="h-4 w-4" />
                    <span className="text-xs">Reset</span>
                  </button>

                  <button
                    onClick={copyCode}
                    className="cursor-pointer rounded border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs text-sky-800 shadow-sm hover:bg-sky-100 dark:border-sky-800/40 dark:bg-sky-900/20 dark:text-sky-200 dark:hover:bg-sky-800/30"
                    title="Copy code"
                    aria-label="Copy code"
                  >
                    <Copy className="h-4 w-4" />
                  </button>

                  <button
                    onClick={downloadCode}
                    className="flex cursor-pointer items-center gap-1 rounded border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs text-amber-800 shadow-sm hover:bg-amber-100 dark:border-amber-800/30 dark:bg-amber-900/10 dark:text-amber-200 dark:hover:bg-amber-800/20"
                    title="Download code"
                    aria-label="Download code"
                  >
                    <DownloadCloud className="h-4 w-4" />
                    <span className="text-xs">Download</span>
                  </button>

                  <div className="relative">
                    <button
                      onClick={() => setExamplesOpen((s) => !s)}
                      className="flex cursor-pointer items-center gap-1 rounded border border-violet-200 bg-violet-50 px-2 py-0.5 text-xs text-violet-800 shadow-sm hover:bg-violet-100 dark:border-violet-800/30 dark:bg-violet-900/10 dark:text-violet-200 dark:hover:bg-violet-800/20"
                      title="Examples"
                      aria-haspopup="menu"
                      aria-expanded={examplesOpen}
                    >
                      <ChevronDown className="h-4 w-4" />
                      <span className="text-xs">Examples</span>
                    </button>
                    {examplesOpen && (
                      <ul className="absolute z-10 mt-2 w-44 rounded-md border bg-white p-2 shadow dark:bg-neutral-700">
                        {Object.keys(EXAMPLES).map((key) => (
                          <li key={key}>
                            <button
                              onClick={() => loadExample(key)}
                              className="w-full rounded px-2 py-1 text-left text-xs hover:bg-neutral-100 dark:hover:bg-neutral-600"
                            >
                              {key}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* output controls moved to the output panel header */}
            </div>
            <div
              className={`${EDITOR_HEIGHT} relative m-1 flex overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-700`}
            >
              <pre
                ref={lineRef as React.RefObject<HTMLPreElement>}
                className="overflow-hidden bg-neutral-100 px-2 py-2 text-right text-xs text-neutral-500 select-none dark:bg-neutral-950"
                style={{ width: 25 }}
                aria-hidden="true"
              >
                {lineNumbers}
              </pre>

              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                aria-label="Java code editor"
                className="h-full flex-1 resize-none overflow-auto bg-transparent p-2 font-mono text-neutral-800 outline-none dark:text-neutral-200"
                style={{ fontSize: `${fontSize}px` }}
              />
            </div>
          </div>
          <div className="m-1 flex min-h-[50vh] flex-1 flex-col rounded-xl border bg-neutral-50 p-2 shadow-sm dark:bg-neutral-900">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  Output
                </span>
                <span className="ml-2 text-xs text-neutral-400">
                  (Ctrl/Cmd+Enter)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyOutput}
                  className="cursor-pointer rounded border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs text-sky-800 shadow-sm hover:bg-sky-100 dark:border-sky-800/40 dark:bg-sky-900/20 dark:text-sky-200 dark:hover:bg-sky-800/30"
                  title="Copy output"
                  aria-label="Copy output"
                >
                  <Copy className="h-5 w-5" />
                </button>
                <button
                  onClick={clearOutput}
                  className="cursor-pointer rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-800 shadow-sm hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/40 dark:text-neutral-100 dark:hover:bg-neutral-700"
                  title="Clear output"
                  aria-label="Clear output"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <pre
              className={`${EDITOR_HEIGHT} flex-1 overflow-y-auto rounded bg-white p-2 text-sm whitespace-pre-wrap text-neutral-900 dark:bg-neutral-900/20 dark:text-neutral-200`}
            >
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
