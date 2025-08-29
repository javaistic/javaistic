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
  Code,
  Terminal,
  Settings,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

const DEFAULT_CODE = `public class HelloWorld {
    public static void main(String[] args) {
        // Welcome to Javaistic Code Compiler
        // Write your Java code here and click Run to execute

        System.out.println("Hello, World!");
        System.out.println("Welcome to Java programming!");

        // Try some basic operations
        int x = 10;
        int y = 20;
        System.out.println("Sum: " + (x + y));
    }
}`;

const EXAMPLES: Record<string, string> = {
  "Hello World": `public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Welcome to Javaistic Code Compiler!");
        System.out.println("Start coding your Java programs here.");
        System.out.println("This compiler supports full Java syntax.");
    }
}`,
  "Variables & Data Types": `public class DataTypes {
    public static void main(String[] args) {
        // Primitive data types
        int age = 25;
        double salary = 50000.75;
        boolean isEmployee = true;
        char grade = 'A';
        String name = "John Doe";

        System.out.println("Employee Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
        System.out.println("Is Employee: " + isEmployee);
        System.out.println("Performance Grade: " + grade);
    }
}`,
  "For Loop": `public class Main {
    public static void main(String[] args) {
        System.out.println("Counting from 1 to 10:");
        for (int i = 1; i <= 10; i++) {
            System.out.println("Count: " + i);
        }

        System.out.println("\\nEven numbers from 2 to 20:");
        for (int i = 2; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
    }
}`,
  Arrays: `public class Main {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = {1, 2, 3, 4, 5};
        String[] colors = {"red", "blue", "green", "yellow"};

        System.out.println("Numbers array:");
        for (int num : numbers) {
            System.out.print(num + " ");
        }

        System.out.println("\\n\\nColors array:");
        for (String color : colors) {
            System.out.println("- " + color);
        }
    }
}`,
  Methods: `public class Main {
    public static void main(String[] args) {
        int result = addNumbers(15, 25);
        System.out.println("Sum: " + result);

        greetUser("Developer");

        double area = calculateCircleArea(5.0);
        System.out.println("Circle area (radius 5): " + area);
    }

    public static int addNumbers(int a, int b) {
        return a + b;
    }

    public static void greetUser(String name) {
        System.out.println("Hello, " + name + "! Welcome to Java programming.");
    }

    public static double calculateCircleArea(double radius) {
        return Math.PI * radius * radius;
    }
}`,
  "Prime Number Check": `public class Main {
    public static void main(String[] args) {
        int[] testNumbers = {2, 17, 25, 29, 100};

        System.out.println("Prime Number Checker:");
        System.out.println("====================");

        for (int num : testNumbers) {
            boolean isPrime = checkPrime(num);
            System.out.println(num + " is " + (isPrime ? "Prime" : "Not Prime"));
        }
    }

    public static boolean checkPrime(int num) {
        if (num <= 1) return false;
        if (num == 2) return true;
        if (num % 2 == 0) return false;

        for (int i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}`,
  "Classes & Objects": `class Student {
    private String name;
    private int age;
    private double gpa;

    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    public void displayInfo() {
        System.out.println("Student: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.println("Status: " + (gpa >= 3.5 ? "Honor Student" : "Regular Student"));
        System.out.println("---");
    }
}

public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Alice", 20, 3.8);
        Student student2 = new Student("Bob", 19, 3.2);

        student1.displayInfo();
        student2.displayInfo();
    }
}`,
};

type ExecutionStatus = "idle" | "compiling" | "running" | "success" | "error";

interface CompileResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime?: number;
  memoryUsed?: number;
}

const EDITOR_HEIGHT = "h-[400px]";
const DEFAULT_FONT_SIZE = 14;

export default function JavaCompiler(): React.JSX.Element {
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
  const [status, setStatus] = useState<ExecutionStatus>("idle");
  const [executionTime, setExecutionTime] = useState<number>(0);
  const [compileTimeMs, setCompileTimeMs] = useState<number | null>(null);
  const [runTimeMs, setRunTimeMs] = useState<number | null>(null);
  const [exitCode, setExitCode] = useState<number | null>(null);
  const [memoryKb, setMemoryKb] = useState<number | null>(null);
  const [remoteStage, setRemoteStage] = useState<string | null>(null);
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

  const showToast = (
    msg: string,
    type: "success" | "error" | "info" = "info",
    ms = 2500,
  ): void => {
    setToast(msg);
    setTimeout(() => setToast(""), ms);
  };

  const runCode = useCallback(async (): Promise<void> => {
    if (!code.trim()) {
      showToast("Please write some code first!", "error");
      return;
    }

    setLoading(true);
    setStatus("compiling");
    // reset previous run metadata
    setCompileTimeMs(null);
    setRunTimeMs(null);
    setExitCode(null);
    setMemoryKb(null);
    setRemoteStage(null);
    const startTime = Date.now();

    try {
      const res = await fetch("/api/playground", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ code: code.trim() }),
      });

      const endTime = Date.now();
      setExecutionTime(endTime - startTime);

      if (!res.ok) {
        const errorText = await res.text();
        setStatus("error");
        setOutput(
          `Compilation/Execution Error (${res.status}):\n${errorText || "Unknown error occurred"}`,
        );
        showToast("Code execution failed", "error");
        return;
      }

      const data = await res.json();

      // Support two shapes:
      // 1) { status: 'success'|'error', output: string, stage?: 'compile'|'run' }
      // 2) New runner shape: { status, stage, compile_time_ms, execution_time_ms, exit_code, stdout, stderr, memory_kb }
      if (data && typeof data === "object") {
        // New runner shape detection
        const hasRunnerFields =
          "stdout" in data ||
          "stderr" in data ||
          "compile_time_ms" in data ||
          "execution_time_ms" in data;

        if (hasRunnerFields) {
          // Map and display runner fields
          const statusField =
            data.status || (data.exit_code === 0 ? "success" : "error");
          const stageField = data.stage || null;
          setRemoteStage(stageField);
          setCompileTimeMs(data.compile_time_ms ?? null);
          setRunTimeMs(data.execution_time_ms ?? null);
          setExitCode(
            typeof data.exit_code === "number" ? data.exit_code : null,
          );
          setMemoryKb(
            typeof data.memory_kb === "number" ? data.memory_kb : null,
          );
          setExecutionTime(data.execution_time_ms ?? Date.now() - startTime);

          if (statusField === "error") {
            setStatus("error");
            // Prefer stderr for errors, otherwise show stdout or generic message
            const errText =
              (data.stderr && String(data.stderr).trim()) ||
              (data.stdout && String(data.stdout).trim()) ||
              data.output ||
              "Compilation/Runtime error occurred.";
            setOutput(errText);
            showToast("Code execution failed", "error");
          } else {
            setStatus("success");
            const outText =
              (data.stdout && String(data.stdout)) || data.output || "";
            setOutput(outText);
            showToast("Code executed successfully!", "success");
          }
        } else {
          // Legacy shape - be tolerant: prefer stdout/stderr if present and fill metadata when available
          const legacyStdout = data && (data.stdout ?? data.output ?? "");
          const legacyStderr = data && (data.stderr ?? data.output ?? "");

          if (data.status === "error") {
            setStatus("error");
            const errText =
              String(legacyStderr || "").trim() ||
              "Compilation/Runtime error occurred.";
            setOutput(errText);
            if (typeof data.compile_time_ms === "number")
              setCompileTimeMs(data.compile_time_ms);
            if (typeof data.execution_time_ms === "number")
              setRunTimeMs(data.execution_time_ms);
            if (typeof data.exit_code === "number") setExitCode(data.exit_code);
            if (typeof data.memory_kb === "number") setMemoryKb(data.memory_kb);
            showToast("Code execution failed", "error");
          } else if (data.status === "success") {
            setStatus("success");
            const outText = String(legacyStdout || "").trim();
            setOutput(outText);
            // if server returned executionTime use it
            if (typeof data.executionTime === "number")
              setExecutionTime(data.executionTime);
            if (typeof data.compile_time_ms === "number")
              setCompileTimeMs(data.compile_time_ms);
            if (typeof data.execution_time_ms === "number")
              setRunTimeMs(data.execution_time_ms);
            if (typeof data.exit_code === "number") setExitCode(data.exit_code);
            if (typeof data.memory_kb === "number") setMemoryKb(data.memory_kb);
            showToast("Code executed successfully!", "success");
          } else {
            setStatus("error");
            setOutput(JSON.stringify(data));
            showToast("Unexpected response from server", "error");
          }
        }
      } else {
        setStatus("error");
        setOutput("Invalid response from server");
        showToast("Unexpected response from server", "error");
      }
    } catch (error) {
      console.error("Execution error:", error);
      setStatus("error");
      setOutput(
        "Failed to connect to the execution server. Please check your internet connection and try again.",
      );
      showToast("Network error occurred", "error");
      setExecutionTime(0);
    } finally {
      setLoading(false);
    }
  }, [code]);

  const clearCode = (): void => {
    setCode(DEFAULT_CODE);
    setOutput("");
    setStatus("idle");
    setExecutionTime(0);
    showToast("Code reset to default template", "info");
  };

  const copyCode = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      showToast("Code copied to clipboard!", "success");
    } catch {
      showToast("Failed to copy code", "error");
    }
  };

  const downloadCode = (): void => {
    const blob = new Blob([code], { type: "text/java" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Main.java";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("Main.java downloaded successfully!", "success");
  };

  const copyOutput = async (): Promise<void> => {
    if (!output) {
      showToast("No output to copy", "error");
      return;
    }
    try {
      await navigator.clipboard.writeText(output);
      showToast("Output copied to clipboard!", "success");
    } catch {
      showToast("Failed to copy output", "error");
    }
  };

  const changeFontSize = (delta: number): void => {
    setFontSize((s) => Math.max(10, Math.min(24, s + delta)));
  };

  const loadExample = useCallback((key: string): void => {
    setCode(EXAMPLES[key]);
    setExamplesOpen(false);
    setOutput("");
    setStatus("idle");
    setExecutionTime(0);
    showToast(`${key} example loaded`, "success");
  }, []);

  const clearOutput = (): void => {
    setOutput("");
    setStatus("idle");
    setExecutionTime(0);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-blue-600 p-2">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  Java Code Compiler
                </h1>
                <div className="flex items-center space-x-3">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Write, compile, and run Java code online
                  </p>
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                    Beta
                  </span>
                  <span className="text-xs text-slate-400">v1.0</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {status !== "idle" && (
                <div className="flex items-center space-x-2 rounded-full border px-3 py-1.5 text-sm">
                  {status === "compiling" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                      <span className="text-blue-600 dark:text-blue-400">
                        Compiling...
                      </span>
                    </>
                  )}
                  {status === "running" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-amber-600" />
                      <span className="text-amber-600 dark:text-amber-400">
                        Running...
                      </span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 dark:text-green-400">
                        Success
                      </span>
                      {executionTime > 0 && (
                        <span className="text-xs text-slate-500">
                          ({executionTime}ms)
                        </span>
                      )}
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span className="text-red-600 dark:text-red-400">
                        Error
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Code Editor Panel */}
          <div className="rounded-xl border border-slate-200/60 bg-white/70 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/70">
            {/* Editor Header */}
            <div className="border-b border-slate-200/60 p-4 dark:border-slate-700/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  <span className="font-mono text-sm font-medium text-slate-700 dark:text-slate-300">
                    Main.java
                  </span>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-1">
                  <button
                    onClick={runCode}
                    disabled={loading}
                    className="flex transform items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 font-medium text-white shadow-md transition hover:-translate-y-0.5 disabled:opacity-60"
                    title="Run Code (Ctrl/Cmd+Enter)"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    <span>Run Code</span>
                  </button>

                  <div className="mx-2 h-6 w-px bg-slate-300 dark:bg-slate-600"></div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => changeFontSize(-1)}
                      className="rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                      title="Decrease font size"
                    >
                      <ZoomOut className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                    </button>
                    <span className="min-w-[35px] px-2 text-center text-xs text-slate-500 dark:text-slate-400">
                      {fontSize}px
                    </span>
                    <button
                      onClick={() => changeFontSize(1)}
                      className="rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                      title="Increase font size"
                    >
                      <ZoomIn className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                    </button>
                  </div>

                  <div className="mx-2 h-6 w-px bg-slate-300 dark:bg-slate-600"></div>

                  <button
                    onClick={clearCode}
                    className="rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
                    title="Reset code"
                  >
                    <RotateCw className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  </button>

                  <button
                    onClick={copyCode}
                    className="rounded-lg p-2 transition-colors hover:bg-green-50 dark:hover:bg-green-900/20"
                    title="Copy code"
                  >
                    <Copy className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </button>

                  <button
                    onClick={downloadCode}
                    className="rounded-lg p-2 transition-colors hover:bg-amber-50 dark:hover:bg-amber-900/20"
                    title="Download code"
                  >
                    <DownloadCloud className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </button>

                  {/* Examples Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setExamplesOpen(!examplesOpen)}
                      className="flex items-center space-x-1 rounded-lg px-3 py-2 transition-colors hover:bg-violet-50 dark:hover:bg-violet-900/20"
                      title="Load examples"
                    >
                      <ChevronDown className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                      <span className="text-sm text-violet-600 dark:text-violet-400">
                        Examples
                      </span>
                    </button>
                    {examplesOpen && (
                      <div className="absolute right-0 z-50 mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">
                        <div className="py-2">
                          <div className="px-3 py-2 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                            Code Examples
                          </div>
                          {Object.keys(EXAMPLES).map((key) => (
                            <button
                              key={key}
                              onClick={() => loadExample(key)}
                              className="w-full px-3 py-2 text-left text-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-700"
                            >
                              {key}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className={`${EDITOR_HEIGHT} relative overflow-hidden`}>
              <div className="flex h-full">
                <pre
                  ref={lineRef}
                  className="rounded-l-xl border-r border-slate-200/60 bg-slate-100/50 px-3 py-4 text-right text-xs text-slate-500 select-none dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-slate-400"
                  style={{ width: 50 }}
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
                  className="h-full flex-1 resize-none rounded-tr-xl rounded-br-xl bg-transparent p-4 font-mono text-slate-800 placeholder-slate-400 outline-none dark:text-slate-200 dark:placeholder-slate-500"
                  style={{ fontSize: `${fontSize}px`, lineHeight: 1.5 }}
                  placeholder="Write your Java code here..."
                />
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="rounded-xl border border-slate-200/60 bg-white/70 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/70">
            {/* Output Header */}
            <div className="border-b border-slate-200/60 p-4 dark:border-slate-700/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Terminal className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Console Output
                  </span>
                  {executionTime > 0 && (
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                      Exec: {executionTime}ms
                    </span>
                  )}
                  {compileTimeMs !== null && (
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                      Compile: {compileTimeMs}ms
                    </span>
                  )}
                  {runTimeMs !== null && (
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                      Run: {runTimeMs}ms
                    </span>
                  )}
                  {exitCode !== null && (
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                      Exit: {exitCode}
                    </span>
                  )}
                  {memoryKb !== null && (
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                      Mem: {memoryKb} KB
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={copyOutput}
                    disabled={!output}
                    className="rounded-lg p-2 transition-colors hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-green-900/20"
                    title="Copy output"
                  >
                    <Copy className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </button>
                  <button
                    onClick={clearOutput}
                    disabled={!output}
                    className="rounded-lg p-2 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-red-900/20"
                    title="Clear output"
                  >
                    <Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Output Content */}
            <div className={`${EDITOR_HEIGHT} overflow-y-auto`}>
              <pre className="h-full rounded-b-xl bg-transparent p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                {loading ? (
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Executing your Java code...</span>
                  </div>
                ) : output ? (
                  // If API returned an error stage, show a small header then raw output
                  <div className="space-y-3">
                    {remoteStage && (
                      <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                        Stage: {remoteStage}
                      </div>
                    )}
                    {status === "error" && (
                      <div className="mb-2 text-sm font-semibold text-red-600 dark:text-red-400">
                        Compilation / Runtime Error
                      </div>
                    )}

                    {/* If we have dedicated stdout/stderr fields, render them separately */}
                    {(compileTimeMs !== null ||
                      runTimeMs !== null ||
                      exitCode !== null) && (
                      <div className="rounded-md border bg-gradient-to-r from-slate-50 to-white p-3 dark:from-slate-900/10 dark:to-slate-800/20">
                        <div className="text-xs text-slate-500">Metadata</div>
                        <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                          {compileTimeMs !== null && (
                            <div>Compile time: {compileTimeMs} ms</div>
                          )}
                          {runTimeMs !== null && (
                            <div>Run time: {runTimeMs} ms</div>
                          )}
                          {exitCode !== null && (
                            <div>Exit code: {exitCode}</div>
                          )}
                          {memoryKb !== null && (
                            <div>Memory: {memoryKb} KB</div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="rounded-md border bg-gradient-to-b from-white to-slate-50 p-3 dark:from-slate-900/10 dark:to-slate-800/20">
                      <div className="text-xs text-slate-500">
                        Program Output
                      </div>
                      <pre className="mt-2 text-sm whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                        {output}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-400 italic dark:text-slate-500">
                    <div className="mb-2 flex items-center space-x-2">
                      <Info className="h-4 w-4" />
                      <span>Ready to run your Java code</span>
                    </div>
                    <div className="ml-6 space-y-1 text-xs">
                      <p>• Write your Java code in the editor</p>
                      <p>
                        • Click "Run Code" or press Ctrl/Cmd+Enter to execute
                      </p>
                      <p>• View compilation and runtime output here</p>
                    </div>
                  </div>
                )}
              </pre>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="mt-6 rounded-xl border border-slate-200/60 bg-white/50 shadow-sm backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50">
          <div className="p-4">
            <div className="mb-3 flex items-center space-x-2">
              <Settings className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Compiler Information
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-slate-600 dark:text-slate-400">
                  Java 11+ Compatible
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-slate-600 dark:text-slate-400">
                  Online Compilation
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <span className="text-slate-600 dark:text-slate-400">
                  Real-time Execution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      {toast && (
        <div className="fixed right-6 bottom-6 z-50">
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/90 px-4 py-3 text-white shadow-xl backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Info className="h-4 w-4 text-blue-400" />
              <span className="text-sm">{toast}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
